function gerarImagens() {
    const quantidade = document.getElementById("inQtdImg").value;
    let divCanvas = document.getElementById("canvas");
    let elemento = '<img src="img/logo.png" id= "logo" alt="LOGO SENAI">';
    divCanvas.innerHTML = ''

    for (let i = 0; i < quantidade; i++) {
        divCanvas.innerHTML += elemento
    }
}