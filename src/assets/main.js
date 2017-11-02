let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
  let input = document.getElementById('user-guess');
    //add functionality to guess function here

  if (answer.value == '' || attempt.value == '') {
      setHiddenFields();
  }

  if (!validateInput(input.value)) {
    return false;
  } else {
    attempt.value++;
  }
  if (getResults(input.value)) {
    setMessage('You Win! :)');
    showAnswer(true);
    showReplay();
  } else if (attempt.value >= 10) {
    setMessage('You Lose! :(');
    showAnswer(false);
    showReplay();
  } else {
    setMessage('Incorrect, try again');
  }
}

function getResults(input) {
  // Настрйока показа иконок к зависимости от успеха
  let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for (i = 0; i < input.length; i++) {
    if (input.charAt(i) == answer.value.charAt(i)) {
      html += '<span class="glyphicon glyphicon-ok"';
    } else if (answer.value.indexOf(input.charAt(i)) > -1) {
      html += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      html += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  html += '</div></div>';
  document.getElementById('results').innerHTML += html;
}

function setHiddenFields() {
      answer.value = Math.floor(Math.random() * 9999).toString(), // Округляем до целого числа и преобразуем в строку
      attempt.value = 0;

  while (answer.value.length < 4) { // Если answer не 4-х значное число - дабавляем 0 перед ним, пока не станет 4х значным
    answer = "0" + answer;
  }
}

function setMessage(message) {
  document.querySelector("#message").innerHTML(message);
}

function validateInput(input) {
  if (input.length === 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}
