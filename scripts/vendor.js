const numInput = document.getElementById('number_input');
const addBtn = document.getElementById('add_btn');
const subtractBtn = document.getElementById('subtract_btn');
const multiplyBtn = document.getElementById('multiply_btn');
const divideBtn = document.getElementById('divide_btn');

const calcProcess = document.getElementById('calculation_process');
const calcResult = document.getElementById('calculation_result');

function outputResult(process, result) {
    calcProcess.textContent = process;
    calcResult.textContent = result;
}