class Ticket {
    static max_ticket = 0;
    constructor(d) {
        this.n_ticket = 0;
        this.destination = d;

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
}
Ticket.max_ticket = 30;
console.log(Ticket.getFlag());
train1_ticket = new Ticket("Cancun");
//Ticket.sell();
train1_ticket.sell();
train1_ticket.sell();
train1_ticket.sell();
train1_ticket.sell();
train1_ticket.getFlag();