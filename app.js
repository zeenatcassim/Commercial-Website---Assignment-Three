
//setup svg
let WIDTH = 800, HEIGHT = 600, PADDING = 40;

let svg = d3.select(".line-graph")
.attr("width", WIDTH)
.attr("height", HEIGHT);

//domain - input data to visualize - rates 
//range - space where I want to display the data - height and weight of graph
//need minRate and maxRate values

const yScale = d3.scaleLinear().range([HEIGHT, 0]);

const xScale = d3.scaleLinear().range([0, WIDTH]);

function appendLines(rates){
   
    svg.selectAll("path").remove();

    //We want to update the data whenever the API is requested or data has been fetched
    yScale.domain([d3.min(rates), d3.max(rates)]);
    xScale.domain([0, rates.length - 1]);

    console.log(`Y Scale Domain: ${yScale.domain()}`);
    console.log(`X Scale Domain: ${xScale.domain()}`);

    const line = d3.line().x((d,i) => xScale(i)).y(d => yScale(d));

   svg.append("path")
      .datum(rates)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);
   
}
//API
/*
const url = 'http://data.fixer.io/api/latest?access_key=803afba4fdd8cdacc37ab017860c99dd';
const options = {
    method: 'GET'
};

fetch(url, options)
.then((response) => response.json())
.then((data) => {
    const rates = Object.values(data.rates); 
    console.log(rates);

   //call the function - create lines for graph
    appendLines(rates);

   // const rates = data.rates;
   // const dates = data.dates;
   // const base = data.base;

   
})
.catch((error) => {
    console.log("There is something wrong!", error);
})*/




//Navigation


/*const essayBtn = document.getElementById("goToEssayBtn");
if(essayBtn){
essayBtn.addEventListener("click", function(){
window.location.href ="essay.html";
});    
}
*/

//Sidebar Toggle//
/*
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
})*/