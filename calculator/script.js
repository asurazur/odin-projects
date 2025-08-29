let accumulator = '';
let operand = '';
let operator = '';

// Add Event Listener to each button
document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn')){
        return
    }
    let [id, classList] = getTargetProperties(e.target);
    
    if(classList.contains('btn-operand')) {
        // Update `operand` variable
        if (id === 'decimal' && operand.includes('.')) {
            return
        }
        operand += (e.target.textContent)
    } else if(classList.contains('btn-operator') || classList.contains('btn-other')) {
        operate(id)
    }
    // Update Display
    updateDisplay()
})

document.addEventListener('keyup', (e) => {
    let key = e.key;
    let digits = /\d/
    let operators = ['+', '-', '*', '/', '%', '.', 'Enter']
    if (digits.test(key) || operators.includes(key)) {
        document.querySelector(`#${valueToID(key)}`).click()
    } else if (key === 'Backspace' || 'Delete') {
        operand = operand.slice(0, -1)
        updateDisplay()
    }
})

function getTargetProperties(target) {
    return [target.id, target.classList]
}


function updateDisplay() {
    document.getElementById('display').textContent = Number(operand) || Number(accumulator) || '0'
}

function operate(id) {
    if (id === 'clear') {
        accumulator = ''
        operand = ''
        operator = ''
    }
    else if (id === 'plus-minus') {
        operand = -operand
    }
    else if (id === 'eq') {
        if (accumulator === '' || operator === '' || operand === '') { 
            return
        }
        accumulator = calculate(Number(accumulator), operator, Number(operand))
        operand = ''
    }
    else {
        operator = id
        if (accumulator === '') {
            accumulator = Number(operand)
            operand = ''
        } else if (accumulator !== '' && operand !== ''){
            accumulator = calculate(Number(accumulator), operator, Number(operand))
            operand = ''
        }
    }
}

function calculate(accumulator, operator, operand) {
    if (operator === 'add') {
        return accumulator + operand
    }
    else if (operator === 'minus') {
        return accumulator - operand
    }
    else if (operator === 'multiply') {
        return accumulator * operand
    }
    else if (operator ==='divide') {
        return accumulator / operand
    }
    else if (operator === 'modulo') {
        return accumulator % operand
    }

}

function valueToID(value) {
    switch(value) {
        case '1':
            return 'one'
        case '2':
            return 'two'
        case '3':
            return 'three'
        case '4':
            return 'four'
        case '5':
            return 'five'
        case '6':
            return 'six'
        case '7':
            return 'seven'
        case '8':
            return 'eight'
        case '9':
            return 'nine'
        case '0':
            return 'zero'
        case '+':
            return 'add'
        case '-':
            return 'minus'
        case '*':
            return 'multiply'
        case '/':
            return 'divide'
        case '%':
            return 'modulo'
        case '.':
            return 'decimal'
        case 'Enter':
            return 'eq'
    }
}