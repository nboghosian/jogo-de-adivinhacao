const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const tip = document.querySelector("#tip")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random()*100)
let = xAtempts = 1

console.log(randomNumber)
//eventos, funções callback
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleKeydown)

function handleTryClick(event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")
    let tipresult = tipfunc()
		
    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()

        screen2.querySelector(".screen2 p").innerText = `Você acertou em ${xAtempts} tentativas`
    } else{
        xAtempts++
		inputNumber.value = ""
        tip.classList.remove("hide")
        tip.innerText = `Dica: é ${tipresult}`
    }
}
function handleResetClick(event) {
	toggleScreen()
	xAttempts = 1
    inputNumber.value = ""
	randomNumber = Math.round(Math.random()*100)
    
}
function handleKeydown(event) {
	console.log(event.key)
	if(event.key == 'Enter' && screen1.classList.contains('hide')){
	handleResetClick()
    }
}
function toggleScreen() {
	screen1.classList.toggle("hide")
	screen2.classList.toggle("hide")
}
function tipfunc(){
    const lower = "menor"
    const higher = "maior"
    if(inputNumber.value > randomNumber){
        return lower
    } else {
        return higher
    }
}