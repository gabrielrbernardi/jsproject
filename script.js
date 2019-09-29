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

function data() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.getDay() + 1;
}

// --------------------------------------------------------------

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    // Comandos para pegar a data e hora e colocar no html
    var d = new Date(),
        dia, mes, ano, hora, minuto;
    dia = d.getDate();
    mes = d.getMonth() + 1;
    ano = d.getFullYear();
    document.getElementById("date").innerHTML = dia + '/' + mes + '/' + ano; //inserindo a data no HTML
    hora = d.getHours();
    minuto = d.getMinutes();
    if (minuto >= 0 && minuto < 10) {
        minuto = '0' + minuto;
    }
    if (hora >= 0 && hora < 10) {
        hora = '0' + hora;
    }
    document.getElementById("time").innerHTML = hora + ':' + minuto; //inserindo o horario no HTML
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function login() {
    // var user = window.confirm("Usuario");
    document.getElementById("teste").innerHTML = "ola";
}