class Ticket {
    constructor(d) {
        this.n_ticket = 0;
        this.destination = d;
        console.log("Se llamo al contructor");
    }

    sell() {
        this.n_ticket = this.n_ticket + 1;
        console.log("Sell number " + this.n_ticket + " to " + this.destination);

    }
}

train1_ticket = new Ticket("Cancun");
train2_ticket = new Ticket("Chetumal");

train1_ticket.sell();
train2_ticket.sell();
train1_ticket.sell();