(function () {
  'use strict';
  /* Part I */
  // Buttons variables
  const stopButton = document.getElementById('stopButton');
  const slowButton = document.getElementById('slowButton');
  const goButton = document.getElementById('goButton');

  // Light variables
  const stopLight = document.getElementById('stopLight');
  const slowLight = document.getElementById('slowLight');
  const goLight = document.getElementById('goLight');

  // Listener for click on buttons
  stopButton.addEventListener('click', function () {
    stopLight.classList.toggle('stop');
  });

  slowButton.addEventListener('click', function () {
    slowLight.classList.toggle('slow');
  });

  goButton.addEventListener('click', function () {
    goLight.classList.toggle('go');
  });

  /* Part II */
  /*
  Add new DOM event listeners and handlers to log the mouse state of each button.
  - When a user's mouse enters a button, log `"Entered <textContent> button"` to the console.
  - When a user's mouse leaves a button, log `"Left <textContent> button"` to the console.

  ** TIP:** Each event type will need a separate event listener.
  */
  // Buttons variable
  // const button = document.querySelectorAll('div #controls .button');

  // Listener mouseenter and mouseleave
  stopButton.addEventListener('mouseenter', function () {
    console.log(`"Entered <div id="stopButton" class="button">Stop</div> button"`)
  });

  stopButton.addEventListener('mouseleave', function () {
    console.log(`"Left <div id="stopButton" class="button">Stop</div> button"`)
  });

  slowButton.addEventListener('mouseenter', function () {
    console.log(`"Entered <div id="slowButton" class="button">Slow</div> button"`)
  });

  slowButton.addEventListener('mouseleave', function () {
    console.log(`"Left <div id="slowButton" class="button">Slow</div> button"`)
  });

  goButton.addEventListener('mouseenter', function () {
    console.log(`"Entered <div id="goButton" class="button">Go</div> button"`)
  });

  goButton.addEventListener('mouseleave', function () {
    console.log(`"Left <div id="goButton" class="button">Go</div> button"`)
  });

  /* ## Bonus */
  /*
  Add **one** DOM event listener and **one** handler to log the state of each bulb.
  - When a user clicks a button that just turned on, log`"<textContent> bulb on"` to the console.
  - When a user clicks a button that just turned off, log`"<textContent> bulb off"` to the console.
  **TIP:** A click on only a button should cause a message to be logged to the console. 
  */



})();

