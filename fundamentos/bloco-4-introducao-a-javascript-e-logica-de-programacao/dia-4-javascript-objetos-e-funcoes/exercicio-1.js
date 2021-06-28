// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

//console.log("Bem vinda,", info.personagem);

//info.recorrente = 'sim';

//console.log(info);

// for( key in info){
//   console.log(key);
// }

// for( key in info){
//   console.log(info[key]);
// }

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Pato DonalChristmas on Bear Mountain, Dell's Four Color Comics #178d",
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};

for (let key in info, info2){
  if( info[key] === info2[key]){
    console.log("ambos recorrentes");
  }else {
    console.log(info[key] + ' e ' + info2[key]);
  }  
}