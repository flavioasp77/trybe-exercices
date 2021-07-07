function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercicio 01
function createDaysOfMouth() {
  const days = document.querySelector('#days');
  const daysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let day of daysList) {
    const createDays = document.createElement('li');
    days.appendChild(createDays);
    createDays.className = 'day';
    createDays.innerText = day;
    if (day === 24 | day === 25 | day === 31) {
      createDays.classList.add('holiday');
    }
    if (day === 4 | day === 11 | day === 18 | day === 25) {
      createDays.classList.add('friday');
    }
  }
}

createDaysOfMouth();

// Exercicio 02
function createButton(string) {
  const getDiv = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');

  newButton.innerHTML = string;
  newButton.id = 'btn-holiday';
  getDiv.appendChild(newButton);
}

createButton('Feriados');

// Exercício 03

function showHoliday() {
  let getButton = document.querySelector('#btn-holiday'); // armazena o elemento que vai receber o evento (click)
  let dayHoliday = document.querySelectorAll('.holiday'); // pega todos os elementos com a classe específica que terá seus atributos alterados
  let setColor = "greenyellow"; // nova cor
  let defautColor = "rgb(238,238,238)"; // cor original

  getButton.addEventListener('click', function () {
    for (let holiday of dayHoliday) { // cria um loop com todos os elementos na variavel dayHoliday
      // faz as verificaçẽos para trocar as cores de fundo
      if (holiday.style.backgroundColor === setColor) { 
        holiday.style.backgroundColor = defautColor;
      } else {
        holiday.style.backgroundColor = setColor;
      }
    }
  });
}

showHoliday();

// Exercicio 4

function createButtonFriday(string) {
  const getDiv = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');

  newButton.innerHTML = string;
  newButton.id = 'btn-friday';
  getDiv.appendChild(newButton);
}

createButtonFriday('Sexta-feira');