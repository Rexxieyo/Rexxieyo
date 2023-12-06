let body = document.querySelector("body")
let field = document.querySelectorAll("input")[1];
let budget = document.getElementById("budget");

let total = document.querySelector("h4")
let afford = document.getElementById("afford")
let buttonA = document.querySelectorAll("button")[0]
let buttonB = document.querySelectorAll("button")[1]
let buttonC = document.querySelectorAll("button")[2]
let image = document.querySelector("img")

function getTotal () {
    let sumTotal = field.value*1.99
    let budgets = budget.value
    total.innerText = "Total Price: $"+sumTotal 
    if (budgets > sumTotal
        ) {
        afford.innerText = `You can afford this! 😀 You have $${budgets-sumTotal} left in budget`
    } else if (budgets < sumTotal){
        afford.innerText = `You can't afford this, you need $${sumTotal-budgets} more 😒`
    }
}

field.addEventListener("change", getTotal)


function toThemeA () {
    body.classList.remove("themeB", "themeC")
    body.classList.add("themeA")
}
buttonA.addEventListener("click", toThemeA)


function toThemeB () {
    body.classList.remove("themeA", "themeC")
    body.classList.add("themeB")
}
buttonB.addEventListener("click", toThemeB)

function toThemeC () {
    body.classList.remove("themeA", "themeB")
    body.classList.add("themeC")
}
buttonC.addEventListener("click", toThemeC)



function changeImage() {
    return image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOei3iFoNSct5t2dQbJJon5snlD_ckMiJPf3L7fPMFzX19wZ90Zugp-M0&s=10"
}

image.addEventListener("click", changeImage)


let show = () => {
    budget.placeholder = "budget..."
}

let qty = () => {
    field.placeholder = "quantity..."
}
