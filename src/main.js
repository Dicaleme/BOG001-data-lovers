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
   const championsName = document.createElement ("div")
   championsName.classList.add ("championsName")
   championsName.appendChild(document.createTextNode(element.name)) 
   const championContainer = document.createElement("div");
        championContainer.classList.add("card");       
    const image = document.createElement("img")
    image.src=element.img;
 image.classList.add("champion-image");
   championContainer.appendChild(image);
   championsName.appendChild(championContainer);
   contenedor.appendChild(championsName);
});
// agregar todas cosas a un document fragme =>Document
//crear un div con todas las cosas