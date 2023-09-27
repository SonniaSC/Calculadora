function soma() {
    var n1 = document.getElementById("valor1").value;
    var n2 = document.getElementById("valor2").value;
    var total = parseInt(n1) + parseInt(n2);

    console.log(total)
    document.getElementById("resultado").innerHTML=total;
}

function subtracao() {
    var n1 = document.getElementById("valor1").value;
    var n2 = document.getElementById("valor2").value;
    var total = parseInt(n1) - parseInt(n2);

    console.log(total)
    document.getElementById("resultado").innerHTML=total;
}

function divisao() {
    var n1 = document.getElementById("valor1").value;
    var n2 = document.getElementById("valor2").value;
    var total = parseInt(n1) / parseInt(n2);

    console.log(total)
    document.getElementById("resultado").innerHTML=total;
}

function multiplicacao() {
    var n1 = document.getElementById("valor1").value;
    var n2 = document.getElementById("valor2").value;
    var total = parseInt(n1) * parseInt(n2);

    console.log(total)
    document.getElementById("resultado").innerHTML=total;
}




