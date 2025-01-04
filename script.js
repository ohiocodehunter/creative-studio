 // Three.js Animation
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 const renderer = new THREE.WebGLRenderer({
     canvas: document.querySelector('#hero-canvas'),
     alpha: true
 });

 renderer.setSize(window.innerWidth, window.innerHeight);

 // Create animated background
 const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
 const material = new THREE.MeshBasicMaterial({
     color: 0xffffff,
     wireframe: true
 });
 const torus = new THREE.Mesh(geometry, material);

 scene.add(torus);
 camera.position.z = 30;

 function animate() {
     requestAnimationFrame(animate);

     torus.rotation.x += 0.01;
     torus.rotation.y += 0.005;

     renderer.render(scene, camera);
 }

 animate();

 // Resize handler
 window.addEventListener('resize', () => {
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix();
     renderer.setSize(window.innerWidth, window.innerHeight);
 });

 // Smooth scroll
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });