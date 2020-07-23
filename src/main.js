import data from './data.js'; 
// import data from './data/lol/lol.js';
//import lol from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(lol);

//For in
//pasarlo de objetos a array
//object.values


const campeones = data.list();

campeones.forEach( element => { 

   const contenedor = document.getElementById("charBox");

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
  /*  contenedor.appendChild(championsName);   */  
   championsName.appendChild(modalButton);
   modalButton.appendChild(championContainer);
    
   modalButton.addEventListener('click', () => {
         modalClick (element)
   });   
});
/*insertar informacion en el Modal*/
   const modal = document.getElementById("modalContainer");

function modalClick (element) {
        
      const infoModal = document.getElementById ("modal")     
      /*infoModal.appendChild(document.createTextNode(element.title))*/

      
      document.querySelector ("#modalTitle").textContent = element.title;
      document.querySelector ("#modalSplash").textContent= element.splash;
      document.querySelector ("#modalBlurb").textContent = element.blurb;
      document.querySelector ("#modalInfo").textContent = element.info;

      modalBg.classList.add('bgActive');
      
} 
   
let modalBg = document.querySelector('.modalBg');
let modalClose = document.querySelector('.modalClose');

modalClose.addEventListener('click', function () {
   modalBg.classList.remove('bgActive');
});