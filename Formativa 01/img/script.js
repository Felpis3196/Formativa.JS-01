// **************************************************** Script exemplo 1

var lampada = document.getElementById('lampada');

// Alterar a cor da lampada
function acender(cor) {
    lampada.style.backgroundColor = cor;
}

// **************************************************** Script exemplo 2

function falar() {
    const frases = [
        'Hoje está um dia bonito',
        'Falta muito para sexta-feira?',
        'Qual o cardápio do almoço de hoje?',
        'Vish, tem proba de matemática!',
    ]

    //variavel para controlar o indice (array)
    let indice = 0;

    //variavel para aleatorio entre 0 e 1
    let numero = Math.random();

    if (numero > 0.75)
        indice = 3
    else
        if (numero > 0.5)
            indice = 2
        else
            if (numero > 0.25)
                indice = 1
    
    // variavel para manipular a div tagrela
    let tagarela = document.getElementById('tagarela')

    //alterando o conteudo da div
    tagarela.innerHTML = frases[indice]

}

// SCRIPTS EXEMPLO 3

// intercepta os dados do form e valida antes de enviar
function validarDados() {
    let nome = frmExemplo.inNome.value;
    let idade = frmExemplo.inIdade.value;

    if (nome.trim() == '') {
        alert("O campo não pode ser vazio!")
        frmExemplo.input.focus()
        return false
    }

    if (idade == '') {
        alert("O campo não pode ser vazio!")
        frmExemplo.inIdade.focus()
        return false
    }

    if (idade<0)
        alert("Não pode haver idade negativa")
        frmExemplo.inIdade.focus()
        return false

        alert("Muito bem flipper, pegue seu peixe!")
}

// SCRIPTS EXEMPLO 4

function alterarPizza() {
    let imagem = document.getElementById('pizzas')
    let caminho = imagem.src
    let arquivo = caminho.substring(caminho.lastIndexOf('/')+1)

    if (arquivo=='pizza2.jpg' || arquivo=='')
        imagem.src='../img/pizza3.jpg'
    else
        imagem.src='../img/pizza2.jpg'
}

//SCRIPT EXEMPLO 5

function mudarVisibilidade() {
    let preguica = document.getElementById('preguica')
    let botao = document.getElementById('btnChave')

    //se a div estiver oculta....
    if (botao.textContent == 'Exibir' || botao.textContent == '') {
        preguica.style.display = 'block'
        botao.textContent = 'Ocultar'
    }
    else {
        preguica.style.display = 'none' 
        botao.textContent = 'Exibir'
    }
}

// ATUALIZAR DADADOS

function atualizarDados() {
    // criando variavel para manipular o tbody
    let dados = document.getElementById('itens')

    // limpando a tabela caso ja tenha dados
    dados.innerHTML = ''

    // definindo a quantidade de linhas para a tabela
    let qtd = Math.trunc(((Math.random()+1)*10)) 

    // gerando os dados dinamicamente
    for (let i=0; i<qtd; i++) {
        let preco = Math.random()*100;

        // criando variavel para o html da linha
        let elemento = '' 

        // linhas impares recebem a class 'listra'
        if (i%2 != 0)
            elemento = '<tr class="listra">'
        else
            elemento = '<tr>'
        elemento += '<td>Produto ' + i 
        + '</td>' + '<td> R$' + preco.toFixed(2) + '</td>' + '</tr>'  
        
        dados.innerHTML += elemento
    }

}