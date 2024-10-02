

//API
/*
const url = 'http://data.fixer.io/api/latest?access_key=803afba4fdd8cdacc37ab017860c99dd';
const options = {
    method: 'GET'
};

fetch(url, options)
.then((response) => response.json())
.then((data) => {
    
    const rates = data.rates;
    console.log(rates);

    //transforming rates into the correct format 
    const formattedData = Object.entries(rates).map(([country, rate]) => ({country,rate}));

   //call the function - create graph
   createBarGraph(formattedData);

   // const dates = data.dates;
   // const base = data.base;

   
})
.catch((error) => {
    console.log("There is something wrong!", error);
})*/

function createBarGraph(rates){
    const margin = {top: 20, right: 30, bottom: 40, left: 40};
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    //creating the svg
    const svg = d3.select("svg")
                   .append("g")
                   .attr("transform", `translate(${margin.left}, ${margin.top})`);

   //setting up the scales
   const x = d3.scaleBand()
            .domain(rates.map(d => d.country))
            .range([0, width])
            .padding(0.1);

    const y = d3.scaleLinear()
                .domain([0, d3.max(rates, d => d.rate)])
                .nice()
                .range([height, 0]);

    //Creating the x-axis
     svg.append("g")
         .attr("class", "x-axis")
         .attr("transform", `translate(0, ${height})`)
         .call(d3.axisBottom(x));

    //Creating the y-axis
    svg.append("g")
       .attr("class", "y-axis")
       .call(d3.axisLeft(y));

    //Creating the bars
    svg.selectAll(".bar")
       .data(rates)
       .enter().append("rect")
       .attr("class", "bar")
       .attr("x", d => x(d.country))
       .attr("y", d => y(d.rate))
       .attr("width", x.bandwidth())
       .attr("height", d => height - y(d.rate));
}

//Fix y-axis - values scale
//Text on x-axis
//Interactivity

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