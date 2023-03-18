const widthInput = document.querySelector('#svg-width')
const heightInput = document.querySelector('#svg-height')
const shapeInput = document.querySelector('#shape-input-el')
const shapeDetailsEl = document.querySelector('.shape-details')
const svgEl = document.querySelector('#svg-el')
const colorEl = document.querySelector('#color-picker')
let color = colorEl.value

widthInput.addEventListener("change", function () {
    svgEl.style.width = widthInput.value
})
heightInput.addEventListener("change", function () {
    svgEl.style.height = heightInput.value
})
colorEl.addEventListener("change", function () {
    color = colorEl.value
    document.querySelector('#svg-child').setAttribute("fill", color)
})

shapeInput.addEventListener("change", function () {
    let shape = shapeInput.value
    if (shape == "circle") {
        shapeDetailsEl.innerHTML = `
            <div class="row">
                <div class="flex-col-align-start m-10">
                    <label for="cx">cx:</label>
                    <input type="text" class="shape-var" id="cx">
                </div>
                <div class="flex-col-align-start m-10">
                    <label for="cy">cy:</label>
                    <input type="text" class="shape-var" id="cy">
                </div>
                <div class="flex-col-align-start m-10">
                    <label for="r">r:</label>
                    <input type="text" class="shape-var" id="r">
                </div>
            </div>
        `

        let elementsArray = document.querySelectorAll(".shape-var");
        let elementValueObject = {}
        // applying event listner to every input field of shape Details Element
        elementsArray.forEach(function (element) {
            element.addEventListener("change", function () {
                // adding key-value pair to our obj
                elementValueObject[element.id] = element.value

                if (Object.keys(elementValueObject).length == 3) {
                    // svg is applied only when all the information is provided
                    svgEl.innerHTML = `
                        <circle cx="${elementValueObject.cx}" cy="${elementValueObject.cy}" r="${elementValueObject.r}" fill="${color}" id="svg-child"/>
                        `
                }
            });
        });

    }
    else if (shape == "ellipse") {
        shapeDetailsEl.innerHTML = `
        <div class="row">
            <div class="flex-col-align-start m-10">
                <label for="cx">cx:</label>
                <input type="text" class="shape-var" id="cx">
            </div>
            <div class="flex-col-align-start m-10">
                <label for="cy">cy:</label>
                <input type="text" class="shape-var" id="cy">
            </div>
            <div class="flex-col-align-start m-10">
                <label for="rx">rx:</label>
                <input type="text" class="shape-var" id="rx">
            </div>
            <div class="flex-col-align-start m-10">
                <label for="ry">ry:</label>
                <input type="text" class="shape-var" id="ry">
            </div>
        </div>
        `

        let elementsArray = document.querySelectorAll(".shape-var");
        let elementValueObject = {}
        elementsArray.forEach(function (element) {
            element.addEventListener("change", function () {
                elementValueObject[element.id] = element.value

                if (Object.keys(elementValueObject).length == 4) {
                    svgEl.innerHTML = `
                        <ellipse  cx="${elementValueObject.cx}" cy="${elementValueObject.cy}" rx="${elementValueObject.rx}" ry="${elementValueObject.ry}" fill="${color}" id="svg-child"/>
                        `
                }
            });
        });

    }
    else if (shape == "rect") {
        shapeDetailsEl.innerHTML = `
        <div class="row">
            <div class="flex-col-align-start m-10">
                <label for="width">Width:</label>
                <input type="text" class="shape-var" id="width">
            </div>
            <div class="flex-col-align-start m-10">
                <label for="height">Height:</label>
                <input type="text" class="shape-var" id="height">
            </div>
            <div class="flex-col-align-start m-10">
                <label for="rx">rx:</label>
                <input type="text" class="shape-var" id="rx" >
            </div>
            <div class="flex-col-align-start m-10">
                <label for="ry">ry:</label>
                <input type="text" class="shape-var" id="ry" >
            </div>
        </div>
        `

        let elementsArray = document.querySelectorAll(".shape-var");
        let elementValueObject = {}
        elementsArray.forEach(function (element) {
            element.addEventListener("change", function () {
                elementValueObject[element.id] = element.value

                if (Object.keys(elementValueObject).length == 4) {
                    svgEl.innerHTML = `
                        <rect  width="${elementValueObject.width}" height="${elementValueObject.height}" rx="${elementValueObject.rx}" ry="${elementValueObject.ry}" fill="${color}" id="svg-child"/>
                    `
                }
            });
        });

    }
    else if (shape == "line") {
        shapeDetailsEl.innerHTML = `
        <div class="row">
            <div class="flex-col-align-start m-10">
                <label for="x1">x1:</label>
                <input type="text" class="shape-var" id="x1">
            </div>
            <div class="flex-col-align-start m-10">
                <label for="y1">y1:</label>
                <input type="text" class="shape-var" id="y1">
            </div>
            <div class="flex-col-align-start m-10">
                <label for="x2">x2:</label>
                <input type="text" class="shape-var" id="x2">
            </div>
            <div class="flex-col-align-start m-10">
                <label for="y2">y2:</label>
                <input type="text" class="shape-var" id="y2">
            </div>
        </div>
        `

        let elementsArray = document.querySelectorAll(".shape-var");
        let elementValueObject = {}
        elementsArray.forEach(function (element) {
            element.addEventListener("change", function () {
                elementValueObject[element.id] = element.value

                if (Object.keys(elementValueObject).length == 4) {
                    svgEl.innerHTML = `
                        <line  x1="${elementValueObject.x1}" y1="${elementValueObject.y1}" x2="${elementValueObject.x2}" y2="${elementValueObject.y2}" stroke="${color}"  id="svg-child"/>
                    `
                }
            });
        });
    }
    else if (shape == "polyline") {
        shapeDetailsEl.innerHTML = `
        <div class="flex-col-align-start m-10">
            <label for="points">Points:</label>
            <input type="text" placeholder="x1,y1  x2,y2 ..." class="shape-var points">
        </div>
        <div class="flex-row radio-wrapper">
            <label for="fill">Fill:</label>
            <input type="radio" name="fill" id="fill-yes" value="yes" checked>
            <label for="yes">Yes</label>
            <input type="radio" name="fill" id="fill-no" value="no">
            <label for="no">No</label>
        </div>
        `
        let element = document.querySelector('.shape-var')
        element.addEventListener("change", function () {
            let points = element.value
            svgEl.innerHTML = `
            <polyline points="${points}" stroke="${color}" fill="${color}" id="svg-child"/>
            `
            let fillYes = document.querySelector("#fill-yes")
            fillYes.checked = true
            fillYes.addEventListener("change", function () {
                svgEl.innerHTML = `
                <polyline points="${points}" fill="${color}" stroke="${color}" id="svg-child"/>
                `
            })
            let fillNo = document.querySelector("#fill-no")
            fillNo.addEventListener("change", function () {
                svgEl.innerHTML = `
                <polyline points="${points}" fill="none" stroke="${color}" id="svg-child"/>
                `
            })
        })
    }
    else if (shape == "polygon") {
        shapeDetailsEl.innerHTML = `
        <div class="flex-col-align-start m-10">
            <label for="points">Points:</label>
            <input type="text" placeholder="x1,y1  x2,y2 ..." class="shape-var points">
        </div>
        <div class="flex-row radio-wrapper">
            <label for="fill">Fill:</label>
            <input type="radio" name="fill" id="fill-yes" value="yes" checked>
            <label for="yes">Yes</label>
            <input type="radio" name="fill" id="fill-no" value="no">
            <label for="no">No</label>
        </div>
        `
        let element = document.querySelector('.shape-var')
        element.addEventListener("change", function () {
            let points = element.value
            svgEl.innerHTML = `
            <polygon points="${points}" stroke="${color}" fill="${color}" />
            `
            let fillYes = document.querySelector("#fill-yes")
            fillYes.checked = true
            fillYes.addEventListener("change", function () {
                svgEl.innerHTML = `
                <polygon points="${points}" fill="${color}" stroke="${color}" id="svg-child"/>
                `
            })
            let fillNo = document.querySelector("#fill-no")
            fillNo.addEventListener("change", function () {
                svgEl.innerHTML = `
                <polygon points="${points}" fill="none" stroke="${color}" id="svg-child"/>
                `
            })
        })

    }

})