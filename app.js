//API

const url = 'http://data.fixer.io/api/latest?access_key=803afba4fdd8cdacc37ab017860c99dd';
const options = {
    method: 'GET'
};

fetch(url, options)
.then((response) => response.json())
.then((data) => {
 
    const rates = data.rates;
    const dates = data.dates;
    const base = data.base;

    console.log(rates, dates, base);
})
.catch((error) => {
    console.log("There is something wrong!", error);
})

/*
async function fetchData(){
try {
const response = await fetch(url, options);
const result = await response.text();
console.log(result);
//define data variables to use in graph?
} catch(error){
    console.log(error);
}    
}//fetchData();

fetch(url, options).then(response => {
if(!response.ok){
    throw new Error("SOMETHING IS NOT RIGHT");
}
//console.log(response.json);

})
*/

//setup svg




//Navigation


/*const essayBtn = document.getElementById("goToEssayBtn");
if(essayBtn){
essayBtn.addEventListener("click", function(){
window.location.href ="essay.html";
});    
}
*/

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