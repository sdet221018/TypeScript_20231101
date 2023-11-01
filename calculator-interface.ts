interface ICalculate {
    add(num1: number, num2: number) : number
    sub?(num1: number, num2: number) : number
    div(num1: number, num2: number) : number
    mul?(num1: number, num2: number) : number
}

class Calculate implements ICalculate {
    add(num1: number, num2 : number) {
        return num1 + num2;
    }
    div(num1: number, num2: number) {
        return num1 / num2;
    }
}
