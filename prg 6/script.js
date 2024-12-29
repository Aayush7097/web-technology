
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'difference':
            result = num1 - num2;
            break;
        case 'product':
            result = num1 * num2;
            break;
        case 'quotient':
            result = num1 / num2;
            break;
        case 'remainder':
            result = num1 % num2;
            break;
        case 'power':
            result = Math.pow(num1, num2);
            break;
        case 'sqrt':
            result = Math.sqrt(num1);
            break;
        case 'square':
            result = Math.pow(num1, 2);
            break;
        default:
            result = 'Invalid Operation';
            break;
    }

    document.getElementById('result').innerText = `Result: ${result}`;}