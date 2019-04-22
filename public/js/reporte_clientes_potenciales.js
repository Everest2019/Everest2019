'use strict';

let padres_de_familia = listar_padre_familia();
console.log(padres_de_familia.length);
let cant_hijos_total = 0;
let edades = [];
let cantidad_hijos = 0;

let obtener_cant_hijos = ()=>{
  for(let i= 0;i<padres_de_familia.length;i++){
    cant_hijos_total +=
      padres_de_familia[i]['cant_hijos'];
  }
//  return cant_hijos_total;
};

edades = new Array(cant_hijos_total);

let obtener_edad_hijos = ()=>{
  for(let i= 0;i<padres_de_familia.length;i++){
    cant_hijos =
      padres_de_familia[i]['cant_hijos'];
      for(let j=0;j<cant_hijos;j++){
        padres_de_familia['edad_hijos'][j];
      }
  }
};

let guardar_edad =()=>{

};
