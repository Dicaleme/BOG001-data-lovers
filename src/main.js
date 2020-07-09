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

   const contenedor = document.getElementById('campeones');
   const championContainer = document.createElement('div');
        championContainer.classList.add('champion');
    championContainer.appendChild(document.createTextNode(element.name))
    const image = document.createElement('img')
    image.src=element.img;
 image.classList.add('champion-image');
   championContainer.appendChild(image);
   contenedor.appendChild(championContainer);
});
// agregar todas cosas a un document fragme =>Document
//crear un div con todas las cosas