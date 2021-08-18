function calcularDelta() {
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    var C = document.getElementById('C').value;

    A = Number(A)
    B = Number(B)
    C = Number(C)

    // delta = b² - 4ac
    // Math.pow(base, exponente): calcula exponenciação
    var delta = Math.pow(B, 2) - 4 * A * C

    document.getElementById('resultado').value = delta
}

function calcularComprimento() {
    var raio = document.getElementById('raio').value;

    //Comprimento = 2 * PI * raio
    var C = 2 * Math.PI * raio;
    C = C.toFixed(2); // 2 casas decimais após a vírgula
    
    document.getElementById('C').value = C;
}

function calcularArea() {
    var raio = document.getElementById('raio').value;

    //Área = PI * raio²
    var A = Math.PI * Math.pow(raio, 2);
    A = A.toFixed(2); // 2 casas decimais após a vírgula
    
    document.getElementById('A').value = A;
}

function calcularVolume() {
    var raio = document.getElementById('raio').value;

    //Volume = 3/4 * PI * raio³
    var V = 3/4 * Math.PI * Math.pow(raio, 3);
    V = V.toFixed(2); // 2 casas decimais após a vírgula
    
    document.getElementById('V').value = V;
}

function escolherCalculadora() {
    var delta = document.getElementById('delta')
    var esfera = document.getElementById('esfera')
    var basica = document.getElementById('basica')
    var fatorial = document.getElementById('fatorial')
    
    if(delta.checked == true) {
        window.location.replace('calculadoradelta.html')
        //window.open('calculadoradelta.html') (abre nova aba)

    }else if(esfera.checked == true){
        window.location.replace('calculadoraesfera.html')
        //window.open('calculadoraesfera.html') (abre nova aba)
    
    }
    else if(basica.checked == true){
        window.location.replace('calculadorabasica.html')
        //window.open('calculadorabasica.html') (abre nova aba)
    
    }
    else if(fatorial.checked == true){
        window.location.replace('calculadorafatorial.html')
        //window.open('calculadorafatorial.html') (abre nova aba)
    
    }else {
        window.alert('Você deve selecionar uma das opções!')
    }
}

function calcularOperacao(operacao) {
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var resultado = 0

    switch(operacao) {
        case '+': resultado = n1 + n2; break;
        case '-': resultado = n1 - n2; break;
        case 'x': resultado = n1 * n2; break;
        case ':': resultado = n1 / n2; break;
    }

    document.getElementById('resultado').value = resultado

}

function calcularFatorial() {
    var numero = Number(document.getElementById('numero').value)
    var F = 1

    for (var i = numero; i >= 1; i--) {
        F = F * i

        document.getElementById('F').value = F
    }
}