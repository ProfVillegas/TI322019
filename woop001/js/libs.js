function Dog() {
    this.name = "";
    this.name = "Solovino"; //Construct
    this.name = prompt("Your name: ", "Solovino");
    //Method Bark
    this.bark = function() {
        console.log(this.name + ": Bark, bark, bark");
    }
    this.attack_to = function(name = "all") {
        console.log(this.name + " attack to " + name);
    }
}
/*var Lazzie = new Dog();
console.log(Lazzie.name);
Lazzie.bark();
Lazzie.attack_to("Emanuel");
Lazzie.attack_to();
console.log(Lazzie.name);
*/
function Circle() {
    this.radio = 0;
    this.radio = prompt("Input radio", 0);
    this.area = function() {
        var rs = this.radio * this.radio * Math.PI;
        console.log(rs.toFixed(2));
    }
    this.perimeter = function() {
        console.log(this.radio * 2 * Math.PI);
    }
}

circle1 = new Circle();
circle1.color = "#12AC01";
circle1.area();
circle1.perimeter();
console.log(circle1);
circle1.all = function() {
    console.log("Area and Perimeter");
    this.area();
    this.perimeter();
}
circle1.all();
console.log(circle1);