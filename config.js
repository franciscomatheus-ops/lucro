function cauculo(){
    var cmp = document.querySelector('#compra');
    var vlr = document.querySelector('#valor');
    var lcr = document.querySelector('#lucro');

    var compra = parseFloat(cmp.value);
    var valor = parseFloat(vlr.value);
    var lucro = parseFloat(lcr.value);

    const moeda = compra / valor;
    const lcr1 = lucro + compra;

    document.getElementById('venda').innerHTML = lcr1 / moeda;
}