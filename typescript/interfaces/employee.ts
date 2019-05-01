///<reference path="manager.ts"/>


interface Employee extends Manager {
    name: string;
}

let employee = <Employee>{};
employee.name = "Maycon Ribeiro";
employee.hasPower = true;