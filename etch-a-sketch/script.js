const container = document.querySelector('#container')
const CONTAINERSIZE = '960px'
container.style.width = CONTAINERSIZE
container.style.height = CONTAINERSIZE

function setDimension(dimension) {
    container.replaceChildren()
    for (let i = 0; i < Math.pow(dimension, 2); i++) {
        const square = document.createElement('div')
        const gridSize = parseInt(CONTAINERSIZE)/dimension
        square.classList.add('square')
        square.style.width = square.style.height = gridSize + 'px'
        container.appendChild(square)
    }
    
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = generateRandomRgbColor()
        })
    })
}

function generateRandomRgbColor() {
  const r = Math.floor(Math.random() * 256); // Random Red value (0-255)
  const g = Math.floor(Math.random() * 256); // Random Green value (0-255)
  const b = Math.floor(Math.random() * 256); // Random Blue value (0-255)

  return `rgb(${r}, ${g}, ${b})`;
}

const dimensionBtn = document.querySelector('#dimension-btn')
dimensionBtn.addEventListener('click', () => {
    let newDim = prompt('Enter new grid dimension (max 100): ')
    if(newDim){
        const gridDim = Math.trunc(parseInt(newDim))
        setDimension(gridDim)
    }
})

document.addEventListener('DOMContentLoaded', () => {
    setDimension(16)
});