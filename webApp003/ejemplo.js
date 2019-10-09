function load() {
    var parrafo = document.createElement("p");
    var txt1 = document.createTextNode("Inicio del parrrafo <b>y</b> un link ");
    var link = document.createElement("a");
    link.href = "#";
    var txtLink = document.createTextNode("Texto del link");
    link.appendChild(txtLink);
    var txt2 = document.createTextNode(" .");
    parrafo.appendChild(txt1);
    parrafo.appendChild(link);
    parrafo.appendChild(txt2);
    document.body.appendChild(parrafo);
};