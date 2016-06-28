var fakeDB = [{name: 'Kent', id: 1},{name: 'Kent', id: 1},{name: 'Kent', id: 1},{name: 'Alex', id: 2},{name: 'Victoria', id: 2},{name: 'Rodaan', id: 2}];
var colors = {1: '#008075', 2: '#695aa9'};
var scene, container, camera, renderer, sphere, sphereGeometry, sphereMaterial, line, lineMaterial, lineMaterial2;
var lineGeometry, lineGeometry2;
var allSpheres = [];
var expansionDirection = 1;
var expansionSizeMax = 120;
var sizeChange = 0.001;
var time = 0;

init();
animate();

function init() {
  lineGeometry = new THREE.Geometry();
  lineGeometry2 = new THREE.Geometry();
  container = document.getElementById('kavr-canvas');

  scene = new THREE.Scene();
  var WIDTH = window.innerWidth, HEIGHT = window.innerHeight;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  container.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 10000);
  camera.position.z = 1000;

  scene.add(camera);

  window.addEventListener('resize', function() {
    var WIDTH = window.innerWidth, HEIGHT = window.innerHeight;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  });

  // supposed to set background color of scene
  // renderer.setClearColor(null, 1);

  var light = new THREE.PointLight(0xffffff);
  light.position.set(-100, 200, 100);
  scene.add(light);
  
  allSpheres = fakeDB.map(function(node) {
    var randomX = Math.random() * 100 - 1;
    var randomY = Math.random() * 100 - 1;
    var randomZ = Math.random() * 100 - 1;
    var color = colors[node.id];
    var newSphere = new sphereMaker(randomX, randomY, randomZ, color);
    if(node.id === 1) {
      lineGeometry.vertices.push(sphere.position);
    } else {
      lineGeometry2.vertices.push(sphere.position);
    } 
    return newSphere;
  });

  // for (var i = 0; i < 100; i++) {
  //   var randomX = Math.random() * 100 - 1;
  //   var randomY = Math.random() * 100 - 1;
  //   var randomZ = Math.random() * 100 - 1;
  //   var newSphere = new sphereMaker(randomX, randomY, randomZ, 'white');
  //   allSpheres.push(newSphere);
  // }

  lineMaker();
  controls = new THREE.OrbitControls(camera, renderer.domElement);
};

function sphereMaker(x, y, z, color) {
  sphereGeometry = new THREE.SphereGeometry(5, 8, 6, 0, 6.3, 0, 3.1);
  sphereMaterial = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.x = x;
  sphere.position.y = y;
  sphere.position.z = z;
  scene.add(sphere);

  return sphere;
};

function lineMaker() {
  
  lineMaterial = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 1 }));
  lineMaterial2 = new THREE.Line(lineGeometry2, new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 1 }));
  // line = new THREE.Mesh(lineGeometry, lineMaterial);
  scene.add(lineMaterial);
  scene.add(lineMaterial2);
  lineGeometry.vertices.push(lineGeometry.vertices[0]);
  lineGeometry2.vertices.push(lineGeometry2.vertices[0]);
};

function animate(sphere) {
  time++;
  requestAnimationFrame(animate);
  if(time % expansionSizeMax === 0) {
    expansionDirection = expansionDirection * -1;
  }
  allSpheres.forEach(function(sphere) {
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    sphere.scale.x += sizeChange*expansionDirection;
    sphere.scale.y += sizeChange*expansionDirection;
    sphere.scale.z += sizeChange*expansionDirection;
   
  });

  controls.update();
  render();
};

function render() {

  renderer.render(scene, camera);
};
