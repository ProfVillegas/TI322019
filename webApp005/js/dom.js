window.onload = function() {
    var elems = document.getElementById("fruits").getElementsByClassName("yummy");
    this.console.log(elems);
    for (var x = 0; x < elems.length; x++) {
        elems[x].style.backgroundColor = "yellow";
        elems[x].innerHTML += " Delicious";
        elems[x].onclick = function() {
            var color = this.style.backgroundColor;
            if (color == "yellow") {
                color = "green";
            } else {
                color = "yellow";
            }
            this.style.backgroundColor = color;
        }
    }
    document.getElementById("add").onclick = function() {
        /*var elemento = document.getElementById("template")
        .innerHTML;
        document.getElementById("elements").innerHTML 
        += elemento;*/
        var product = document.getElementById("template")
            .getElementsByTagName("input")[0];
        var amount = document.getElementById("template")
            .getElementsByTagName("input")[1];

        var fLabel = document.createElement("label");
        fLabel.innerHTML = "Text Element ";
        var fInput = document.createElement("input");
        fInput.type = "text";
        fInput.value = product.value;
        product.value = "";
        product.focus();
        /* */
        var fInput2 = document.createElement("input");
        fInput2.type = "text";
        fInput2.value = amount.value;
        amount.value = "";

        var link = document.createElement("a");
        link.href = "#delete";

        link.innerHTML = "<b>-</b>";

        link.onclick = function() {
            this.parentNode.remove();
        }

        fLabel.appendChild(fInput);
        fLabel.appendChild(fInput2);
        fLabel.appendChild(link);

        document.getElementById("elements")
            .appendChild(fLabel);
    }
}