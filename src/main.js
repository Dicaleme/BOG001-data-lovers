import {filterTank, filterAssassin, filterFighter, filterMage, filterMarksman,
      filterSupport, filterEveryone,searchData, sortData, } from "./data.js";
import lol from "./data/lol/lol.js";

const campeonesData = Object.values(lol.data);
const contenedor = document.getElementById("charBox");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

//LIMPIAR CONTENEDOR DE LAS TARJETAS
const pintarCampeones = (campeonesData) => {
      contenedor.textContent= '';
      campeonesData.forEach((element) => {
      const championsName = document.createElement("div");
      championsName.classList.add("championsName");
      championsName.appendChild(document.createTextNode(element.name));

      const modalButton = document.createElement("div");
      modalButton.classList.add("modalButton");

      const championContainer = document.createElement("div");
      championContainer.classList.add("card");

      const image = document.createElement("img");
      image.src = element.img;
      image.classList.add("champion-image");

      championContainer.appendChild(image);
      championsName.appendChild(championContainer);
      contenedor.appendChild(championsName);
      championsName.appendChild(modalButton);
      modalButton.appendChild(championContainer);

      modalButton.addEventListener("click", () => {
      modalClick(element);
      });
});
};
pintarCampeones(campeonesData);

function modalClick(element) {
      document.querySelector("#modalTitle").textContent = element.title;
      document.querySelector("#modalSplash").src = element.splash;
      document.querySelector("#modalBlurb").textContent = element.blurb;
      modalBg.classList.add("bgActive");
}

let modalBg = document.querySelector(".modalBg");
let modalClose = document.querySelector(".modalClose");

modalClose.addEventListener("click", function () {
      modalBg.classList.remove("bgActive");
});

// Filter by Tanks //
const filtraTankes =()=>{
      const tanks = filterTank(campeonesData,'Tank');
      //console.log(tanks);
      pintarCampeones(tanks);
}
document.getElementById("buttonTanks").addEventListener("click",filtraTankes);

// Filter by Assassins //
const filtraAsesinos =()=>{
      const assas = filterAssassin(campeonesData,'Assassin');
      //console.log(assas);
      pintarCampeones(assas);
}
document.getElementById("buttonAssassins").addEventListener("click",filtraAsesinos);

// Filter by Fighters //
const filtraLuchadores =()=>{
      const fight= filterFighter(campeonesData,'Fighter');
      //console.log(fight);
      pintarCampeones(fight);
}
document.getElementById("buttonFighters").addEventListener("click",filtraLuchadores);

// Filter by Mages //
const filtraMagos =()=>{
      const mag= filterMage(campeonesData,'Mage');
      //console.log(mag);
      pintarCampeones(mag);
}
document.getElementById("buttonMagicians").addEventListener("click",filtraMagos);

// Filter by Shooters //
const filtraTiradores =()=>{
      const tira= filterMarksman(campeonesData,'Marksman');
      //console.log(tira);
      pintarCampeones(tira);
}
document.getElementById("buttonShooters").addEventListener("click",filtraTiradores);

// Filter by Supports //
const filtraApoyos =()=>{
      const apo = filterSupport(campeonesData,'Support');
      //console.log(apo);
      pintarCampeones(apo);
}
document.getElementById("buttonProps").addEventListener("click",filtraApoyos);

// Reset Everyone //
const filtraTodos =()=>{
      const tod = filterEveryone(campeonesData,'Marksman','Support','Mage','Fighter','Assassin','Tank');
      //console.log(tod);
      pintarCampeones(tod);
}
document.getElementById("buttonEveryone").addEventListener("click",filtraTodos);

// Searching Characters //
searchInput.addEventListener('keyup', search);
function search (){
      let characterName = event.target.value;
      let searchCharacter = searchData(campeonesData,characterName);
      pintarCampeones(searchCharacter)
      if (characterName ==" "){
            pintarCampeones(campeonesData)
      }else{    
            pintarCampeones(searchCharacter)
}
} 

// Sorting Characters A-Z//
sortSelect.addEventListener('change', sortingCharacters);
function sortingCharacters (){
      let order = event.target.value;
      let sorting = sortData(campeonesData, order)
      pintarCampeones(sorting)
}