

let numeroAleatorio;

function gerarNumeroAleatorio() {
    let info = document.getElementById('info');
    numeroAleatorio = Math.floor(Math.random() * 9000) + 1000;
    info.innerHTML = numeroAleatorio;
}

function ocultNumber() {
    let info = document.getElementById('info');
    let btn = document.getElementById('toggle-btn');
    if (info.style.display === "none") {
        info.style.display = "block";
        btn.innerText = "Ocultar";
    } else {
        info.style.display = "none";
        btn.innerText = "Exibir";
    }
}

function compararNumero() {
    let num = document.getElementById('num-one').value;
    let resultado;  
    

    if (isNaN(num)) {
        resultado = "Por favor, insira apenas números.";
        document.getElementById('resultArea').innerHTML = resultado;
        return;
    }

    if (num.length < 4 || num.length > 4) {
        resultado = "Por favor, insira um número de 4 digitos";
        document.getElementById('resultArea').innerHTML = resultado;
        return;  
    }    
    if (num == numeroAleatorio) {
        resultado = "Parabéns! Você acertou o número.";
    } else if(num <= numeroAleatorio + 15 && num >= numeroAleatorio - 15){
        if (num < numeroAleatorio) {
            resultado = "Você está extremamente perto. Tente um número " + (num < numeroAleatorio ? "maior" : "menor") + ".";;
        } 
    } else if(num <= numeroAleatorio + 50 && num >= numeroAleatorio - 50){
        if (num < numeroAleatorio) {
            resultado = "Você está perto. Tente um número " + (num < numeroAleatorio ? "maior" : "menor") + ".";;
        } 
    } else if(num <= numeroAleatorio + 100 && num >= numeroAleatorio - 100){
        if (num < numeroAleatorio) {
            resultado = "Você está um pouco longe. Tente um número " + (num < numeroAleatorio ? "maior" : "menor") + ".";;
        }
    } else if(num <= numeroAleatorio + 200 && num >= numeroAleatorio - 200){
        if (num < numeroAleatorio) {
            resultado = "Você está  longe. Tente um número " + (num < numeroAleatorio ? "maior" : "menor") + ".";
        } 
    } else if(num <= numeroAleatorio + 500 && num >= numeroAleatorio - 500){
        if (num < numeroAleatorio) {
            resultado = "Você está muito longe. Tente um número " + (num < numeroAleatorio ? "maior" : "menor") + ".";
        } 
    } else {
        if (num < numeroAleatorio) {
            resultado = "Você está extremamente longe. Tente um número " + (num < numeroAleatorio ? "maior" : "menor") + ".";
        } 
    }
    document.getElementById('resultArea').innerHTML = resultado;
}
