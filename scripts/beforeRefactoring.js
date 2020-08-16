const defaultResult = 0;
let currentResult = defaultResult;


function add() {
    let beforeCalc = currentResult;
    currentResult += parseInt(numInput.value);
    let process = `${beforeCalc} + ${parseInt(numInput.value)}`
    outputResult(process, currentResult);
}

function subtract() {
    let beforeCalc = currentResult;
    currentResult -= parseInt(numInput.value);
    let process = `${beforeCalc} - ${parseInt(numInput.value)}`
    outputResult(process, currentResult);
}

function multiply() {
    let beforeCalc = currentResult;
    currentResult *= parseInt(numInput.value);
    let process = `${beforeCalc} * ${parseInt(numInput.value)}`
    outputResult(process, currentResult);
}

function divide() {
    let beforeCalc = currentResult;
    currentResult /= parseInt(numInput.value);
    let process = `${beforeCalc} / ${parseInt(numInput.value)}`
    outputResult(process, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);