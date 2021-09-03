(function () {
  'use strict';
  // Buttons variables
  const stopButton = document.getElementById('stopButton');
  const slowButton = document.getElementById('slowButton');
  const goButton = document.getElementById('goButton');

  // Light variables
  const stopLight = document.getElementById('stopLight');
  const slowLight = document.getElementById('slowLight');
  const goLight = document.getElementById('goLight');

  // Listener for click on buttons
  stopButton.addEventListener("click", function () {
    stopLight.classList.toggle("stop");
  });

  slowButton.addEventListener("click", function () {
    slowLight.classList.toggle("slow");
  });

  goButton.addEventListener("click", function () {
    goLight.classList.toggle("go");
  });


})();
