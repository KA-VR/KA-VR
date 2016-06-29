/* global THREE */
import React, { Component } from 'react';
import $ from 'jquery';

const _MIN_DIST = 5;
const _MAX_DIST = 50;

class KAVR extends Component {
  constructor(props) {
    super(props);

    this.expansionDirection = 1;
    this.expansionSizeMax = 120;
    this.sizeChange = 0.001;
    this.time = 0;

    this.scene = new THREE.Scene();
    this.WIDTH = window.innerWidth;
    this.HEIGHT = window.innerHeight;
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
    this.camera = new THREE.PerspectiveCamera(45, this.WIDTH / this.HEIGHT, 1, 10000);
    this.camera.position.z = 1000;
    this.light = new THREE.PointLight(0xffffff);
    this.light.position.set(-100, 200, 100);
    this.scene.add(this.light);
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.scene.add(this.camera);
    this.colors = { Verb: 'green', Context: 'yellow', Action: 'red',
      Keyword: 'orange', Function: 'blue', Native: 'pink' };

    this.getNeo4jFuncs = this.getNeo4jFuncs.bind(this);
    this.mapSpheres = this.mapSpheres.bind(this);
    this.mapLabels = this.mapLabels.bind(this);
    this.sphereMaker = this.sphereMaker.bind(this);
    this.lineMaker = this.lineMaker.bind(this);
    this.animate = this.animate.bind(this);
    this.renderCanvas = this.renderCanvas.bind(this);
    this.randomCoordinates = this.randomCoordinates.bind(this);
    this.fatSphere = this.fatSphere.bind(this);
    this.mainPositions = [
      [0, 0, 500],
      [0, 500, 0],
      [500, 0, 0],
      [-500, 0, 0],
      [0, -500, 0],
      [0, 0, -500],
    ];

    this.state = {
      allSpheres: [],
      eachSphere: [],
      centerSphere: null,

      labels: ['Verb', 'Context', 'Action', 'Keyword', 'Function', 'Native'],
      lines: [],
    };
  }

  componentDidMount() {
    this.container = document.getElementById('kavr-canvas');
    this.container.appendChild(this.renderer.domElement);
    this.container = document.getElementById('kavr-canvas');
    this.container.appendChild(this.renderer.domElement);

    window.addEventListener('resize', () => {
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      this.renderer.setSize(WIDTH, HEIGHT);
      this.camera.aspect = WIDTH / HEIGHT;
      this.camera.updateProjectionMatrix();
    });
    this.getNeo4jFuncs('Verb');
    this.getNeo4jFuncs('Context');
    this.getNeo4jFuncs('Action');
    this.getNeo4jFuncs('Keyword');
    this.getNeo4jFuncs('Function');
    this.getNeo4jFuncs('Native');
    this.state.centerSphere = this.centerSphere();
    this.animate();
  }

  getNeo4jFuncs(type) {
    $.ajax({
      url: 'http://localhost:7750/api/nodes',
      type: 'POST',
      dataType: 'json',
      data: {
        type,
      },
      success: data => {
        this.state.allSpheres.push({ name: type, values: data });
        if (this.state.allSpheres.length === this.state.labels.length) {
          this.mapSpheres();
        }
      },
      error: err => {
        console.log('GET error:', err);
      },
    });
  }

  sphereMaker(x, y, z, color) {
    const sphereGeometry = new THREE.SphereGeometry(5, 8, 6, 0, 6.3, 0, 3.1);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color, wireframe: true });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = x;
    sphere.position.y = y;
    sphere.position.z = z;
    this.scene.add(sphere);
    return sphere;
  }

  fatSphere(x, y, z, color) {
    const sphereGeometry = new THREE.SphereGeometry(15, 8, 6, 0, 6.3, 0, 3.1);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 'purple' });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = x;
    sphere.position.y = y;
    sphere.position.z = z;
    this.scene.add(sphere);
    return sphere;
  }

  centerSphere() {
    const sphereGeometry = new THREE.SphereGeometry(300, 8, 6, 0, 6.3, 0, 3.1);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: '#83F1F2', wireframe: true });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 0;
    this.scene.add(sphere);
    return sphere;
  }

  randomRange(min, max) {
    const posOrNeg = (Math.random() >= 0.5) ? 1 : -1;
    return posOrNeg * (Math.random() * (max - min) + min);
  }

  randomCoordinates(x, y, z, minDist, maxDist) {
    const posX = x != null ? x : 100;
    const posY = y != null ? y : 100;
    const posZ = z != null ? z : 100;

    const hasDist = minDist != null && maxDist != null;
    const randomX = hasDist ? posX + this.randomRange(minDist, maxDist) : posX;
    const randomY = hasDist ? posY + this.randomRange(minDist, maxDist) : posY;
    const randomZ = hasDist ? posZ + this.randomRange(minDist, maxDist) : posZ;

    return [randomX, randomY, randomZ];
  }

  mapSpheres() {
    const context = this;
    this.state.allSpheres.forEach((node, index) => {
      const color = this.colors[node.name];
      if (!this.state.eachSphere[index]) {
        this.state.eachSphere[index] = [];
      }
      if (!this.state.lines[index]) {
        this.state.lines[index] = new THREE.Geometry();
      }

      const fat = this.fatSphere(...this.mainPositions[index], color);
      console.log(fat.position);

      this.state.eachSphere[index].push(fat);
      this.state.lines[index].vertices.push(fat.position);

      node.values.forEach(() => {
        const firstSphere = this.state.eachSphere[index][0].position;
        const pos = [firstSphere.x, firstSphere.y, firstSphere.z];

        const newSphere = this.sphereMaker(
          ...this.randomCoordinates(...pos, _MIN_DIST, _MAX_DIST), color);
        this.state.eachSphere[index].push(newSphere);

        this.state.lines[index].vertices.push(newSphere.position);
        context.lineMaker();
      });
    });
  }

  mapLabels() {
    this.state.labels.map(node => {
      const randomX = Math.random() * 100 - 1;
      const randomY = Math.random() * 100 - 1;
      const randomZ = Math.random() * 100 - 1;
      const color = this.colors[node];
      const newSphere = this.sphereMaker(randomX, randomY, randomZ, color);
      return newSphere;
    });
  }

  lineMaker() {
    this.state.lines.forEach((sphere, index) => {
      this.state.lines[index].vertices.push(this.state.lines[index].vertices[0]);
      const lineMaterial = new THREE.Line(this.state.lines[index],
        new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 1 }));
      this.scene.add(lineMaterial);
    });
  }

  animate() {
    this.time++;
    requestAnimationFrame(this.animate);
    if (this.time % this.expansionSizeMax === 0) {
      this.expansionDirection = this.expansionDirection * -1;
    }
    this.state.eachSphere.forEach(spheres => {
      spheres.forEach(sphere => {
        // eslint-disable-next-line
        sphere.rotation.x += 0.01;
        // eslint-disable-next-line
        sphere.rotation.y += 0.01;

        // eslint-disable-next-line
        sphere.scale.x += this.sizeChange * this.expansionDirection;
        // eslint-disable-next-line
        sphere.scale.y += this.sizeChange * this.expansionDirection;
        // eslint-disable-next-line
        sphere.scale.z += this.sizeChange * this.expansionDirection;
      });
    });

    this.state.centerSphere.rotation.x += 0.01;
    this.state.centerSphere.rotation.y += 0.01;

    this.controls.update();
    this.renderCanvas();
  }

  renderCanvas() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div id="kavr-canvas" className="col-xs-12"></div>
    );
  }
}

export default KAVR;
