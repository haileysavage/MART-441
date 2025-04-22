import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.153.0/examples/jsm/loaders/GLTFLoader.js';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lights
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Shape 1: Box
const box = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial({ color: 0xff0051 })
);
box.position.x = -2;
scene.add(box);

// Shape 2: Sphere
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.75, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0x00ffff })
);
sphere.position.x = 2;
scene.add(sphere);

// Load Model
const loader = new GLTFLoader();
let model;

loader.load(
  './model.glb',
  (gltf) => {
    model = gltf.scene;
    model.scale.set(1, 1, 1);
    model.position.y = -1;
    scene.add(model);
  },
  undefined,
  (error) => {
    console.error('Error loading model:', error);
  }
);

// Animate
function animate() {
  requestAnimationFrame(animate);

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  if (model) {
    model.rotation.y += 0.005;
  }

  renderer.render(scene, camera);
}
animate();

// Responsive
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
