const statesBr = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

function setStates() {
  let listStatess = document.querySelector('#state');
  for (let index = 0; index < statesBr.length; index += 1) {
    let states = document.createElement('option');
    states.innerHTML = statesBr[index];
    states.setAttribute("value", statesBr[index]);
    listStatess.appendChild(states);
  }
}
setStates()

function validDate() {
  let pass;
  let day = document.querySelector('#day').value;
  let mouth = document.querySelector('#mouth').value;
  let year = document.querySelector('year').value;
  (day > 1 && day <= 31) ? pass = true : pass = false;
  (mouth > 1 && mouth <= 12) ? pass = true : pass = false;
  (year > 1900) ? pass = true : pass = false;

  return pass;
}