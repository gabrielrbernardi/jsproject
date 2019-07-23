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

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown1-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}