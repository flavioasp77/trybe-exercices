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

// Exercicio 04

function createButtonFriday(string) {
  const getDiv = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');

  newButton.innerHTML = string;
  newButton.id = 'btn-friday';
  getDiv.appendChild(newButton);
}

createButtonFriday('Sexta-feira');
// Exercício 05

function changeText(arrayDays) {
  let getButton = document.querySelector('#btn-friday');
  let dayFriday = document.getElementsByClassName('friday');

  getButton.addEventListener('click', function () {
    for (let index = 0; index < dayFriday.length; index += 1) {
      if (dayFriday[index].innerHTML === 'Sexta-feira') {
        dayFriday[index].innerHTML = arrayDays[index];
      } else {
        dayFriday[index].innerHTML = 'Sexta-feira';
      }
    }
  });
}
let days = [4, 11, 18, 25];
changeText(days);

// Exercício 06

function zoomUp() {
  let days = document.querySelector('#days'); // pega todos os elementos dentro de #days

  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '40px';
  });
}

function zoomDown() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
  });
}

zoomUp();
zoomDown();

// exercicio 07

function myTasks(getTask) {
  let taskList = document.querySelector('.my-tasks');
  let task = document.createElement('span');

  task.innerText = getTask;
  taskList.appendChild(task);
}

myTasks('Estudar');

// Exerício 08

function subtitleColor(cor) {
  let taskList = document.querySelector('.my-tasks');
  let subtitle = document.createElement('div');

  subtitle.className = 'task';
  subtitle.style.background = cor;
  taskList.appendChild(subtitle);
}

subtitleColor('blue');

// Exercício 09
function changeClass() {
  let taskSelected = document.getElementsByClassName('task selected')
  let element = document.querySelector('.task');

  element.addEventListener('click', function (event) {
    if (taskSelected.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}

changeClass();