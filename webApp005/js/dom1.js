window.onload = function() {
    var all = document.getElementById('fruits').getElementsByClassName('yummy');
    for (var x = 0; x < all.length; x++) {
        all[x].style.color = "red";
        all[x].innerHTML += " Delicious";
        all[x].onclick = function() {
            alert(this.innerHTML);
        }
    }
    /*
        this.document.getElementById("add").onclick = function() {
            var fLabel = document.createElement("label");
            fLabel.innerHTML = "Element ";

            var flink = document.createElement("a");
            flink.innerHTML = "-";
            flink.href = "#";
            flink.className = "btn-delete";
            flink.onclick = function() {
                this.parentNode.remove();
            }

            var fInput = document.createElement("input");
            fInput.type = "text";
            fInput.name = "Name ";
            fLabel.appendChild(fInput);
            fLabel.appendChild(flink);
            document.getElementsByClassName("elements")[0].appendChild(fLabel);
        }*/
}