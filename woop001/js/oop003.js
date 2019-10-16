class Coordenada {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    esIgual(coordenada) {
        if (this.x == coordenada.x && this.y == coordenada.y) {
            return true;
        }
        return false;
    }
}

var testCoordenada = new Coordenada(8, 55);
console.log(testCoordenada.esIgual(new Coordenada(3, 1)))