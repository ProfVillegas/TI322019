class Human {
    constructor() {
        this.email = "";
    }
}

nairomy = new Human();
nairomy.email = "correo@DeathNote.cz";

class Humans {
    constructor() {
        this._email = "";
    }
    set email(e) {
        this._email = e;
    }
    get email() {
        return this._email;
    }
}
franco = new Humans();
franco.email = "franco@DeathNote.cz";

console.log(nairomy);
console.log(franco.email);