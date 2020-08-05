// Estas funciones nos ayudan a exportar los datos al main.js

// Tanks //
const isTank = (tanque)=>{
  return tanque.tags.includes('Tank');
}
export  const filterTank = (campeonesRecibidos,rol)=>{
  let datafiltrada = [];
if (rol === 'Tank'){
  datafiltrada= campeonesRecibidos.filter(isTank);
}
  return datafiltrada;
}

// Assassins //
const isAssassin = (asesinos)=>{
  return asesinos.tags.includes('Assassin');
}
export  const filterAssassin = (campeonesRecibidos,rol)=>{
  let datafiltrada = [];
if (rol === 'Assassin'){
  datafiltrada= campeonesRecibidos.filter(isAssassin);
}
  return datafiltrada;
}


// Fighters //
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


// Mages //
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

// Supports //
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

// Shooters //
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

// Reset everyone //
export  const filterEveryone = (campeonesRecibidos,rol)=>{
  let datafiltrada = [];
if (rol === 'Marksman','Support','Mage','Fighter','Assassin','Tank'){  
  datafiltrada= campeonesRecibidos;
}
return datafiltrada;
} 

// Searching Characters //
export const searchData = (campeonesData,characterName) => {
  let lowerCaseName = characterName.toLowerCase();
  let upperCaseName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1) 
  let filterData = campeonesData.filter (displayData => {
    return displayData.name.startsWith(upperCaseName)
  })
  return filterData
}

// Sorting Characters // return 1 = true/ return -1 = false//
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