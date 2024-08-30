let display = document.getElementById('display');

function appendNumber(number) {
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
    animateDisplay();
}

function appendOperator(operator) {
    const lastChar = display.innerText.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
    animateDisplay();
}

function clearDisplay() {
    display.innerText = '0';
    animateDisplay();
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
    animateDisplay();
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
        animateDisplay();
    } catch {
        display.innerText = 'Error';
        animateDisplay();
    }
}

function animateDisplay() {
    display.style.backgroundColor = "#555";
    setTimeout(() => {
        display.style.backgroundColor = "#444";
    }, 150);
}
