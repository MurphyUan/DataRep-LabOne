//BMI Class
class BMI{
    //Constructor with weight and height parameters
    constructor(height, weight){
        //Declare variables
        this.height = height;
        this.weight = weight;
    }
    // Calculate the Body Mass Index (BMI)using weight and height variables
    calculateBMI(){
        //Calculate BMI
        let bmi = this.weight/(this.height**2);
        //Return Calculated BMI value
        return bmi;
    }
}
//instantiate object with parameters
let myBMI = new BMI(2,98);
//Calculate BMI value
let calc = myBMI.calculateBMI();
//Log result to the screen
console.log(`BMI: ${calc}`);