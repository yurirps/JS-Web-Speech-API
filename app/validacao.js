// validação dos chutes
function verifyGuess(chute) {
    const numero = +chute

    if (invalidGuess(numero)) {

        if (chute === "Finalizar.") {
            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <br>
                <button id="play-again" class="btn-play"> Play again </button>
                `
            document.body.style.backgroundColor = "#1C1C1C";
        } else {
            elementoChute.innerHTML += ' <div> Valor Invalido </div>'
            return
        }


    }

    if (greaterOrLesser(numero)) {
        elementoChute.innerHTML += `
       <div> Valor inválido: o número precisa estar entre ${lowerValue} e ${highestValue}
       </div>
       `
        return
    }

    if (numero === secretNumber) {
        document.body.innerHTML = `
            <h2> Congratulations!! </h2>
            <h3> The secret number is ${secretNumber}</h3>

            <button id="play-again" class="btn-play"> Play again </button>
        `
    } else if (numero > secretNumber) {
        elementoChute.innerHTML += `
        <div> the secret number is smaller <i class="fa-solid fa-arrow-down"></i></div> 
       `
    } else {
        elementoChute.innerHTML += `
        <div> the secret number is bigger <i class="fa-solid fa-arrow-up"></i></div> 
       `
    }
}

// função verifica se é numero
function invalidGuess(numero) {
    return Number.isNaN(numero)
}

//verifica se está dentro dos parametros
function greaterOrLesser(numero) {
    return numero > highestValue || numero < lowerValue
}

// 
document.body.addEventListener('click', e => {
    if (e.target.id == 'play-again') {
        window.location.reload()
    }
})