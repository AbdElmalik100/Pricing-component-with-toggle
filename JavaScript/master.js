let checkboxInput = document.querySelector("input[type=checkbox]")
let toggleBtn = document.querySelector("label")
let prices = document.querySelectorAll(".box h1")


toggleBtn.onclick = (e) => {
    prices.forEach(ele => {
            if (checkboxInput.checked === false) {
            let span = document.createElement("span")
            span.textContent = "$"
            let newPrice = ele.textContent.split("")
            newPrice.splice(3, 1)
            newPrice.splice(0, 1)
            ele.textContent = newPrice.join("")
            ele.prepend(span)
        } else {
            let span = document.createElement("span")
            span.textContent = "$"
            ele.textContent = ele.dataset.old
            ele.prepend(span)
        }
    })

}
