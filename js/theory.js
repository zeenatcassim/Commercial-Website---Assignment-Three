
//Sidebar Toggle//

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
const aboutBtn = document.querySelector(".about-btn");
const dataBtn = document.querySelector(".data-btn");

if (designBtn) {
    designBtn.addEventListener("click", function(){
     window.location.href = "/Commercial-Website---Assignment-Three/html/design.html";
      })
} 
 if (aboutBtn) {
    aboutBtn.addEventListener("click", function(){
    window.location.href = "/Commercial-Website---Assignment-Three/html/about.html"; })
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


//Essay

import { essayContents } from "./content.js";

const essayContainer = document.querySelector('.essay-container');

//need to loop through essayContents
essayContents.forEach(content => {
    //creating a new section for each part
    const section = document.createElement('section');
    section.classList.add('essay-section');

    //creating and adding the title
    const title = document.createElement('h3');
    title.textContent = content.title;
    section.appendChild(title);

    //creating and adding the paragraphs
    for (let i = 1; i < Object.keys(content).length; i++) {
        if (content [`p${i}`]) {
            const paragraph = document.createElement('p');
            paragraph.textContent = content[`p${i}`];
            section.appendChild(paragraph);
        }

      //images
      if(content[`img${i}`]){
        const img = document.createElement('img');
        img.src = content[`img${i}`];
        section.appendChild(img);
      }
    }

    //adding section to essay container
    essayContainer.appendChild(section);
});

//Workflow

import { workFlow } from "./content.js";

const workflowContainer = document.querySelector('.workflow-container');

workFlow.forEach(item => {
    const h3 = document.createElement('h3');
    h3.textContent = item.h3;

    const pElement = document.createElement('p');
    pElement.textContent = item.p;

    workflowContainer.appendChild(h3);
    workflowContainer.appendChild(pElement);
})