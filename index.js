/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('container', '/assets/particles.json', function() {
  console.log('particles is working');
});

function smoothScroll()
{
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

window.onload = function() {
  var arrow = document.getElementById("arrow");
  var projects_button = document.getElementById("projects-button")
  arrow.onclick = smoothScroll;
  projects_button.onclick = smoothScroll;
}