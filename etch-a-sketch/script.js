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
            color = generateRandomRgbColor()
            if (square.style.backgroundColor.length == 0){
                square.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]}, 0.1)`
            }
            else {
                square.style.backgroundColor = square.style.backgroundColor.replace(/0\.\d+/, (match) => {
                    const newAlpha = Math.min(parseFloat(match) + 0.1, 1);
                    return newAlpha.toFixed(1);
                });
            }
        })
    })
}

function generateRandomRgbColor() {
  const r = Math.floor(Math.random() * 256); // Random Red value (0-255)
  const g = Math.floor(Math.random() * 256); // Random Green value (0-255)
  const b = Math.floor(Math.random() * 256); // Random Blue value (0-255)

  return [r, g, b];
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