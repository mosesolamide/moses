const convert = document.getElementById("converter")
let inputEd = document.getElementById("InputEl")
const displayOne = document.getElementById("met")
const displayTwo = document.getElementById("met1")
const displayThree = document.getElementById("met2")


convert.addEventListener("click", function(){
feet_meter()
liters_gallons()
kilo_pounds()
})


function feet_meter(){
    const length = inputEd.value
    const firstMeter = Math.round(length *  0.3048).toFixed(2)
    const secondMeter = Math.round(length /  0.3048).toFixed(2)
    displayOne.innerHTML = `
    <h5>
        ${length} feet = ${firstMeter} meters |  ${length} meters = ${secondMeter} feet
    </h5>
    `
}
function liters_gallons(){
    const length = inputEd.value
    const firstGallon = Math.round(length * 0.264172).toFixed(2)
    const secondLiters = Math.round(length * 3.78541).toFixed(2)
    displayTwo.innerHTML = `
    <h5>
        ${length} liters = ${firstGallon} gallons | ${length} gallons = ${secondLiters} liters 
    </h5>
    `
}
function kilo_pounds(){
    const length = inputEd.value
    const pounds = Math.round(length * 2.20462).toFixed(2)
    const kilos = Math.round(length *  0.453592).toFixed(2)
    displayThree.innerHTML = `
    <h5>
        ${length} kilos = ${pounds} pounds | ${length} pounds = ${kilos} kilos
    </h5>
    `
}

