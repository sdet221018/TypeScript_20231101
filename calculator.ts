function Calculator(num1: number, num2: number, operator?: string) : number {
    switch (operator) {
        case "-": return num2 - num1;
        case "*": return num1 * num2;
        case "/": return num1 / num2;
        default: return add(num1, num2);
    }
}

function add(num1: number, num2: number) : number {
    return num1 + num2;
}

console.log(Calculator(1,3));
console.log(Calculator(1,3, "/"));

export {};
