// Write your JavaScript code here!
import { validData, readyForLaunch, selectDestination, hideMission, awaitLaunchStatus } from './validation.js';

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      
      if (!validData()) {
         // event.preventDefault();
         awaitLaunchStatus();
      } else {
         if (!readyForLaunch()) {
            // event.preventDefault();
            hideMission();
         } else {
            selectDestination();
         }
      }

      });
});
