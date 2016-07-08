/* global $, THREE */
/* eslint-disable no-console */
import React, { Component, PropTypes } from 'react';

const _MIN_DIST = 5;
const _MAX_DIST = 50;

class Canvas extends Component {
  constructor(props) {
    super(props);

    // Center Sphere Settings
    this.center_pulse = true;
    this.center_speed = 0.01;

    this.expansionDirection = 1;
    this.expansionSizeMax = 120;
    this.sizeChange = 0.001;
    this.time = 0;
    this.center_speed = 0.01;
    this.initRender = true;
    this.scene = new THREE.Scene();
    this.WIDTH = window.innerWidth;
    this.HEIGHT = window.innerHeight;
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
    this.camera = new THREE.PerspectiveCamera(45, this.WIDTH / this.HEIGHT, 1, 10000000);
    this.camera.position.z = 1000;
    this.scene.add(this.camera);
    this.light = new THREE.PointLight(0xffffff);
    this.light.position.set(-100, 200, 100);
    this.scene.add(this.light);
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

    this.outerBall = new THREE.Object3D();
    this.scene.add(this.outerBall);

    this.animate = this.animate.bind(this);
    this.colors = { Verb: '#9F0DFF', Context: '#550CE8', Action: '#0F00FF',
      Keyword: '#0C39E8', Function: '#0D7EFF', Native: 'white' };

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
      innerBallArray: [],
      centerSphere: null,
      labels: ['Verb', 'Context', 'Action', 'Keyword', 'Function', 'Native'],
    };
  }

  componentDidMount() {
    const { dispatch, toggleLabelStatus } = this.props;
    dispatch(toggleLabelStatus(true));
    this.container = document.getElementById('kavr-canvas');
    this.container.appendChild(this.renderer.domElement);

    window.addEventListener('resize', () => {
      this.WIDTH = window.innerWidth;
      this.HEIGHT = window.innerHeight;
      this.renderer.setSize(this.WIDTH, this.HEIGHT);
      this.camera.aspect = this.WIDTH / this.HEIGHT;

      this.camera.updateProjectionMatrix();
    });

    this.state.labels.forEach(label => {
      this.getNeo4jFuncs(label);
    });

    this.state.centerSphere = this.centerSphere();
  }

  componentWillReceiveProps(nextProps) {
    this.center_speed = nextProps.isRecording ? 0.05 : 0.01;
    const { dispatch, labelSpheres, labelsStatus, toggleLabelStatus } = nextProps;
    if (labelSpheres.length === this.state.labels.length
        && labelsStatus === false && this.initRender) {
      this.mapSpheres();
      this.initRender = false;
    } else if (labelSpheres.length === this.state.labels.length) {
      dispatch(toggleLabelStatus(false));
    }
  }

  getNeo4jFuncs(type) {
    const { dispatch, fetchNodes } = this.props;
    dispatch(fetchNodes(type));
  }

  sphereMaker(x, y, z, color) {
    const sphereGeometry = new THREE.SphereGeometry(5, 8, 6, 0, 6.3, 0, 3.1);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color, wireframe: true });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = x;
    sphere.position.y = y;
    sphere.position.z = z;
    return sphere;
  }

  labelSphereMaker(x, y, z) {
    const sphereGeometry = new THREE.SphereGeometry(15, 8, 6, 0, 6.3, 0, 3.1);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: '#9C96FA',
      morphTargets: true,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = x;
    sphere.position.y = y;
    sphere.position.z = z;
    return sphere;
  }

  centerSphere() {
    const sphereGeometry = new THREE.SphereGeometry(150, 32, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: '#6A1BBF', wireframe: true });

    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 0;
    this.outerBall.add(sphere);

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
    const { labelSpheres } = this.props;
    labelSpheres.forEach((node, index) => {
      const color = this.colors[node.name];
      const innerBall = new THREE.Object3D();
      innerBall.position.x = this.mainPositions[index][0];
      innerBall.position.y = this.mainPositions[index][1];
      innerBall.position.z = this.mainPositions[index][2];

      const labelSphere = this.labelSphereMaker(0, 0, 0);
      labelSphere.name = node.name;
      this.state.innerBallArray.push(innerBall);
      innerBall.add(labelSphere);
      this.outerBall.add(innerBall);

      node.values.forEach((value) => {
        const firstSphere = labelSphere.position;
        const pos = [firstSphere.x, firstSphere.y, firstSphere.z];

        const newSphere = this.sphereMaker(
          ...this.randomCoordinates(...pos, _MIN_DIST, _MAX_DIST), color);
        newSphere.name = value;
        innerBall.add(newSphere);
      });
    });
    this.animate();
  }

  animate() {
    this.time++;
    requestAnimationFrame(this.animate);

    if (this.time % this.expansionSizeMax === 0) {
      this.expansionDirection = this.expansionDirection * -1;
    }

    this.state.centerSphere.rotation.x += this.center_speed;
    this.state.centerSphere.rotation.y += this.center_speed;

    if (this.center_pulse) {
      this.state.centerSphere.scale.x = Math.sin(this.time / 30) / 10.5 + 1;
      this.state.centerSphere.scale.y = Math.sin(this.time / 30) / 10.5 + 1;
      this.state.centerSphere.scale.z = Math.sin(this.time / 30) / 10.5 + 1;
    } else {
      this.state.centerSphere.scale.x = 1;
      this.state.centerSphere.scale.y = 1;
      this.state.centerSphere.scale.z = 1;
    }

    this.outerBall.rotation.z += 0.01;
    this.outerBall.rotation.x += 0.01;

    for (let i = 0; i < this.state.innerBallArray.length; i++) {
      this.state.innerBallArray[i].rotation.z -= 0.05;
    }

    this.controls.update();
    this.renderCanvas();
  }

  renderCanvas() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div>
        <div id="kavr-canvas" className="col s12"></div>
      </div>
    );
  }
}

Canvas.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetchNodes: PropTypes.func.isRequired,
  labelSpheres: PropTypes.array,
  toggleLabelStatus: PropTypes.func.isRequired,
};

export default Canvas;
