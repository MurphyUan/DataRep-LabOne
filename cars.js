class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        console.log("Make: "+this.make+"\nModel: "+this.model+"\nYear: "+this.year);
    }
}

let myVehicle = new Vehicle("Audi","A3",1996);
myVehicle.Information();

class Cars extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

    infoInformation(){
        super.Information();
        console.log("Number of Doors: "+this.doors);
    }
}

let myCar = new Cars("Audi","A3",1996, 4);
myCar.infoInformation();