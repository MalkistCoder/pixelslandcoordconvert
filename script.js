const newX = document.getElementById('new-x')
const newY = document.getElementById('new-y')
const form = document.getElementById('form')

function updateCoords() {
    let oldX = document.getElementById('old-x')
    let oldY = document.getElementById('old-y')
    let netherBool = document.getElementById('nether').checked
    let netherStr = netherBool ? 'nether' : ''

    newX.innerText = Math.floor(oldX.value*6.4)
    newY.innerText = `${Math.floor(oldY.value*6.4)} ${netherStr}`

    let travelLink = document.getElementById('travel-link')

    travelLink.href = `https://pixel.land/${netherStr}@${newX.innerText},${newY.innerText}`

    if (netherBool) {
        oldX.max = 200
        oldY.max = 200
        oldX.min = -200
        oldY.min = -200
    } else {
        oldX.max = 1000
        oldY.max = 1000
        oldX.min = -1000
        oldY.min = -1000
    }
}
