import { Payload } from './Payload';
import {Astronaut} from './Astronaut';
import {Rocket} from './Rocket';

export class Cargo implements Payload {
    massKg: number;
    material: string;

    constructor(massKg: number, material: string){
        this.massKg = massKg;
        this.material = material;
    }
}