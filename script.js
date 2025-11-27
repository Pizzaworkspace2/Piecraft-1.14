document.addEventListener('DOMContentLoaded', (event) => {
const multiplayer = document.getElementById('multiplayer');
const titlescreen = document.getElementById('titlescreen');

multiplayer.addEventListener('click', function() {
  titlescreen.style.display = "none";
});
