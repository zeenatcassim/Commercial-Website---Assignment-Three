

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
    const ratesArray = convertRatesToArray(rates);

   //call the function - create graph
   createBarGraph(ratesArray, 'EUR');

   // const dates = data.dates;
   // const base = data.base;
  //transforming rates into the correct format 
    //const formattedData = Object.entries(rates).map(([country, rate]) => ({country,rate}));

   
})
.catch((error) => {
    console.log("There is something wrong!", error);
})

function convertRatesToArray(rates){
return Object.entries(rates).map(([country, rate]) => ({
    country: country,
    rate: rate
    }));
}
*/

function createBarGraph(rates, baseCurrency = 'EUR'){
    const margin = {top: 20, right: 30, bottom: 60, left: 100};
    const width = 1200 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

   //rate of base currency 
   const baseRate = rates.find(d => d.country === baseCurrency)?.rate || 1;

   const relativeRates = rates.map(d => ({
    country: d.country,
    rate: d.rate / baseRate
   }));

   //there are negative values in the data so we need to filer the data for any rates that are invalid; 0 or negative
   const filteredRates = relativeRates.filter(d => d.rate > 0);

    //creating the svg
    const svg = d3.select("svg")
                   .attr("width", width + margin.left + margin.right)
                   .attr("height", height + margin.top + margin.bottom)
                   .append("g")
                   .attr("transform", `translate(${margin.left}, ${margin.top})`);

   //setting up the scales
   const x = d3.scaleBand()
            .domain([0, d3.max(filteredRates, d => d.rate)])
            .range([0, width]);

    const y = d3.scaleLog()
                .domain([0.01, d3.max(filteredRates, d => d.rate)])
                .range([0, height])
                .padding(0.2);

    //Creating the x-axis
     svg.append("g")
         .attr("class", "x-axis")
         .attr("transform", `translate(0, ${height})`)
         .call(d3.axisBottom(x).ticks(10));

    //Creating the y-axis
    svg.append("g")
       .attr("class", "y-axis")
       .call(d3.axisLeft(y));

    //Creating the bars
    svg.selectAll(".bar")
       .data(filteredRates)
       .enter().append("rect")
       .attr("class", "bar")
       .attr("y", d => y(d.country))
       .attr("x", 0)
       .attr("height", y.bandwidth())
       .attr("width", d => x(d.rate));

       svg.append("text")
          .attr("x", width / 2)
          .attr("y", height + margin.bottom -10)
          .attr("text-anchor", "middle")
          .style("font-size", "22px")
          .text(`Currency rates compared to ${baseCurrency}`);
       
    const tooltip = d3.select(".tooltip");

    svg.selectAll(".bar")
       .on("mouseover", function(event, d) {
       tooltip.style("opacity", 1)
              .html(`Country: ${d.country}<br>Rate: ${d.rate.toFixed(4)}`)
              .style("left", `${event.pageX + 5}px`)
              .style("top", `${event.pageY - 28}px`);
   })
   .on("mouseout", function() {
    tooltip.style("opacity", 0);
});
}

//More space between bars and country names
//
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