function magic_color(current) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    current.style.background = bgColor;
}

function bar(class_value, element, width) {
    var current = document.getElementsByClassName(class_value)[element];
    current.style.width = width + "px";
}

function show_clue() {
    var show_element = document.getElementsByClassName("clue")[0];
    show_element.style.display = "block";
}