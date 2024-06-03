const swap = (a, b) => {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

const parseOperands = () => {
    if (process.argv.length != 4) {
        console.trace("there must be exactly two operands");
        process.exit(1);
    }

    let operandA = process.argv[2].split('');
    let operandB = process.argv[3].split('');

    if (operandA.length < operandB.length) {
        return swap(operandA, operandB);
    }
    return [operandA, operandB];
}

const swapElements = (operand, i, j) => {
    let temp = operand[j];
    operand[j] = operand[i];
    operand[i] = temp;
    return operand;
}

const reverseOperand = (operand) => {
    if (operand.length <= 0) {
        console.trace("reversing an integer operand represented as an empty array is intractable");
        process.exit(1);
    }
    
    if (operand.length < 2) {
        return operand;
    } else if (operand.length < 3) {
        return swapElements(operand, 0, 1);
    }

    for (let i = 0, j = operand.length-1; i < j; i++, j--) {
        operand = swapElements(operand, i, j);
    }
    return operand;
}

const operands = parseOperands();
const operandA = operands[0];
const operandB = operands[1];

const add = (a, b) => {
    return [reverseOperand(a), b];
}

console.log(`\nFirst program argument: "${process.argv[2]}"`);
console.log(`Second program argument: "${process.argv[3]}"`);
console.log("\nParsing program arguments...");
console.log(`\nFirst operand: [${operandA}]`);
console.log(`Second operand: [${operandB}]`);
console.log("\nReversing the first operand...");
console.log(`\nReversed first operand: [${add(operandA, operandB)[0]}]`);
console.log(`Second operand: [${add(operandA, operandB)[1]}]`);
console.log("\nAdding operands...");
console.log();
