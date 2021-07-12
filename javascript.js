var start = new Date().getTime();

function randomColour()
{
  var letters = "0123456789ABCDEF".split('');
  var colour = "#";

  for(var i = 0; i < 6; i++)
  {
    colour = colour + letters[Math.floor(Math.random() * 16)];
  }
  return colour;
}

function shapeAppear()
{
  if (Math.random() < 0.5)
  {
    document.getElementById("shape").style.borderRadius = "50%";
  }
  else
  {
    document.getElementById("shape").style.borderRadius = "0%";
  }
  var top = Math.random() * 250;
  var left = Math.random() * 860;
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.left = left + "px";

  var width = (Math.random() * 100) + 50;
  document.getElementById("shape").style.width = width + "px";
  document.getElementById("shape").style.height = width + "px";

  document.getElementById("shape").style.backgroundColor = randomColour();

  document.getElementById("shape").style.display = "block";
  start = new Date().getTime();
}

function shapeDelay()
{
  setTimeout(shapeAppear, Math.random() * 2000);
}

shapeDelay();

document.getElementById("shape").onclick = function()
{
  document.getElementById("shape").style.display = "none";

  var end = new Date().getTime();
  var time = end - start;
  document.getElementById("time-taken").innerHTML = time/1000 + "s";

  shapeDelay();
}