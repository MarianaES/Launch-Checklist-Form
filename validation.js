export function validData() {
    // Option 1
let pilotName = document.getElementById("pilotName");
let copilotName = document.getElementById("copilotName");
let fuelLevel = document.getElementById("fuelLevel");
let cargoMass = document.getElementById("cargoMass");
   
   let fields = {
      pilotName: pilotName.value,
      copilotName: copilotName.value, 
      fuelLevel: fuelLevel.value, 
      cargoMass: cargoMass.value
   };

   for (let field in fields) {

      if (fields[field] === "") {
         alert("All fields are required!");
         break;
         return false;

      } if (field === "pilotName" || field === "copilotName") {
         if (!isNaN(fields[field])) {
            alert("Pilot and Co-pilot Name must be alphabetical values.");  
            return false;
         }

      } if (field === "fuelLevel" || field === "cargoMass") {
         if (isNaN(fields[field])) {
            alert("Fuel Level and Cargo Mass must be numeric values.");  
            return false;
         }
      }

   };

   return true;
   
   /* Option 2
   let validData = true;

   if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      alert("All fields are required!");
      validData = false;
      return validData;
      // event.preventDefault();
   } else {
      // We can not use Number.isNaN() because such method determines whether the passed value is NaN and its type is Number.
      if (!isNaN(pilotName.value)) {
         alert("Pilot Name must be alphabetical values.");
         pilotName.focus();
      } if (!isNaN(copilotName.value)) {
         alert("Co-pilot Name must be alphabetical values.");
         copilotName.focus();
      } if (isNaN(fuelLevel.value)) {
         alert("Fuel Level must be numeric values.");
         fuelLevel.focus();
      } if (isNaN(cargoMass.value)) {
         alert("Cargo Mass must be numeric values.");
         cargoMass.focus();
      }
      validData = false;
      return validData;
   };

    return validData; */

};

export function readyForLaunch() {

   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");

   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   
   /* Question: Is it possible to reset certain values of the HTML elements after each submit?
   To avoid including default values of fuelStatus and cargoStatus. */
   pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
   copilotStatus.innerHTML = `Co-pilot ${copilotName.value} Ready`;

   faultyItems.style.visibility = "visible";
   fuelStatus.innerHTML = "Fuel level high enough for launch";
   cargoStatus.innerHTML = "Cargo mass low enough for launch";
   
   if (fuelLevel.value > 10000 && cargoMass.value > 0 && cargoMass.value < 10000){
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style.color = "green";
      
      return true;

   } else if (fuelLevel.value <= 10000 || cargoMass.value >= 10000){
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "#f54242";   
      if (fuelLevel.value <= 10000 ){
         fuelStatus.innerHTML = "Fuel level too low for launch";
      } if (cargoMass.value >= 10000){
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
      } 

      return false;
      
   };
};

export function selectDestination () {
   fetch("https://handlers.education.launchcode.org/static/planets.json")
   .then( function(response) {
      response.json().then( function(json) {
         console.log(json);
         const randomIndex = Math.floor(Math.random() * json.length);
         const missionTarget = document.getElementById("missionTarget");

         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[randomIndex].name}</li>
               <li>Diameter: ${json[randomIndex].diameter}</li>
               <li>Star: ${json[randomIndex].star}</li>
               <li>Distance from Earth: ${json[randomIndex].distance}</li>
               <li>Number of Moons: ${json[randomIndex].moons}</li>
            </ol>
            <img src="${json[randomIndex].image}">`;
                  
      });
   });
};

export function hideMission () {
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = "";
};