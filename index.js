'use strict';

var pointA = {x: 20, y:0};
var pointB = {x:630, y:10};

//DOM
var canvas = document.getElementById('print');
var divPoint1 = document.createElement('div');
var divPoint2 = document.createElement('div');
var line = document.createElement('div');

divPoint1.classList.add('point');
divPoint2.classList.add('point');
line.classList.add('line');

//Draw the elements in the div
function draw() {
  divPoint1.style.left = pointA.x + 'px';
  divPoint1.style.top = pointA.y + 'px';

  divPoint2.style.left = pointB.x + 'px';
  divPoint2.style.top = pointB.y + 'px';

  line.style.left = (pointA.x + 2.5) + 'px';
  line.style.top = (pointA.y + 2.5) + 'px';

  line.style.transform = 'rotateZ(' + calculateAngle() + 'deg)';
  line.style.width = pitagoras() + 'px';
}

//Get 2 points angle based on atan2
function calculateAngle() {
  //var output = theta;
  var output = Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180 / Math.PI;
  console.log(output);
  return output;
}

//Calculate distance between 2 points
function pitagoras() {
  //return Math.hypot(pointB.x - pointA.x, pointB.y - pointA.y);
  return Math.sqrt( Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
}

//To generate aleatory points
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//Draw each 1s
window.setInterval(function() {
  pointA = {x: getRandomArbitrary(0, 650), y:getRandomArbitrary(0, 450)};
  pointB = {x: getRandomArbitrary(0, 650), y:getRandomArbitrary(0, 450)};
  draw();
}, 1000);

//Add elements to div container
canvas.appendChild(line);
canvas.appendChild(divPoint1);
canvas.appendChild(divPoint2);
