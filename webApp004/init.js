function main() {
    //document.body.innerHTML = "<h1>Hola</h1>";
    //window.alert("alerta");

    /*document.createElement crea nuevos elementos*/

    /*document.createTextNode crea nodos de text */

    /*document.appendChild es para agregar
     un nodo hijo a un padre */

    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Texto de Ejemplo");
    parrafo.style.fontSize = "20px";
    parrafo.onclick = function() {
        parrafo.parentNode.removeChild(parrafo);
    }
    parrafo.appendChild(texto);
    document.body.appendChild(parrafo);

    var cmpTexto = document.createElement("input");
    cmpTexto.id = "fieldText";
    cmpTexto.className = "input-field";
    cmpTexto.type = "text";
    cmpTexto.placeholder = "Text de ejemplo";

    document.body.appendChild(cmpTexto);

}