
//Navigation
const aboutBtn = document.querySelector(".about-btn");
const homeBtn = document.querySelector(".home-btn");
const theoryBtn = document.querySelector(".theory-btn");
const dataBtn = document.querySelector(".data-btn");

if (aboutBtn) {
    aboutBtn.addEventListener("click", function(){
     window.location.href = "/Commercial-Website---Assignment-Three/html/About.html";
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

//Display wireframes

const wireframeContainer = document.querySelector(".wireframe-container");

import { wireframeImages } from "./content.js";
import { wireframeSections } from "./content.js";
import { styleGuide } from "./content.js";

function addSection(index){
    const section = document.createElement('section');
    section.classList.add('wireframe-container');

    section.innerHTML = `
       <h3 class="wireframe-title">${wireframeSections[index].title}</h3>
          <p class="wireframe-content">${wireframeSections[index].paragraph}</p>
          <section class="img-btn-container">
            <button class="arrow-btn left-btn">
              <img
                class="arrow-btn-img-left"
                src="/Commercial-Website---Assignment-Three/images/32213.png"
                alt=""
              />
            </button>
            <img src="${wireframeImages[index].image1}" alt="" class="dynamic-img" />
            <button class="arrow-btn right-btn">
              <img
                class="arrow-btn-img"
                src="/Commercial-Website---Assignment-Three/images/32213.png"
                alt=""
              />
            </button>
          </section>
    `;
    wireframeContainer.appendChild(section);

    //swap through images
    let currentImageIndex = 0;
    const images = Object.values(wireframeImages[index]);

    const leftBtn = section.querySelector('.left-btn');
    const rightBtn = section.querySelector('.right-btn');

    const imgElement = section.querySelector('.dynamic-img');
   
    leftBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        imgElement.src = images[currentImageIndex];

        console.log(currentImageIndex);
      });
    
      rightBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgElement.src = images[currentImageIndex];

        console.log(currentImageIndex);
      });
}

for(let i = 0; i < 3; i++){
    addSection(i);
}


const styleGuideContainer = document.querySelector('.styleguide-container');

function populateStyleGuide(styleGuide){
  styleGuide.forEach((sectionData, index) => {
    const container = document.createElement('section');
    container.classList.add('style-guide-section'); // Use a more specific class if needed

    container.innerHTML = `
      <h3 class="style-guide-title">${sectionData.h3}</h3>
      <p class="style-guide-content">${sectionData.p || 'No description available.'}</p>
       ${index === 1 ? `<img src="${sectionData.img || '/path/to/default-image.png'}" alt="${sectionData.h3} image" class="style-guide-image" />` : ''}
    `;
  styleGuideContainer.appendChild(container);
}
)}

populateStyleGuide(styleGuide);