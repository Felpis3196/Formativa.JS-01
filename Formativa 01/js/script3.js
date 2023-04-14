function toggle(toggle) {
    let imagem = document.getElementById('lampada')
    let caminho = imagem.src
    let arquivo = caminho.substring(caminho.lastIndexOf('/')+1)  
    let btn = document.getElementById('btnEnviar') 

    if (arquivo=='apagada.jpg') {
        btn.textContent  = 'Apagar'
        arquivo = imagem.src='img/acesa.jpg'
    }
    else {
        btn.textContent = 'Acender'
        arquivo = imagem.src='img/apagada.jpg'
    }
        
}
