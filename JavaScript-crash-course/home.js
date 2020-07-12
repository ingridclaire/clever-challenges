// Challenge 1: Your Age in Days

const ageInDays = () => {
  var birthYear = prompt('What year were you born?');
  var daysAge = (2020 - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode(`You are ${daysAge} days old.`);
  h1.setAttribute('id', 'daysAge');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

const resetButton = () => {
  document.getElementById('daysAge').remove();
}