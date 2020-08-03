// Estas funciones nos ayudan a exportar los datos al main.js

import lol from './data/lol/lol.js';

const campeones = Object.values(lol.data);

//Filtrado por tanque

const isTank = (tanque)=>{
  return tanque.tags.includes('Tank');
}
export  const dataFilter = (campeonesRecibidos,rol)=>{
  let datafiltrada = [];
  //console.log(rol);
if (rol === 'Tank'){
  datafiltrada= campeonesRecibidos.filter(isTank);

}
  return datafiltrada;
}
//DEJAR EN MAIN.JS
//Filtrado por Asesinos
const isAssassin = (asesinos)=>{
  return asesinos.tags.includes('Assassin');
}
export  const filterAssassin = (campeonesRecibidos,rol)=>{
  let datafiltrada = [];
  //console.log(rol);
if (rol === 'Assassin'){
  datafiltrada= campeonesRecibidos.filter(isAssassin);
}
  return datafiltrada;
}
filterAssassin(campeones,'Assassin');

//Filtrado por Luchadores
const isFighter = (luchadores)=>{
  return luchadores.tags.includes('Fighter');
}
export const filterFighter = (campeonesRecibidos,rol)=>{
  let datafiltrada = [];
if (rol === 'Fighter'){
  datafiltrada= campeonesRecibidos.filter(isFighter);
}
  
  return datafiltrada;
}
filterFighter(campeones,'Fighter');

//Filtrado por Magos
const isMage = (magos)=>{
  return magos.tags.includes('Mage');
}
export  const filterMage = (campeonesRecibidos,rol)=>{
  let datafiltrada = [];
if (rol === 'Mage'){
  datafiltrada= campeonesRecibidos.filter(isMage);
}
  
  return datafiltrada;
}
filterMage(campeones,'Mage');

//Filtrado por  Apoyos
const isSupport = (apoyos)=>{
  return apoyos.tags.includes('Support');
}
export  const filterSupport = (campeonesRecibidos,rol)=>{
  let datafiltrada = [];
if (rol === 'Support'){
  datafiltrada= campeonesRecibidos.filter(isSupport);
}

  return datafiltrada;
}
filterSupport(campeones,'Support');

//Filtrado por  Tiradores
const isMarksman = (tiradores)=>{
  return tiradores.tags.includes('Marksman');
}
export  const filterMarksman = (campeonesRecibidos,rol)=>{
  let datafiltrada = [];
if (rol === 'Marksman'){
  datafiltrada= campeonesRecibidos.filter(isMarksman);
}

  return datafiltrada;
} 
filterMarksman(campeones,'Marksman');

//Filtrado todos
const isEveryone = (todos)=>{
  return todos.tags.includes('Marksman','Support','Mage','Fighter','Assassin','Tank');
}
export  const filterEveryone = (campeonesRecibidos,rol)=>{
  let datafiltrada = [];
if (rol === 'Marksman','Support','Mage','Fighter','Assassin','Tank'){
  //datafiltrada= campeonesRecibidos.filter(isEveryone);// CORRECTION TO FILTER EVERYONE//
  datafiltrada= campeonesRecibidos;
}
return datafiltrada;
} 
filterEveryone(campeones,'Marksman','Support','Mage','Fighter','Assassin','Tank');


// SEARCHING CHARACTERS //
export const searchData = (campeonesData,characterName) => {
  let lowerCaseName = characterName.toLowerCase();
  let upperCaseName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1) 
  let filterData = campeonesData.filter (displayData => {
    return displayData.name.startsWith(upperCaseName)
  })
  return filterData
}

// SORTING CHARACTERS // return 1 = true/ return -1 = false//
export const sortData = (campeonesData,order)=>{  
  let dataSort = campeonesData.sort (function (a,z) {
    if(a.name > z.name){
      return 1;
    }
    else {return -1;}
  })
  if(order === 'desc'){dataSort.reverse()}
  
  return dataSort;
}