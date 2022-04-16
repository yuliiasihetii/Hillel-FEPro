function createCalculator(n) {
    return {
        sum: (b) => n += b,
        mult: (b) => n *= b,
        sub: (b) => n -= b,
        div: (b) => n /= b,
        set: (b) => n = b,
        get: () => n,
    }

}

const calc = createCalculator(10);

console.log(calc.sum(5))
console.log(calc.mult(10))
console.log(calc.sub(40))
console.log(calc.div(10))
console.log(calc.get())