const parseOperands = () => {
    let args = process.argv;
    if (args.length != 4) {
        console.trace("there must be exactly two operands");
        process.exit(1);
    }

    let operandA = process.argv[2].split('');
    let operandB = process.argv[3].split('');
    if (operandA.length < operandB.length) {
        let temp = operandA;
        operandA = operandB;
        operandB = temp;
    }
    
    return [operandA, operandB];
}

const reverseOperand = (operand) => {
    if (operand.length <= 0) {
        console.trace("reversing an integer operand represented as an empty array is intractable");
        process.exit(1);
    }
    if (operand.length < 2) {
        return operand;
    }

    let temp;
    for (let i = 0, j = operand.length-1; i < j; i++, j--) {
        temp = operand[j];
        operand[j] = operand[i];
        operand[i] = temp;
    }

    return operand;
}

const operands = parseOperands();
const operandA = operands[0];
const operandB = operands[1];

const additionWithCarry = (a, b) => {
    let reversedA = reverseOperand(a);
    let operandB = b;

    console.log(reversedA);
    console.log(operandB);
}

additionWithCarry(operandA, operandB);
