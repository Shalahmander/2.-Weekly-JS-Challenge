const output = document.getElementsByTagName('p')[0];
const input = document.querySelector('input[type=text]');
const oldMeasure = document.getElementsByTagName('select')[0];
const newMeasure = document.getElementsByTagName('select')[1];
const standart = [1, 0.001 , 10, 100, 1000, 39.37, 3.28, 1.09, 1609];


function calculateNumber(e) {
  let inputNumber = parseInt(document.querySelector('input[type=text]').value, 10);
  
  if (Number.isNaN(inputNumber) || inputNumber<0){
   output.textContent = 'Nieproprawna wartosc';
  } else {
   output.textContent = inputNumber / standart[oldMeasure.selectedIndex] * standart[newMeasure.selectedIndex];
   
  }

  e.preventDefault();
}

input.addEventListener('keyup', calculateNumber, false);
oldMeasure.addEventListener('change', calculateNumber, false);
newMeasure.addEventListener('change', calculateNumber, false);