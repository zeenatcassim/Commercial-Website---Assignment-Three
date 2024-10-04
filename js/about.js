

//Displaying information about API dynamically through JS
 
import { apiContent } from "./content.js";

const fullSection = document.querySelector(".API-container");

displayContents(apiContent);

function displayContents(contents){
let displayContents = contents.map(function(content){
    return`<section class="API-container">
        <section class="API-one">
        <h2 class="API-title">${content.title}</h2>
        <p class="API-info">${content.paragraph}</p>
      </section>
    </section>`
}).join("");
fullSection.innerHTML = displayContents;
}


 