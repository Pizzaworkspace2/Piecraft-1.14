document.addEventListener('DOMContentLoaded', (event) => {
const load = document.getElementById('piecraft');
const server = document.getElementById('multiplayer-menu');
const multiplayer = document.getElementById('multiplayer');
const titlescreen = document.getElementById('titlescreen');

server.style.display = 'none';

multiplayer.style.display = 'none';

titlescreen.style.display = 'none';

setTimeout(function() {
  load.style.display = 'none';
  titlescreen.style.display = 'block';
  multiplayer.style.display = 'block';
}, 2000);

multiplayer.addEventListener('click', function() {
  titlescreen.style.display = 'none';
  server.style.display = 'block';
 });
}); 
