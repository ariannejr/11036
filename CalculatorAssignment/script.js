
let operations = "1 - Addition  \n2 - Subtraction \n3 - Multiplication  \n4 - Division\n";

do
{
    var op = Number(prompt(operations + "\n Choose a number:"));
    if (op < 1 || op > 4)
    {
        alert("Please enter a valid number.");
    }
} while (op < 1 || op > 4);

var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));

function addition (a, b) {return a + b};
function subtraction (a, b) {return a - b};
function multiplication (a, b) {return a * b};
function division (a, b) {return a / b};

switch (op){
    case 1: var answer = addition (num1, num2); break;
    case 2: var answer = subtraction (num1, num2); break;
    case 3: var answer = multiplication (num1, num2); break;
    case 4: var answer = division (num1, num2); break;
    default: break;
}

alert("ANSWER: " + answer);
