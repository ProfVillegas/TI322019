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
    current.style.width = width + "%";
}

function show_clue() {
    var show_element = document.getElementsByClassName("clue")[0];
    show_element.style.display = "block";
}

function is_odd(num) {
    var text = "";
    if (num % 2 == 0) {
        text = num + " is not odd ";
    } else {
        text = num + " is odd ";
    }
    document.getElementsByClassName("rs")[0].innerHTML = text;
}

function volumen(r, h) {
    var result = 3.1416 * (r * r) * h;
    document.getElementsByClassName("rs_volumen")[0].innerHTML = result.toFixed(2);
}

function draw_bars(m, w) {
    var total = parseFloat(m) + parseFloat(w);
    var porcent_m = (100 / total) * m;
    var porcent_w = (100 / total) * w;
    bar("bar-m", 0, porcent_m);
    bar("bar-w", 0, porcent_w);
}