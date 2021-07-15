const statesBr = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

let pass;

function validName() {
  let name = document.querySelector('#input-name').value;
  (name = '') ? alert('Preencha o campo nome!!!'): pass = true;
  return pass;
}

function validEmail() {
  let email = document.querySelector('#input-email').value;
  (email = '') ? alert('Preencha o campo e-mail!!!'): pass = true;
  return pass;
}

function validAdress() {
  let adress = document.querySelector('#input-adress').value;
  (adress = '') ? alert('Preencha o campo endereço!!!'): pass = true;
  return pass;
}

function validCity() {
  let city = document.querySelector('#input-city').value;
  (city = '') ? alert('Preencha o campo cidade!!!'): pass = true;
  return pass;
}

function validState() {

}

// let state = document.querySelector('#state');
// let type = document.querySelector('input[name="type"]:checked').value;
// let sumary = document.querySelector('#input-sumary').value;
// let office = document.querySelector('#input-office');


function setStates() {
  let listStates = document.querySelector('#state');
  for (let index = 0; index < statesBr.length; index += 1) {
    let states = document.createElement('option');
    states.innerHTML = statesBr[index];
    states.setAttribute("value", statesBr[index]);
    listStates.appendChild(states);
  }
}
setStates()

function validDate() {

  let day = document.querySelector('#day').value;
  let mouth = document.querySelector('#mouth').value;
  let year = document.querySelector('year').value;

  (day > 1 && day <= 31) ? pass = true: pass = false;
  (mouth > 1 && mouth <= 12) ? pass = true: pass = false;
  (year > 1900) ? pass = true: pass = false;

  return pass;
}

function createSection() {
  const main = document.querySelector('main');
  let section = document.createElement('section');
  section.id = 'curricullun';
  main.appendChild(section);
}

function sendForm(event) {
  event.preventDefault();
  if (validDate()) {
    createSection();
  } else {}

}