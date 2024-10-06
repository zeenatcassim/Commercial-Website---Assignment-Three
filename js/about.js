//Sidebar
//references to buttons and sidebar
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const sideBar = document.querySelector(".sidebar");

//functions for the buttons
closeBtn.addEventListener("click", function(){
   sideBar.classList.remove("show-sidebar");
})

openBtn.addEventListener("click", function(){
    sideBar.classList.add("show-sidebar"); 
})

//Navigation
const homeBtn = document.querySelector(".home-btn");
const designBtn = document.querySelector(".design-btn");
const theoryBtn = document.querySelector(".theory-btn");
const dataBtn = document.querySelector(".data-btn");

if (designBtn) {
    designBtn.addEventListener("click", function(){
     window.location.href = "/Commercial-Website---Assignment-Three/html/design.html";
      })
} 
 if (theoryBtn) {
    theoryBtn.addEventListener("click", function(){
    window.location.href = "/Commercial-Website---Assignment-Three/html/theory.html"; })
}
 if (dataBtn) {
    dataBtn.addEventListener("click", function(){
    window.location.href = "/Commercial-Website---Assignment-Three/html/data viz.html";
    })
}
 if (homeBtn) {
    homeBtn.addEventListener("click", function(){
    window.location.href = "/Commercial-Website---Assignment-Three/index.html";})
}

//Displaying information about API dynamically through JS
 
import { apiContent } from "./content.js";

const fullSection = document.querySelector(".API-container");

displayContents(apiContent);

function displayContents(contents){
let displayContents = contents.map(function(content){
    return`<section class="API-container">
        <section class="API-one">
        <h2 class="API-title">${content.title}</h2>
        <p class="API-info">${content.paragraph}</p>
      </section>
    </section>`
}).join("");
fullSection.innerHTML = displayContents;
}


