const server = document.getElementById('multiplayer-menu');

server.style.display = 'none';

document.addEventListener('DOMContentLoaded', (event) => {
const multiplayer = document.getElementById('multiplayer');
const titlescreen = document.getElementById('titlescreen');

multiplayer.addEventListener('click', function() {
  titlescreen.style.display = 'none';
  server.style.display = 'inline';
 });
}); 
