import {dataFilter,filterAssassin,filterFighter,filterMage,filterMarksman,filterSupport,filterEveryone} from "./data.js";
import lol from "./data/lol/lol.js";

const campeonesData = Object.values(lol.data);
const contenedor = document.getElementById("charBox");

//LIMPIAR CONTENEDOR DE LAS TARJETAS
const pintarCampeones = (campeones) => {
     contenedor.textContent= '';
      campeones.forEach((element) => {
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

// DATOS FILTRADOS
const filtraTankes =()=>{
      const prueba = dataFilter(campeonesData,'Tank');
      console.log(prueba);
      pintarCampeones(prueba);
}
document.getElementById("buttonTanks").addEventListener("click",filtraTankes);
   
const filtraAsesinos =()=>{
      const assas = filterAssassin(campeonesData,'Assassin');
      console.log(assas);
      pintarCampeones(assas);
}
document.getElementById("buttonAssassins").addEventListener("click",filtraAsesinos);

const filtraLuchadores =()=>{
      const figth= filterFighter(campeonesData,'Fighter');
      console.log(figth);
      pintarCampeones(figth);
}
document.getElementById("buttonFighters").addEventListener("click",filtraLuchadores);

const filtraMagos =()=>{
      const mag= filterMage(campeonesData,'Mage');
      console.log(mag);
      pintarCampeones(mag);
}
document.getElementById("buttonMagicians").addEventListener("click",filtraMagos);

const filtraTiradores =()=>{
      const tira= filterMarksman(campeonesData,'Marksman');
      console.log(tira);
      pintarCampeones(tira);
}
document.getElementById("buttonShooters").addEventListener("click",filtraTiradores);

const filtraApoyos =()=>{
      const apo = filterSupport(campeonesData,'Support');
      console.log(apo);
      pintarCampeones(apo);
}
document.getElementById("buttonProps").addEventListener("click",filtraApoyos);

const filtraTodos =()=>{
      const tod = filterEveryone(campeonesData,'Marksman','Support','Mage','Fighter','Assassin','Tank');
      console.log(tod);
      pintarCampeones(tod);
}
document.getElementById("buttonEveryone").addEventListener("click",filtraTodos);

