// This is where it all goes :)
// import "controllers"

// // Eager load all controllers defined in the import map under controllers/**/*_controller
// import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
// eagerLoadControllersFrom("controllers", application)

// import { Application } from "@hotwired/stimulus";

// import EventListenerController from "./controllers/event_listener_controller.js";

// window.Stimulus = Application.start();
// Stimulus.register("event-listener", EventListenerController);

console.log("misokatsu");

const password = document.querySelector("#password");
// const enter_button = document.getElementById("enter-button");
const enter_button = document.querySelector("#enter-button");

// const number = document.querySelector("#number");

// if(enter_button) {
//   console.log("enter button");
// }

enter_button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  console.log(event.currentTarget);
});
