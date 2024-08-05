// src/logic/Calculator.js
import Addition from './Addition';
import Subtraction from './Subtraction';
import Multiplication from './Multiplication';
import Division from './Division';

class Calculator {
    constructor(display) {
        this.display = display;
        this.currentOperation = null;
        this.value1 = null;
        this.value2 = null;
        this.waitingForOperand = false; // Añadimos una bandera para controlar la espera del siguiente operando
    }

    pressButton(value){
        if (this.display.tagOperation()) {
            this.display.clear();
            this.display.setPreviousOperation(false);
        }
        // Lógica para manejar los botones presionados
        switch (value) {
            case 'C':
                this.clear();
                break;
            case '+/-':
                this.toggleSign();
                break;
            case '%':
                this.percent();
                break;
            case '+':
                this.setOperation(new Addition(), '+');
                break;
            case '-':
                this.setOperation(new Subtraction(), '-');
                break;
            case 'x':
                this.setOperation(new Multiplication(), 'x');
                break;
            case '/':
                this.setOperation(new Division(), '/');
                break;
            case '=':
                this.calculate();
                break;
            default:
                if (this.waitingForOperand) {
                    this.display.clear();
                    this.waitingForOperand = false;
                }
                this.display.append(value);
                break;
        }
    }

    clear() {
        this.display.clear();
        this.currentOperation = null;
        this.value1 = null;
        this.value2 = null;
    }

    setOperation(operation, operatorSymbol){
        if (this.currentOperation) {
            this.calculate();
        }
        this.value1 = parseFloat(this.display.currentValue());
        this.currentOperation = operation;
        this.waitingForOperand = true; // Marcar que estamos esperando el siguiente operando
        this.display.setSelectedOperator(operatorSymbol); // Establecer el operador seleccionado
    }

    calculate(){
        if(!this.currentOperation || this.value1 === null) {
            return;
        }

        this.display.setPreviousOperation(true);
        this.display.setSelectedOperator(null); // Reiniciar el operador seleccionado después del cálculo

        this.value2 = parseFloat(this.display.currentValue());
        let result;
        try{
            result = this.currentOperation.execute(this.value1, this.value2);
        } catch (error){
            result = 'Error';
        }
        this.display.update(result.toString());
        this.value1 = result;
        this.currentOperation = null;
        this.value2 = null;
        return result;
    }

    toggleSign() {
        const currentValue = parseFloat(this.display.currentValue());
        if (currentValue !== 0) {
            const newValue = currentValue * -1;
            this.display.update(newValue.toString());
        }
    }

    percent() {
        const currentValue = parseFloat(this.display.currentValue());
        if (currentValue !== 0) {
            const newValue = currentValue / 100;
            this.display.update(newValue.toString());
        }
    }
}

export default Calculator;
