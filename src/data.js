// Estas funciones nos ayudan a exportar los datos al main.js

import lol from './data/lol/lol.js';

const campeones = Object.values(lol.data);
console.log(campeones);

export const list=()=>{

  return  campeones;
}  


const isTank = (tanque)=>{
  return tanque.tags.includes('Tank');
}
export  const dataFilter = (campeonesRecibidos,rol)=>{
 let datafiltrada = [];
if (rol === 'Tank'){
  datafiltrada= campeonesRecibidos.filter(isTank);
}
  console.log(datafiltrada);
  return datafiltrada;
}

//DEJAR EN MAIN.JS
dataFilter(campeones,'Tank');





/* 
for(let i = 0;i<campeones.length;i++){
  const campe = campeones[i];
  console.log(`${campe.tags}`)
}  */