// console.log("monkey");

// import { Application } from "@hotwired/stimulus";

// import PasswordController from "./controllers/password_controller.js";

// window.Stimulus = Application.start();
// Stimulus.register("password", PasswordController);


(function() {
  var cors_api_host = 'cors-anywhere.herokuapp.com';
  var cors_api_url = 'https://' + cors_api_host + '/';
  var slice = [].slice;
  var origin = window.location.protocol + '//' + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
      var args = slice.call(arguments);
      var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
      if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
          targetOrigin[1] !== cors_api_host) {
          args[1] = cors_api_url + args[1];
      }
      return open.apply(this, args);
  };
})();

const en_tab = document.getElementById("english-tab");
const jp_tab = document.getElementById("japanese-tab");
const en_divs = document.getElementsByClassName("english");
const jp_divs = document.getElementsByClassName("japanese");
var japanese = false;

//switch to English
en_tab.addEventListener("click", (event) => {
  if(japanese){
    //hide Japanese
    var i;
    for(i = 0; i < jp_divs.length; i++){
      jp_divs[i].classList.add("d-none");
    }

    //display English
    var j;
    for(j = 0; j < en_divs.length; j++){
      en_divs[j].classList.remove("d-none");
    }

    japanese = false;
    console.log("english");
  }
})

//switch to Japanese
jp_tab.addEventListener("click", (event) => {
  if(!japanese){
    //hide English
    var i;
    for(i = 0; i < en_divs.length; i++){
      en_divs[i].classList.add("d-none");
    }

    //display Japanese
    var j;
    for(j = 0; j < jp_divs.length; j++){
      jp_divs[j].classList.remove("d-none");
    }

    japanese = true;
    console.log("japanese");
  }
})


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

// console.log(tab_sections[0]);

var current_section = click_here;
var current_tab = click_here;
var switching = false;

const switchTabs = (event) => {
  switching = true;
  current_tab.classList.remove("active");
  event.currentTarget.classList.add("active");
  current_tab = event.currentTarget;
  // console.log(current_tab);
}

const switchSections = (new_section) => {
  // make current section fade out
  current_section.classList.add("tab-hidden");

  setTimeout(() => {
    current_section.classList.add("d-none");
    //display new section
    new_section.classList.remove("d-none");
  }, 300);
  setTimeout(() => {
    new_section.classList.remove("tab-hidden");
    current_section = new_section;
    switching = false;
  }, 400);
}

tech_tab.addEventListener("click", (event) => {
  event.preventDefault();
  // switch tabs
  if(event.currentTarget !== current_tab && switching === false){

    switchTabs(event);
    switchSections(tech_section);
  }
});

favorites_tab.addEventListener("click", (event)=> {
  event.preventDefault();
  // switch tabs
  if(event.currentTarget !== current_tab && switching === false){
    switchTabs(event);
    switchSections(favorites_section);
  }
});

projects_tab.addEventListener("click", (event)=> {
  event.preventDefault();
  // switch tabs
  if(event.currentTarget !== current_tab && switching === false){
    switchTabs(event);
    switchSections(projects_section);
  }
});

forbidden_tab.addEventListener("click", (event)=> {
  event.preventDefault();
  // switch tabs
  if(event.currentTarget !== current_tab && switching === false){
    switchTabs(event);
    switchSections(forbidden_section);
  }
});

// const test_button = document.getElementById("test-button");
// const test_section = document.getElementById("test-section");
// test_button.addEventListener("click", (event)=> {
//   event.preventDefault();

//   if(test_section.classList.contains("tab-hidden")){
//     setTimeout(() => {
//       test_section.classList.remove("tab-hidden");
//     }, 500);

//   } else {
//     setTimeout(() => {
//       test_section.classList.add("tab-hidden");
//     }, 500);

//   }
// });
