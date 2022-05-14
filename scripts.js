function Calculator(n) {
    this.result = n;
}

Calculator.prototype.add = function (b) {
    return this.result += b;
}

Calculator.prototype.mult = function (b) {
    return this.result *= b;
}

Calculator.prototype.sub = function (b) {
    return this.result -= b;
}

Calculator.prototype.div = function (b) {
    return this.result /= b;
}

const calc = new Calculator(10);