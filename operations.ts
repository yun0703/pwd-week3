type Operator = '+' | '-' | '*' | '/';
type BinaryOperation = (left: number, right: number) => number;

const add: BinaryOperation = (left, right) => left + right;
const subtract: BinaryOperation = (left, right) => left - right;
const multiply: BinaryOperation = (left, right) => left * right;
const divide: BinaryOperation = (left, right) => {
  if (right === 0) throw new Error('0으로 나눌 수 없습니다.');
  return left / right;
};

const operations = { '+': add, '-': subtract, '*': multiply, '/': divide };

function calculate(left: number, right: number, operation: BinaryOperation): number {
  return operation(left, right);
}