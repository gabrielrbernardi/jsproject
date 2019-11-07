var correctUser = "GABRIEL"
var correctPwd = "TESTE"

var str = "A data e hora serão alterados aqui";

// var x = texto();
// document.getElementById("teste").innerHTML = x;

// var y = texto();
// document.getElementById("teste").innerHTML = y;

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
    clearInterval(varTime2);
    document.getElementById("mySidenav").style.width = "200px";
    // Comandos para pegar a data e hora e colocar no html
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginRight = "200px";
    var d = new Date(),
        dia, mes, ano, hora, minuto;
    dia = d.getDate();
    if (dia > 0 && dia < 10) {
        dia = '0' + dia;
    }
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
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

function loginLinks() {
    // var user = window.confirm("Usuario");
    var user = window.prompt("Usuário");
    if (user) {
        user = user.toUpperCase();
        var pwd = window.prompt("Senha");
        if (pwd) {
            pwd = pwd.toUpperCase();
            if (user == correctUser && pwd == correctPwd) {
                // location.assign("https://www.google.com");

            } else {
                deniedAccess();
            }
        } else {
            deniedAccess();
        }
    } else {
        deniedAccess();
    }
}

function errorLogin() {
    // location.assign("./error.html");
}
var varTime1, varTime2;

function deniedAccess() {
    alert("Acesso negado");
    document.getElementById("teste").innerHTML = "ACESSO NEGADO";
    location.assign("error.html");
    // varTime1 = setInterval(errorLogin, 50);
    varTime2 = setInterval(closeNav, 500);
    // window.history.back();
}

var loginUsers = [{
        usr: "gabriel",
        pwd: "teste"
    },
    {
        usr: "admin",
        pwd: "admin"
    },
    {
        usr: "prova2",
        pwd: "poo"
    }
]

function verifyLogin() {
    var usr = document.getElementById("usr").value;
    var pwd = document.getElementById("pwd").value;
    usr = usr.toLowerCase();

    for (var i = 0; i < loginUsers.length; i++) {
        if (usr == loginUsers[i].usr && pwd == loginUsers[i].pwd) {
            document.getElementById("statusLogin").innerHTML = "ACESSO AUTORIZADO";
            document.getElementById("statusLogin").style.color = "rgb(27, 255, 35)";
            setTimeout(function() {
                location.assign("https://github.com/gabrielrbernardi/ProvaPOO");
            }, 1000);
            return;
        }
    }
    document.getElementById("statusLogin").innerHTML = "ACESSO NEGADO";
    document.getElementById("statusLogin").style.color = "#ad0000";
    // setTimeout(function(){
    //     document.getElementById("statusLogin").innerHTML = "";
    //     document.getElementById("statusLogin").style.color = "";
    // }, 2000);
}

//setting to when user press enter key, submit the username and password, without click on submit button
document.getElementById("pwd").onkeydown = function(e) {
    if (e.keyCode == 13) {
        verifyLogin();
    }
};
document.getElementById("usr").onkeydown = function(e) {
    if (e.keyCode == 13) {
        verifyLogin();
    }
};