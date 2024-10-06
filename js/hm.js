
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

//Navigation Buttons

const designBtn = document.querySelector(".design-btn");
const theoryBtn = document.querySelector(".theory-btn");
const dataBtn = document.querySelector(".data-btn");
const aboutBtn = document.querySelector(".about-btn");

if (designBtn) {
    designBtn.addEventListener("click", function(){
     window.location.href = "html/design.html"; })
} 
 if (theoryBtn) {
    theoryBtn.addEventListener("click", function(){
    window.location.href = "html/theory.html"; })
}
 if (dataBtn) {
    dataBtn.addEventListener("click", function(){
    window.location.href = "html/data viz.html";
    })
}
 if (aboutBtn) {
    aboutBtn.addEventListener("click", function(){
    window.location.href = "html/About.html";})
}

