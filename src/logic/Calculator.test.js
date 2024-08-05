// src/logic/Calculator.test.js
import Calculator from './Calculator';
import Addition from './Addition';
import Subtraction from './Subtraction';
import Multiplication from './Multiplication';
import Division from './Division';

const createMockDisplay = (initialValue = '0') => ({
  currentValue: jest.fn(() => initialValue),
  clear: jest.fn(),
  append: jest.fn(),
  update: jest.fn(),
  setPreviousOperation: jest.fn(),
  setSelectedOperator: jest.fn(),
  tagOperation: jest.fn(() => false),
});

describe('Calculator', () => {
  test('performs addition', () => {
    const mockDisplay = createMockDisplay('5');
    const calculator = new Calculator(mockDisplay);
    calculator.setOperation(new Addition(), '+');
    mockDisplay.currentValue.mockReturnValueOnce('3');
    const result = calculator.calculate();

    expect(mockDisplay.update).toHaveBeenCalledWith('8');
    expect(result).toBe(8);
  });

  test('performs subtraction', () => {
    const mockDisplay = createMockDisplay('5');
    const calculator = new Calculator(mockDisplay);
    calculator.setOperation(new Subtraction(), '-');
    mockDisplay.currentValue.mockReturnValueOnce('3');
    const result = calculator.calculate();

    expect(mockDisplay.update).toHaveBeenCalledWith('2');
    expect(result).toBe(2);
  });

  test('performs multiplication', () => {
    const mockDisplay = createMockDisplay('5');
    const calculator = new Calculator(mockDisplay);
    calculator.setOperation(new Multiplication(), 'x');
    mockDisplay.currentValue.mockReturnValueOnce('3');
    const result = calculator.calculate();

    expect(mockDisplay.update).toHaveBeenCalledWith('15');
    expect(result).toBe(15);
  });

  test('performs division', () => {
    const mockDisplay = createMockDisplay('6');
    const calculator = new Calculator(mockDisplay);
    calculator.setOperation(new Division(), '/');
    mockDisplay.currentValue.mockReturnValueOnce('3');
    const result = calculator.calculate();

    expect(mockDisplay.update).toHaveBeenCalledWith('2');
    expect(result).toBe(2);
  });

  test('handles division by zero', () => {
    const mockDisplay = createMockDisplay('6');
    const calculator = new Calculator(mockDisplay);
    calculator.setOperation(new Division(), '/');
    mockDisplay.currentValue.mockReturnValueOnce('0');
    const result = calculator.calculate();

    expect(mockDisplay.update).toHaveBeenCalledWith('Error');
    expect(result).toBe('Error');
  });

  test('clears the display', () => {
    const mockDisplay = createMockDisplay('123');
    const calculator = new Calculator(mockDisplay);
    calculator.clear();

    expect(mockDisplay.clear).toHaveBeenCalled();
    expect(calculator.currentOperation).toBe(null);
    expect(calculator.value1).toBe(null);
    expect(calculator.value2).toBe(null);
  });

  test('toggles the sign', () => {
    const mockDisplay = createMockDisplay('5');
    const calculator = new Calculator(mockDisplay);
    calculator.toggleSign();

    expect(mockDisplay.update).toHaveBeenCalledWith('-5');
  });

  test('handles percent conversion', () => {
    const mockDisplay = createMockDisplay('50');
    const calculator = new Calculator(mockDisplay);
    calculator.percent();

    expect(mockDisplay.update).toHaveBeenCalledWith('0.5');
  });
});
