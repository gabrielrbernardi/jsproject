function soma(a, b) {
    return a + b;
}

function texto() {
    var str1 = "gabriel";
    str1 = str1.toUpperCase();
    return str1;
}

var str = "A data e hora serão alterados aqui";

var x = texto();
document.getElementById("teste").innerHTML = x;

var y = texto();
document.getElementById("teste").innerHTML = y;