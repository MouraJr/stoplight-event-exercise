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
  stopButton.addEventListener('click', () => {
    stopLight.classList.toggle('stop');
  });

  slowButton.addEventListener('click', () => {
    slowLight.classList.toggle('slow');
  });

  goButton.addEventListener('click', () => {
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
  const buttons = document.querySelectorAll('.button');


  for (let btn of buttons) {
    btn.addEventListener('mouseenter', () => {
      console.log(`"Entered ${btn.innerHTML} button"`)
    });

    btn.addEventListener('mouseleave', () => {
      console.log(`"Left ${btn.innerHTML} button"`)
    });

    /* ## Bonus */
    /*
    Add **one** DOM event listener and **one** handler to log the state of each bulb.
    - When a user clicks a button that just turned on, log`"<textContent> bulb on"` to the console.
    - When a user clicks a button that just turned off, log`"<textContent> bulb off"` to the console.
    **TIP:** A click on only a button should cause a message to be logged to the console. 
    */
    let count = 1;

    btn.addEventListener('click', function (event) {
      count++;
      console.log(count);
      if (count % 2 === 0) {
        console.log(`${event.currentTarget.innerHTML} bulb on`);
      } else if (count % 2 !== 0) {
        console.log(`${event.currentTarget.innerHTML} bulb off`);
      }
    });
  }


})();

