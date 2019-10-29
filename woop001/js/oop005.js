class Ticket {
    static max_ticket = 0;
    constructor() {
        this.n_ticket = 0;
        this._destination = "unknow";

        console.log("Se llamo al contructor");
    }

    sell() {
        this.n_ticket = this.n_ticket + 1;
        console.log("Sell number " + this.n_ticket + " to " + this.destination);
        console.log("Free spaces " + (Ticket.max_ticket - this.n_ticket));

    }
    static getFlag() {
        return Ticket.max_ticket;
    }
    get destination() {
        // Validation can happen on data
        return this._destination;
    }
    set destination(val) {
        // Validation can happen on data
        this._destination = val;
    }
}
Ticket.max_ticket = 30;
console.log(Ticket.getFlag());
train1_ticket = new Ticket();
train1_ticket.destination = "Cancun";