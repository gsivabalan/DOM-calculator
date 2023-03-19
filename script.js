let input = document.getElementById("result");


function addInput(value) {
  if (!isNaN(value) || value == "." || value == "+" || value == "-" || value == "*" || value == "/" || value == "%" || value == "(" || value == ")") {
    input.value += value;
  } else {
    alert("Only numbers are allowed.");
  }
}

function clearInput() {
  input.value = "";
}

function calculate() {
  try {
    let result = eval(input.value);
    input.value = result;
  } catch (e) {
    alert("Invalid expression.");
  }
}
// let result = document.getElementById('result');

// function clearResult() {
//     result.value = '';
// }

// function backspace() {
//     result.value = '';
// }
// console.log(document.querySelectorAll("button"));

// let result = document.getElementById('result');

// buttons = document.querySelectorAll('button');
// let screenValue = '';
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is ', buttonText);
//         if (buttonText == '*') {
//             buttonText = '*';
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if (buttonText == 'C') {
//             screenValue = "";
//             screen.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })
// }



