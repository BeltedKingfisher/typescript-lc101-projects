"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    } //end of constructor
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }; //end of currentMassKg
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        } //end of if statement
    }; //end of canAdd
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            return true;
        }
        else {
            return false;
        } //end of if statement
    }; //end of addCargo
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            return true;
        }
        else {
            return false;
        } //end of if statement
    }; //end of addAstronaut
    return Rocket;
}()); //end of class declaration
exports.Rocket = Rocket;
