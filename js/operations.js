"use strict";
const add = (left, right) => left + right;
const subtract = (left, right) => left - right;
const multiply = (left, right) => left * right;
const divide = (left, right) => {
    if (right === 0)
        throw new Error('0으로 나눌 수 없습니다.');
    return left / right;
};
const operations = { '+': add, '-': subtract, '*': multiply, '/': divide };
function calculate(left, right, operation) {
    return operation(left, right);
}
