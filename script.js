// Write your JavaScript code here!
import { validData, readyForLaunch, selectDestination, hideMission } from './validation.js';

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      
      if (!validData()) {
         event.preventDefault();
      } else {
         if (!readyForLaunch()) {
            event.preventDefault();
            hideMission();
         } else {
            selectDestination();
         }
      }

      });
});
