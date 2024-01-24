// Comments Ilya:
// const is a value that can never be changed.
// resultValue and currentValue will be used in all functions.
// input can be used type text and convert it to numbers(to convert to float use parseFloat) in function that are in the js file.
function appendCharacter(char) {
    const resultInput = document.getElementById('result');
    resultInput.value += char;
}

// --------------------------------- First Row Functions START --------------------------------- 
// Calculating ln
function ln(){
    const resultInput = document.getElementById('result');
    resultInput.value += 'Math.log(';
}

// Converting number from negative to positive and the opposite
function plusMinus() {
    const resultInput = document.getElementById('result');
    const currentValue = parseFloat(resultInput.value);
    if(!isNaN(currentValue)) {
        resultInput.value = currentValue * -1;
    }
}
// Adding decimal
function addDot() {
    const resultInput = document.getElementById('result');
    if (!resultInput.value.includes('.')) {
        resultInput.value += '.';
    }
}
// = 
function calculateResult() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
// --------------------------------- First Row Functions END --------------------------------- 

// --------------------------------- Second Row Functions START --------------------------------- 
// Calculating log
function log() {
    const resultInput = document.getElementById('result');
    resultInput.value += 'Math.log10(';
}
// --------------------------------- Second Row Functions END --------------------------------- 

// --------------------------------- Third Row Functions START ---------------------------------
// Calculating 10^x
function pow10() {
    const resultInput = document.getElementById('result');
    resultInput.value += 'Math.pow(10,';
}
// --------------------------------- Third Row Functions END ---------------------------------

// --------------------------------- 4th Row Functions START---------------------------------
// Calculating x^y
function powxy() {
    const resultInput = document.getElementById('result');
    resultInput.value += '**';
}
// --------------------------------- 4th Row Functions END---------------------------------

// --------------------------------- 5th Row Functions START--------------------------------- 
// Adding )
function addParenthesis1() {
    document.getElementById('result').value += ')';
}
// Adding (
function addParenthesis2() {
    document.getElementById('result').value += '(';
}
// Calculating factorial
function calculateFactorial() {
    const resultInput = document.getElementById('result');
    const currentValue = parseFloat(resultInput.value);
    if (currentValue >= 0 && Number.isInteger(currentValue)) {
        resultInput.value = factorial(currentValue);
    } else {
        resultInput.value = 'Error';
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// Calculating second root
function secondRoot() {
    const resultInput = document.getElementById('result');
    const currentValue = parseFloat(resultInput.value);

    if (currentValue >= 0) {
        resultInput.value = Math.pow(Math.pow(currentValue, 1/2),1/2);
    } else {
        resultInput.value = 'Error';
    }
}
// --------------------------------- 5th Row Functions END--------------------------------- 

// --------------------------------- 6th Row Functions START --------------------------------- 
// Calculating square
function calculateSquare() {
    const resultInput = document.getElementById('result');
    const currentValue = parseFloat(resultInput.value);
    if(!isNaN(currentValue)) {
        resultInput.value = currentValue ** 2;
    }
}
// Calculating 1/x
function calculateReciprocal() {
    const resultInput = document.getElementById('result');
    const currentValue = parseFloat(resultInput.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        resultInput.value = 1 / currentValue;
    } else {
        resultInput.value = 'Error';
    }
}
// abs
function absolute() {
    const resultInput = document.getElementById('result');
    const currentValue = parseFloat(resultInput.value);
    if(!isNaN(currentValue)) {
        resultInput.value = Math.abs(currentValue);
    }
}
// exp
function calculateExponential() {
    const resultInput = document.getElementById('result');
    const currentValue = parseFloat(resultInput.value);
    if(!isNaN(currentValue)) {
        resultInput.value = Math.exp(currentValue);
    }
}
// x mod y
function calculateMod() {
    const resultInput = document.getElementById('result');
    const currentValue = parseFloat(resultInput.value);
    const divisor = prompt('Enter the divisor:', '');
    if (divisor !== null && divisor.trim() !== '') {
        const divisorValue = parseFloat(divisor);
        if (divisorValue !== 0) {
            resultInput.value = currentValue % divisorValue;
        } else {
             resultInput.value = 'Error: Invalid divisor';
        }
    } else {
        resultInput.value = 'Error: No divisor entered';
        }
}
// --------------------------------- 6th Row Functions END --------------------------------- 

// --------------------------------- 7th Row Functions START ---------------------------------
// clearing calculator dispaly
function clearDisplay() {
    document.getElementById('result').value = '';
}
// deleteing the last char from the display
function deleteLastFromScreen() {
    const resultInput = document.getElementById('result');
    resultInput.value = resultInput.value.slice(0, -1);
}
// pi
function pi() {
    const resultInput = document.getElementById('result');
    resultInput.value += Math.PI;
}
// e
function e() {
    const resultInput = document.getElementById('result');
    resultInput.value += Math.E;
}
// --------------------------------- 7th Row Functions END ---------------------------------

// --------------------------------- 8th Row Functions START ---------------------------------
function NotDefined() {
    alert('Button not defined')
}
// --------------------------------- 8th Row Functions END --------------------------------- 


















