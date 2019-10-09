window.onload = function() {
    var h1 = document.createElement("h1");
    var txt1 = document.createTextNode("texto uno");

    h1.appendChild(txt1);

    document.body.appendChild(h1);

    var p = document.createElement("p");
    var a = document.createElement("a");
    a.href = "#";
    var txt2 = document.createTextNode("Texto");
    a.appendChild(txt2);
    p.appendChild(a);
    document.body.appendChild(p);

}