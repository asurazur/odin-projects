let accumulator = '';
let operand = '';
let operator = '';

// Add Event Listener to each button
document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn')){
        return
    }

    // Get The Properties of the Button
    let [id, classList] = getTargetProperties(e.target);
    
    // If the button is an operand 
    if(classList.contains('btn-operand')) {
        // Update `operand` variable
        if (id === 'decimal' && operand.includes('.')) {
            return
        }
        operand += (e.target.textContent)
    }

    // If the button is a operator, update `operator button`
    else if(classList.contains('btn-operator') || classList.contains('btn-other')) {
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
            accumulator = operate(Number(accumulator), operator, Number(operand))
            operand = ''
        }
        else {
            operator = id
            if (accumulator === '') {
                accumulator = Number(operand)
                operand = ''
            }
        }
    }
    // Update Display
    updateDisplay()
})

function getTargetProperties(target) {
    return [target.id, target.classList]
}


function updateDisplay() {
    document.getElementById('display').textContent = Number(operand) || Number(accumulator) || '0'
}

function operate(accumulator, operator, operand) {
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