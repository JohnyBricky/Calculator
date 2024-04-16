const display = document.getElementById('display');
let currentOperand = '';

function clearAll() {
    currentOperand = '';
    updateDisplay();
}

function deleteLast() {
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
}

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (op === '^') {
        currentOperand += '**'; // Use ** for exponentiation
    } else {
        if (currentOperand === '') return;
        currentOperand += ` ${op} `;
    }
    updateDisplay();
}

function compute() {
    let computation;
    try {
        computation = eval(currentOperand);
    } catch (error) {
        computation = 'Error';
    }
    currentOperand = computation.toString();
    updateDisplay();
}



function updateDisplay() {
    // Replace "**" with "^" for display
    display.innerText = currentOperand.replace(/\*\*/g, '^');
}


document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    });
});

document.querySelectorAll('.operation').forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText);
    });
});

document.getElementById('equals').addEventListener('click', compute);

document.getElementById('clear').addEventListener('click', clearAll);

document.getElementById('delete').addEventListener('click', deleteLast);

document.getElementById('square').addEventListener('click', () => {
    currentOperand = parseFloat(currentOperand) ** 2;
    compute();
});