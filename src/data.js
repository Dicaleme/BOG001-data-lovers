// Estas funciones nos ayudan a exportar los datos al main.js

import lol from './data/lol/lol.js';

const campeones = Object.values(lol.data);
console.log(campeones);

export const list=()=>{

  return  campeones;
}
export default {list};