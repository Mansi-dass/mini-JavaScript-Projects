const margin = document.querySelector(".margin")
const border = document.querySelector(".border")
const padding = document.querySelector(".padding")
const content = document.querySelector(".content")
const inputvalue = {}

function boxModelRender(){
    let tempWidth = +inputvalue.width
    let tempHeight = +inputvalue.height

    // content width and height
    content.style.width = tempWidth + "px"
    content.style.height = tempHeight + "px"

    // padding wiedth and height
    padding.style.width = tempWidth + "px"
    padding.style.height = tempHeight + "px"
    // padding for variable padding entries
    padding.style.padding = `${inputvalue.ptop}px ${inputvalue.pright}px ${inputvalue.pbottom}px ${inputvalue.pleft}px`

    // border box width and height with previous padding entries
    tempWidth += +inputvalue.pleft + +inputvalue.pright  
    tempHeight += +inputvalue.ptop + +inputvalue.pbottom  
    border.style.width = tempWidth + "px"
    border.style.height = tempHeight + "px"
    // padding for variable border entries 
    border.style.padding = `${inputvalue.btop}px ${inputvalue.bright}px ${inputvalue.bbottom}px ${inputvalue.bleft}px`

    // margin box width and height with previous padding+border entries
    tempWidth += +inputvalue.bleft + +inputvalue.bright  
    tempHeight += +inputvalue.btop + +inputvalue.bbottom   
    margin.style.width = tempWidth + "px"
    margin.style.height = tempHeight + "px"
    // padding for variable margin entries
    margin.style.padding = `${inputvalue.mtop}px ${inputvalue.mright}px ${inputvalue.mbottom}px ${inputvalue.mleft}px`
}

// extracting pre-defined values 
const valueProvided = document.querySelectorAll('input[value]')
valueProvided.forEach(element => {
    inputvalue[element.id] = element.value
});
boxModelRender()

const inputs = document.querySelectorAll('input[type=text]')
inputs.forEach(input => {
    input.addEventListener('change', function () {
        inputvalue[input.id] = input.value
        console.log(inputvalue)
        boxModelRender()
    })
});