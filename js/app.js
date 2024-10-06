//Bar graph - data viz 1

//API
/*
const url = 'https://data.fixer.io/api/latest?access_key=803afba4fdd8cdacc37ab017860c99dd';
const options = {
    method: 'GET'
};

let ratesArray;

fetch(url, options)
.then((response) => response.json())
.then((data) => {
    
    const rates = data.rates;
    //console.log(rates);
    ratesArray = convertRatesToArray(rates);

   //call the function - create graph
   createBarGraph(ratesArray, 'EUR');

   
})
.catch((error) => {
    console.log("There is something wrong!", error);
})

document.getElementById('baseCurrency').addEventListener('change', (event) => {
    const selectedCurrency = event.target.value;
    d3.select("svg").selectAll("*").remove();
    createBarGraph(ratesArray, selectedCurrency);})

function convertRatesToArray(rates){
  return Object.entries(rates).map(([country, rate]) => ({
    country: country,
    rate: rate
    }));
}
*/

function createBarGraph(rates, baseCurrency = 'EUR'){
    const margin = {top: 20, right: 30, bottom: 100, left: 100};
    const width = 1500 - margin.left - margin.right;
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
            .domain(filteredRates.map(d => d.country))
            .range([0, width])
            .padding(0.5)
            .paddingInner(0.4);

    const y = d3.scaleLog()
                .domain([0.1, d3.max(filteredRates, d => d.rate)])
                .range([ height, 0])
                .clamp(true);
    
    const customTickValues = [0.1, 1, 10, 100, 1000, 10000, 100000, 1000000, 2000000, 4000000];

    //Creating the x-axis
     const xAxis = svg.append("g")
                      .attr("class", "x-axis")
                      .attr("transform", `translate(0, ${height})`)
                     .call(d3.axisBottom(x));

    xAxis.selectAll("text")
        .attr("transform", "rotate(-45)")
        .attr("text-anchor", "end")
        .attr("dx", "-1.5em")
        .attr("dy", "1em")
        .filter((d, i) => i % 2 !== 0) // Hide every second label
        .remove();

    //Creating the y-axis
    const yAxis = d3.axisLeft(y)
                     .tickValues(customTickValues)
                     .tickFormat(d => d.toFixed(1));

    svg.append("g")
       .attr("class", "y-axis")
       .call(yAxis);

    //Creating the bars
    svg.selectAll(".bar")
       .data(filteredRates)
       .enter().append("rect")
       .attr("class", "bar")
       .attr("x", d => x(d.country))
       .attr("y", d => y(d.rate))
       .attr("width", x.bandwidth())
       .attr("height", d => height - y(d.rate));

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

//Conversion chart - data viz 2
/*
const symbolsURL = 'https://data.fixer.io/api/symbols?access_key=803afba4fdd8cdacc37ab017860c99dd';

const optionS = {
    method: 'GET'
};

fetch(symbolsURL, optionS)
.then((response) => response.json())
.then((data) => {
    if (data.error) {
        console.error("API Error:", data.error);
        return;
    }

    console.log(data);

    const currencies = data.symbols;

    if(!currencies){
    console.error("No symbols found in the API response");
    return;
    }

    const baseCurrencyDropdown = document.getElementById('base-currency');
    const targetCurrencyDropdown = document.getElementById('target-currency');

    //need to populate the dropdowns with the currencies
    for(const currency in currencies){
        const baseOption = document.createElement('option');
        baseOption.value = currency;
        baseOption.textContent = `${currency} - ${currencies[currency]}`;
        baseCurrencyDropdown.appendChild(baseOption);

        const targetOption = document.createElement('option');
        targetOption.value = currency;
        targetOption.textContent = `${currency} - ${currencies[currency]}`;
        targetCurrencyDropdown.appendChild(targetOption);        
    }
})
.catch((error) => {
    console.log("There is something wrong!", error);
})

//Converting the currency 
function convertCurrency(){
  const baseCurrency = document.getElementById('base-currency').value;
  const targetCurrency = document.getElementById('target-currency').value;
  const amount = document.getElementById('amount').value;

  if(!amount || amount <= 0){
  alert('Please enter a valid amount');
  return;
  }

  const convertURL = `https://data.fixer.io/api/convert?access_key=803afba4fdd8cdacc37ab017860c99dd&from=${baseCurrency}&to=${targetCurrency}&amount=${amount}`;

  fetch(convertURL, optionS)
  .then(response => response.json())
  .then(data => {
    if (data.error) {
        console.error("API Error:", data.error);
        return;
    }

    if(data.success){
    const convertedAmount = data.result;
    document.getElementById('result').textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${targetCurrency}`;
    displayChart(amount, convertedAmount);
    }
    }).catch(error => {
        console.error("failed to convert currency: ", error);
        });
}

//adding the convertCurrency() to the convert btn
document.getElementById('convert-btn').addEventListener('click', convertCurrency);

function displayChart(baseAmount, targetAmount){
 
  d3.select("#chart").selectAll("*").remove();
  
    const svg = d3.select('#chart');
    const width = +svg.attr('width');
    const height = +svg.attr('height');
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    //creating the scales
    const xScale = d3.scaleBand()
    .domain(['Base', 'Target'])
    .range([0, chartWidth])
    .padding(0.2);
    
    const yScale = d3.scaleLinear()
    .domain([0, Math.max(baseAmount, targetAmount)])
    .range([chartHeight, 0]);

    const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);  

    //bars and target amounts
    g.selectAll('.bar')
        .data([baseAmount, targetAmount])
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d, i) => xScale(i === 0 ? 'Base' : 'Target'))
        .attr('y', d => yScale(d))
        .attr('width', xScale.bandwidth())
        .attr('height', d => chartHeight - yScale(d))
        .attr('fill', '#69b3a2');

    // Add x-axis
    g.append('g')
        .attr('transform', `translate(0,${chartHeight})`)
        .call(d3.axisBottom(xScale));

    // Add y-axis
    g.append('g')
        .call(d3.axisLeft(yScale));
}

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