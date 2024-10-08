
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

//Interactive buttons
const dataVizOneBtn = document.querySelector('.data-viz-one');
const dataVizTwoBtn = document.querySelector('.data-viz-two');
const designInterBtn = document.querySelector('.design-inter-btn');
const theoryInterBtn = document.querySelector('.theory-inter-btn');
const apiInterBtn = document.querySelector('.api-inter-btn');

dataVizOneBtn.addEventListener("click", function(){
    window.location.href = "html/data viz.html";
})

dataVizTwoBtn.addEventListener("click", function(){
    window.location.href = "html/data viz.html";
})

designInterBtn.addEventListener("click", function(){
    window.location.href = "html/design.html";
})

theoryInterBtn.addEventListener("click", function(){
    window.location.href = "html/theory.html";
})
apiInterBtn.addEventListener("click", function(){
    window.location.href = "html/About.html";
})