//Vehicle Class
class Vehicle{
    //Constructor with make, model and year parameters
    constructor(make, model, year){
        //Declare variables
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Log information to the console / screen
    Information(){
        console.log(`Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`);
    }
}
//instantiate object with parameters
let myVehicle = new Vehicle("Audi","A3",1996);
//display information about Vehicle object
myVehicle.Information();

//Cars Class, Child of Vehicle
class Cars extends Vehicle{
    //Constructor
    constructor(make, model, year, doors){
        //Uses Vehicle Constructor
        super(make, model, year);
        //Declare variables
        this.doors = doors;
    }
    // Log information to the console / screen
    infoInformation(){
        //Override Vehicle implementation
        super.Information();
        //log to the screen
        console.log(`Number of Doors: ${this.doors}`);
    }
}
//instantiate object with additional parameters
let myCar = new Cars("Audi","A3",1996, 4);
//display information about Cars Object Child of Vehicle
myCar.infoInformation();