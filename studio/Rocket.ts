import { Astronaut } from './Astronaut';
import { Payload } from './Payload';
import { Cargo } from './Cargo';

export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo [] = [];
    astronauts: Astronaut [] = [];
    massKg: number;

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }//end of constructor

    sumMass (items: Payload[]): number {
        let sum: number = 0;
        for (let i=0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }//end of currentMassKg

    canAdd(item: Payload): boolean{
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }else{
            return false;
        }//end of if statement
    }//end of canAdd

    addCargo(cargo: Cargo): boolean{
        if (this.canAdd(cargo) === true){
            return true;
        }else{
            return false;
        }//end of if statement
    }//end of addCargo

    addAstronaut(astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut) === true){
            return true;
        }else{
            return false;
        }//end of if statement
    }//end of addAstronaut

}//end of class declaration