import data from './data.js'; 
// import data from './data/lol/lol.js';
//import lol from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(lol);

//For in
//pasarlo de objetos a array
//object.values


const campeones = data.list();
const contenedor = document.getElementById("charBox");

campeones.forEach( element => { 

   const championsName = document.createElement ("div");
   championsName.classList.add ("championsName"); 
   championsName.appendChild(document.createTextNode(element.name))
       
   const modalButton = document.createElement("div")
         modalButton.classList.add("modalButton")   
   
   const championContainer = document.createElement("div");
         championContainer.classList.add("card");   

   const image = document.createElement("img")
         image.src=element.img;
         image.classList.add("champion-image");

    championContainer.appendChild(image);
   championsName.appendChild(championContainer);   
   contenedor.appendChild(championsName);  
   championsName.appendChild(modalButton);
   modalButton.appendChild(championContainer);
    
   modalButton.addEventListener('click', () => {
         modalClick (element)
   });   
});
/*insertar informacion en el Modal*/
   const modal = document.getElementById("modalContainer");

function modalClick (element) {
      /* const imageSplash = document.createElement("img")
      imageSplash.src=element.img;
      imageSplash.classList.add("modalSplash");
      modal.appendChild(imageSplash);

      console.log (imageSplash) */

      const infoModal = document.getElementById ("modal")     
      /*infoModal.appendChild(document.createTextNode(element.title))*/
      
      document.querySelector ("#modalTitle").textContent = element.title;
      document.querySelector ("#modalSplash").src= element.splash; 
      document.querySelector ("#modalBlurb").textContent = element.blurb;
      /* document.querySelector ("#modalInfo").info.attack; */
      modalBg.classList.add('bgActive');

      
} 
   
let modalBg = document.querySelector('.modalBg');
let modalClose = document.querySelector('.modalClose');

modalClose.addEventListener('click', function () {
   modalBg.classList.remove('bgActive');
});

