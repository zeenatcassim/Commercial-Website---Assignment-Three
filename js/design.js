
//Navigation Bar
/*const essayBtn = document.getElementById("goToEssayBtn");
if(essayBtn){
essayBtn.addEventListener("click", function(){
window.location.href ="essay.html";
});    
}
*/
const homeBtn = document.querySelector("home-btn");

if(homeBtn){
  homeBtn.addEventListener("click", function(){
    window.location.href = "index.html";
  });
}
console.log(homeBtn);

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

    //swap images
    let currentImageIndex = 0;
    const images = [wireframeImages[index].image1, wireframeImages[index].image2];

    const leftBtn = section.querySelector('.left-btn');
    const rightBtn = section.querySelector('.right-btn');
    const imgElement = section.querySelector('.dynamic-img');
   
    leftBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        imgElement.src = images[currentImageIndex];
      });
    
      rightBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgElement.src = images[currentImageIndex];
      });
}

for(let i = 0; i < 3; i++){
    addSection(i);
}