'use strict';

const SIZE_SMALL = {
    prise: 50,
    callories: 20
}

const SIZE_MEDIUM = {
    prise: 75,
    callories: 30
}

const SIZE_BIG = {
    prise: 100,
    callories: 40
}

const TOPPING_CHEESE = {
    prise: 10,
    callories: 20
}

const TOPPING_SALAD = {
    prise: 20,
    callories: 5
}

const TOPPING_POTATO = {
    prise: 15,
    callories: 10
}

const TOPPING_SEASONING = {
    prise: 15,
    callories: 0
}

const TOPPING_MAYO = {
    prise: 20,
    callories: 5
}

class Hamburger {
    constructor(obj) {
        this.prise = obj.prise;
        this.callories = obj.callories;
    }

    addTopping(topping) {
        this.prise += topping.prise
        this.callories += topping.callories
    }

    getPrice() {
        return this.prise
    }

    getCallories() {
        return this.callories
    }
}

const hamburger = new Hamburger(SIZE_SMALL);

hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_POTATO);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());