let num1, num2, operator;

// Add Event Listener to each button
document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn')){
        return
    }

    // Get The Properties of the Button
    let [id, classList] = getTargetProperties(e.target);

    // If the button is an operand append to the display
    // If the button is a operator, evaluate the equation
})

function getTargetProperties(target) {
    return [e.target.id, e.target.classList]
}