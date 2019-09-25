function main() {
    var nombre = document.getElementById("name").value;
    var color = document.getElementById("background").value;
    var estilo = "<style>.result{background:" + color + "}</style>";
    document.getElementsByClassName("result")[0].innerHTML = nombre + estilo;


}

function menu(id) {
    document.getElementsByClassName("enable")[0].className = "disable";
    document.getElementsByClassName("disable")[id].className = "enable";
}

function calculate() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    rs = "<p>" + n1 + "+" + n2 + "=" + (n1 + n2) + "</p>";
    rs += "<p>" + n1 + "-" + n2 + "=</p>";
    rs += "<p>" + n1 + "x" + n2 + "=</p>";
    rs += "<p>" + n1 + "/" + n2 + "=</p>";

    document.getElementsByClassName("result2")[0].innerHTML = rs;
}

function greatest() {
    var n1 = parseInt(document.getElementById("number1").value);
    var n2 = parseInt(document.getElementById("number2").value);
    var n3 = parseInt(document.getElementById("number3").value);

    if ((n1 != n2) && (n2 != n3) && (n1 != n3)) {
        if ((n1 > n2) && (n1 > n3)) {
            rs = n1 + " es el mayor";
        } else if ((n2 > n1) && (n2 > n3)) {
            rs = n2 + " es el mayor";
        } else if ((n3 > n2) && (n3 > n1)) {
            rs = n3 + " es el mayor";
        }
    } else {
        rs = "are equals";
    }
    document.getElementsByClassName("result3")[0].innerHTML = rs;

}