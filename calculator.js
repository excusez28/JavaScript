function clearScreen() {
    result.value = "";
}

//add value to the display
function setScreenValue(value) {
    result.value += value;
}

//calculator and show result
function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch {
        result.value = 'Error';
    }
}