function calcular() {
    let percDesconto = 0
    let desconto = 0
    let valorPedido = document.getElementById('inValorPedido').value
    let inPercDesc = document.getElementById('inPercDesc')
    let inValDesc = document.getElementById('inValDesc')
    let inValFinal = document.getElementById('inValFinal')



    if (valorPedido<=500) {
        percDesconto = 0
        desconto = valorPedido*(percDesconto/100)
        valorLiq = valorPedido - desconto
    }

    if (valorPedido>=500) {
        percDesconto = 0.5
        desconto = valorPedido*(percDesconto/100)
        valorLiq = valorPedido - desconto
    }

    if (valorPedido>=1000) {
        percDesconto = 0.8
        desconto = valorPedido*(percDesconto/100)
        valorLiq = valorPedido - desconto
    }

    if (valorPedido>=1500) {
        percDesconto = 1
        desconto = valorPedido*(percDesconto/100)
        valorLiq = valorPedido - desconto
    }

    if (valorPedido>=2000) {
        percDesconto = 1.5
        desconto = valorPedido*(percDesconto/100)
        valorLiq = valorPedido - desconto
    }

    inPercDesc.value = percDesconto,'%'
    inValDesc.value = desconto, 'R$'
    inValFinal.value = valorLiq, 'R$'
}