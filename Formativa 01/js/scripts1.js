function validarDados() {
    let data = frmRegistro.inData.value
    let email = frmRegistro.inEmail.value;
    let valor = frmRegistro.inValor.value;
    let nome = frmRegistro.inNome.value;
    let produto = frmRegistro.inProduto.value;
    let telefone = frmRegistro.inTelefone.value;
    let quantidade = frmRegistro.inQuantidade.value;
    let erro = document.getElementById ('mensagem-erro');

    if (data.trim() == '') {
        frmRegistro.inData.focus();
        erro.style.display = 'block';
        erro.textContent = "O campo de data não pode estar vazio!";
        return false;
    }

    if(email.length<5){
        erro.style.display = 'block';
        erro.textContent = "O campo de email precisa ser um email!";
        return false
    }

    if (email.trim() == '') {
        frmRegistro.inEmail.focus();
        erro.style.display = 'block';
        erro.textContent = "O campo de email não pode estar vazio!";
        return false;
    }

    if (valor == '') {
        frmRegistro.inValor.focus();
        erro.style.display = 'block';
        erro.textContent = "O campo de valor não pode estar vazio!";
        return false;
    }

    if (valor < 0) {
        frmRegistro.inValor.focus();
        erro.style.display = 'block';
        erro.textContent = "O campo de valor não pode ser negativo!";
        return false;
    }

    if(nome.length<5){
        erro.style.display = 'block';
        erro.textContent = "O campo de nome não pode ter menos de 5 caracteres!";
        return false
    }

    if (nome.trim() == '') {
        frmRegistro.inNome.focus();
        erro.style.display = 'block';
        erro.textContent = "O campo de nome não pode estar vazio!";
        return false;
    }

    if(produto.length<5){
        erro.style.display = 'block';
        erro.textContent = "O campo de produto não pode ter menos de 5 caracteres!";
        return false
    }

    if (produto.trim() == '') {
        frmRegistro.inProduto.focus();
        erro.style.display = 'block';
        erro.textContent = "O campo de produto não pode estar vazio!";
        return false;
    }

    if (telefone.trim() == '') {
        frmRegistro.inTelefone.focus();
        erro.style.display = 'block';
        erro.textContent = "O campo de telefone não pode estar vazio!";
        return false;
    }

    if (quantidade == '') {
        frmRegistro.inQuantidade.focus();
        erro.style.display = 'block';
        erro.textContent = "O campo de quantidade não pode estar vazio!";
        return false;
    }

    if (quantidade < 0) {
        frmRegistro.inQuantidade.focus();
        erro.style.display = 'block';
        erro.textContent = "O campo de quantidade não pode ser negativo!";
        return false;
    }
}
