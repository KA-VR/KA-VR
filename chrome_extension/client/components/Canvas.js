/* global THREE */
import React, { Component } from 'react';
// needs to query port 7474 to retrieve verbs from database
// move functions over to here


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
    this.colors = { 1: '#008075', 2: '#695aa9' };
    this.verbSpheres = [];

    this.mapSpheres = this.mapSpheres.bind(this);
    this.SphereMaker = this.SphereMaker.bind(this);
    this.LineMaker = this.LineMaker.bind(this);
    this.animate = this.animate.bind(this);
    this.renderCanvas = this.renderCanvas.bind(this);

    this.state = {
      // allSpheres: [],
      allSpheres: [
        { name: 'Kent', id: 1 },
        { name: 'Kent', id: 1 },
        { name: 'Kent', id: 1 },
        { name: 'Alex', id: 2 },
        { name: 'Victoria', id: 2 },
        { name: 'Rodaan', id: 2 },
      ],
      lines: [{
        lineGeometry: new THREE.Geometry(),
      }],
    };
  }

  componentDidMount() {
    this.container = document.getElementById('kavr-canvas');
    this.container.appendChild(this.renderer.domElement);
    this.mapSpheres();
    // console.log(THREE.OrbitControls);
    this.container = document.getElementById('kavr-canvas');
    this.container.appendChild(this.renderer.domElement);

    window.addEventListener('resize', () => {
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      this.renderer.setSize(WIDTH, HEIGHT);
      this.camera.aspect = WIDTH / HEIGHT;
      this.camera.updateProjectionMatrix();
    });
    this.LineMaker();
    this.animate();
  }

  SphereMaker(x, y, z, color) {
    const sphereGeometry = new THREE.SphereGeometry(5, 8, 6, 0, 6.3, 0, 3.1);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color, wireframe: true });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = x;
    sphere.position.y = y;
    sphere.position.z = z;
    // console.log(this);
    this.scene.add(sphere);
    return sphere;
  }

  mapSpheres() {
    this.state.allSpheres.map((node) => {
      const randomX = Math.random() * 100 - 1;
      const randomY = Math.random() * 100 - 1;
      const randomZ = Math.random() * 100 - 1;
      const color = this.colors[node.id];
      const newSphere = this.SphereMaker(randomX, randomY, randomZ, color);
      this.verbSpheres.push(newSphere);
      if (node.id === 1) {
        this.state.lines[0].lineGeometry.vertices.push(newSphere.position);
      }
      return newSphere;
    });
  }

  LineMaker() {
    const lineMaterial = new THREE.Line(this.state.lines[0].lineGeometry,
      new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 1 }));
    this.scene.add(lineMaterial);
    this.state.lines[0].lineGeometry.vertices.push(this.state.lines[0].lineGeometry.vertices[0]);
  }

  animate() {
    this.time++;
    requestAnimationFrame(this.animate);
    if (this.time % this.expansionSizeMax === 0) {
      this.expansionDirection = this.expansionDirection * -1;
    }
    this.verbSpheres.forEach((sphere) => {
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
