window.addEventListener('load', function() {
    const div = document.querySelector('.card')
    div.style.opacity = 0;

    function fadeIn() {
        let opacidade = 0
        const temporizador = setInterval(function() {
            if (opacidade >= 1) {
                clearInterval(temporizador)
            }
            div.style.opacity = opacidade
            opacidade += 0.1
        }, 30)
    }
    fadeIn()
})