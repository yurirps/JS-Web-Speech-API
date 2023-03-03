const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// seta lingua pra PT-Br
recognition.lang = 'pt-BR'

// starta o app pra autorizar o uso do mic
recognition.start()

//pegar essa mensagem que estamos falando
recognition.addEventListener('result', onSpeak)

function onSpeak (e) {
    chute = e.results[0][0].transcript
    guess (chute) // guess = exibeChuteNaTela

    verifyGuess(chute)
}



// Monta o Html com a palavra que foi dita
function guess (chute) {
    elementoChute.innerHTML = `
    <div> You says:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start ())