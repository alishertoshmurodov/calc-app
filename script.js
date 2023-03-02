const calcText = document.querySelector('.calculator-screen');
let calcTextAreaEl = document.querySelector('.active-number');
const savedEl = document.querySelector('.saved-number');
const NumberEls = document.querySelectorAll('.number');
const bodyEl = document.querySelector('body');

// input
NumberEls.forEach(element => {
    element.addEventListener('click', function (e) {
        if (calcTextAreaEl.textContent === '0') {
            calcTextAreaEl.textContent = '';
        }

        if (calcTextAreaEl.textContent.length < 15) {
            calcTextAreaEl.textContent += element.textContent;
        }

        if (calcTextAreaEl.textContent.length > 9) {
            calcTextAreaEl.classList.add('mobile-screen-text');
        }
    });
});

function inputNumbers(e) {
    if (calcTextAreaEl.textContent === '0') {
        calcTextAreaEl.textContent = '';
    }

    if (calcTextAreaEl.textContent.length < 15) {
        calcTextAreaEl.textContent += e.key;
    }

    if (calcTextAreaEl.textContent.length > 9) {
        calcTextAreaEl.classList.add('mobile-screen-text');
    }
}




// dot button

const dotEl = document.querySelector('.dot');

dotEl.addEventListener('click', dotBtn);

function dotBtn() {
    if (!calcTextAreaEl.textContent.includes('.'))
        calcTextAreaEl.textContent += '.';
    if (calcTextAreaEl.textContent.length > 9) {
        calcTextAreaEl.classList.add('mobile-screen-text');
    }
}

// delete button
const delButtonEl = document.querySelector('.del');

delButtonEl.addEventListener('click', deleteBtn);

function deleteBtn() {
    calcTextAreaEl.textContent = calcTextAreaEl.textContent.slice(0, calcTextAreaEl.textContent.length - 1);
    if (calcTextAreaEl.textContent.length < 10) {
        calcTextAreaEl.classList.remove('mobile-screen-text');
    }
}

// reset button
const resetButtonEl = document.querySelector('.reset');

resetButtonEl.addEventListener('click', resetBtn);

function resetBtn() {
    calcTextAreaEl.textContent = '';
    savedNum = '';
    calcTextAreaEl.classList.remove('mobile-screen-text');
    savedEl.textContent = '';
}


// Math operators
const operatorEls = document.querySelectorAll('.operator');
let savedNum = '';
let activeOperator = '';
operatorEls.forEach(element => {
    element.addEventListener('click', mathOps);

    function mathOps() {
        savedNum = calcTextAreaEl.textContent;
        calcTextAreaEl.textContent = '';
        activeOperator = element.getAttribute('title');
        savedEl.textContent = savedNum;
        if (element.getAttribute('title') === 'addition') {
            savedEl.textContent += '+ ';
        } else if (element.getAttribute('title') === 'substraction') {
            savedEl.textContent += '- ';
        } else if (element.getAttribute('title') === 'division') {
            savedEl.textContent += '/ ';
        } else {
            savedEl.textContent += '* ';
        }

        savedEl.classList.add('saved-number-trasition');
    }
});

function mathOpsStandart() {
    savedNum = calcTextAreaEl.textContent;
    calcTextAreaEl.textContent = '';
    savedEl.textContent = savedNum;
    savedEl.classList.add('saved-number-trasition');
}





// total
const totalEl = document.querySelector('.total');

totalEl.addEventListener('click', totalBtn);

function totalBtn() {
    savedEl.textContent = '';
    if (activeOperator === 'addition') {
        calcTextAreaEl.textContent = Number(savedNum) + Number(calcTextAreaEl.textContent);
    } else if (activeOperator === 'substraction') {
        calcTextAreaEl.textContent = (Number(savedNum) * 10 - Number(calcTextAreaEl.textContent) * 10) / 10;
    } else if (activeOperator === 'division') {
        calcTextAreaEl.textContent = Number(savedNum) / Number(calcTextAreaEl.textContent);
    } else if (activeOperator === 'multiplication') {
        calcTextAreaEl.textContent = parseFloat(Number(savedNum) * Number(calcTextAreaEl.textContent)).toFixed(7
        ).replace(/\.0+$/, '');
    }
    if (calcTextAreaEl.textContent.length > 9) {
        calcTextAreaEl.classList.add('mobile-screen-text');
    }

    savedEl.classList.remove('saved-number-trasition');
}


// theme toggle

const themeChangeButtonEls = document.querySelectorAll('.themes div');

themeChangeButtonEls.forEach(element => {
    element.addEventListener('click', function (e) {
        if (element.textContent === '2') {
            themeChangeButtonEls[0].classList.remove('active-theme-1');
            themeChangeButtonEls[2].classList.remove('active-theme-3');
            element.classList.add('active-theme-2');
            bodyEl.classList.remove('theme-3');
            bodyEl.classList.add('theme-2');
        } else if (element.textContent === '3') {
            themeChangeButtonEls[0].classList.remove('active-theme-1');
            themeChangeButtonEls[1].classList.remove('active-theme-2');
            element.classList.add('active-theme-3');
            bodyEl.classList.remove('theme-2');
            bodyEl.classList.add('theme-3');
        } else {
            themeChangeButtonEls[2].classList.remove('active-theme-3');
            themeChangeButtonEls[1].classList.remove('active-theme-2');
            element.classList.add('active-theme-1');
            bodyEl.classList.remove('theme-2', 'theme-3');
        }
    });
});


// input with keyboard 

window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case '0':
            inputNumbers(e);
            playAudio(e);
            break;
        case '1':
            inputNumbers(e);
            playAudio(e);
            break;
        case '2':
            inputNumbers(e);
            playAudio(e);
            break;
        case '3':
            inputNumbers(e);
            playAudio(e);
            break;
        case '4':
            inputNumbers(e);
            playAudio(e);
            break;
        case '5':
            inputNumbers(e);
            playAudio(e);
            break;
        case '6':
            inputNumbers(e);
            playAudio(e);
            break;
        case '7':
            inputNumbers(e);
            playAudio(e);
            break;
        case '8':
            inputNumbers(e);
            playAudio(e);
            break;
        case '9':
            inputNumbers(e);
            playAudio(e);
            break;
        case 'Backspace':
            deleteBtn();
            playAudio(e);
            break;
        case 'Enter':
            totalBtn();
            playAudio(e);
            break;
        case '.':
            dotBtn();
            playAudio(e);
            break;
        case 'Shift':
            resetBtn();
            playAudio(e);
            break;
        case '+':
            mathOpsStandart();
            savedEl.textContent += '+ ';
            activeOperator = 'addition';
            playAudio(e);
            break;
        case '-':
            mathOpsStandart();
            savedEl.textContent += '- ';
            activeOperator = 'substraction';
            playAudio(e);
            break;
        case '/':
            mathOpsStandart();
            savedEl.textContent += '/ ';
            activeOperator = 'division';
            playAudio(e);
            break;
        case '*':
            mathOpsStandart();
            savedEl.textContent += '* ';
            activeOperator = 'multiplication';
            playAudio(e);
            break;
    }
});


// typing sound

const typeAudio = new Audio('/sounds/mixkit-smartphone-typing.wav');
const buttonEls = document.querySelectorAll('.button');

buttonEls.forEach(button => {
    button.addEventListener('click', playAudio);
});

function playAudio(e) {
    typeAudio.currentTime = 0;
    typeAudio.play();
}


