function Ticket() {
    this.n_ticket = 0;
    this.sell = function() {
        this.n_ticket = this.n_ticket + 1;
        console.log("Sell number " + this.n_ticket);
    }
}

train_ticket = new Ticket();

train_ticket.sell();
train_ticket.sell();
train_ticket.sell();