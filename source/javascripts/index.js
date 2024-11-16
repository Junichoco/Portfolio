console.log("monkey");

import { Application } from "@hotwired/stimulus";

import PasswordController from "./controllers/password_controller.js";

window.Stimulus = Application.start();
Stimulus.register("password", PasswordController);


const secret_section = document.getElementById("secret");
const password_box = document.querySelector("#password-box");
// const enter_button = document.getElementById("enter-button");
const enter_button = document.querySelector("#forbidden-button");
const message = document.querySelector("#message");

const password1 = "roast";
const password2 = "bread";
var question = 1;
var count = 10;
var passed = false;

enter_button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(password_box.value);

  if(!passed){
    if(question === 1){
      if(password_box.value === password1 && count >= 1){
        message.innerText = `Enter the password ${count} more times.\n`;
        password_box.value = "";
        count = count - 1;
      } else if (password_box.value === password1 && count === 0){
        question = 2;
        message.innerText = "What do you put in a toaster?\n";
        password_box.value = "";
      } else {
        message.innerText = `Wrong password`;
        password_box.value = "";
      }
    } else if (question === 2){
      if(password_box.value === password2){
        message.innerText = "Congratulations! You have unlocked the forbidden section.";
        secret_section.classList.remove("d-none");
        passed = true;
        password_box.classList.add("d-none");
        enter_button.classList.add("d-none");
      } else{
        message.innerText = "What do you put in a toaster?\nWrong answer. Try again.";
        password_box.value = "";
      }
    }
  }

  // console.log(event);
  // console.log(event.currentTarget);
});

const tab_sections = document.getElementsByClassName("tab-section");
const tabs = document.getElementsByClassName("tab-underlined");
const tech_tab = document.getElementById("tech-tab");
const favorites_tab = document.getElementById("favorites-tab");
const projects_tab = document.getElementById("projects-tab");
const forbidden_tab = document.getElementById("forbidden-tab");
const click_here = document.getElementById("click-here");

const tech_section = document.getElementById("tech-stack");
const favorites_section = document.getElementById("favorites");
const projects_section = document.getElementById("projects");
const forbidden_section = document.getElementById("forbidden");

console.log(tab_sections[0]);

const closeAllTabs = () => {
  // tab_sections.forEach(function(section){
  //   section.classList.add("d-none");
  // });
  // tabs.forEach(function(tab){
  //   tab.classList.remove("active");
  // });
  click_here.classList.add("d-none");

  tech_tab.classList.remove("active");
  favorites_tab.classList.remove("active");
  projects_tab.classList.remove("active");
  forbidden_tab.classList.remove("active");
  // document.getElementsByClassName("active").classList.remove("active");

  tech_section.classList.add("d-none");
  favorites_section.classList.add("d-none");
  projects_section.classList.add("d-none");
  forbidden_section.classList.add("d-none");

  tech_section.classList.add("tab-hidden");
  favorites_section.classList.add("tab-hidden");
  projects_section.classList.add("tab-hidden");
  forbidden_section.classList.add("tab-hidden");
}

tech_tab.addEventListener("click", (event) => {
  event.preventDefault();
  closeAllTabs();
  tech_section.classList.remove("d-none");
  tech_section.classList.remove("tab-hidden");
  // document.getElementById("tech-stack").classList.remove("d-none");

  event.currentTarget.classList.add("active");

});

favorites_tab.addEventListener("click", (event)=> {
  event.preventDefault();
  closeAllTabs();
  favorites_section.classList.remove("d-none");
  favorites_section.classList.remove("tab-hidden");
  event.currentTarget.classList.add("active");
});

projects_tab.addEventListener("click", (event)=> {
  event.preventDefault();
  closeAllTabs();
  projects_section.classList.remove("d-none");
  projects_section.classList.remove("tab-hidden");
  event.currentTarget.classList.add("active");
});

forbidden_tab.addEventListener("click", (event)=> {
  event.preventDefault();
  closeAllTabs();
  forbidden_section.classList.remove("d-none");
  forbidden_section.classList.remove("tab-hidden");
  event.currentTarget.classList.add("active");
});

// const test_button = document.getElementById("test-button");
// const test_section = document.getElementById("test-section");
// test_button.addEventListener("click", (event)=> {
//   event.preventDefault();

//   if(test_section.classList.contains("tab-hidden")){
//     test_section.classList.remove("tab-hidden");
//   } else {
//     test_section.classList.add("tab-hidden");
//   }
// });
