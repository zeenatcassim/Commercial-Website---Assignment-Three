
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

const essay =[
    {}
]