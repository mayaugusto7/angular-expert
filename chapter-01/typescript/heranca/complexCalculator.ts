///<reference path="simpleCalculator"/>

class ComplexCalculator {

    z: number;

    constructor(private x: number, private y: number) {}

    multiplication() {
        this.z = this.x * this.y;
    }

    division() {
        this.z = this.x / this.y;
    }

}

let calculator = new ComplexCalculator(10, 20);
calculator.multiplication();
calculator.division();
