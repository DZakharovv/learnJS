// Задание по проекту, получить каждый элемент в отдельную переменную:
'use strict';

// Кнопку "Рассчитать" через id
const buttonStart = document.getElementById('start');
console.log("buttonStart: ", buttonStart);

// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
const incomeAdd = document.getElementsByTagName('button')[0];
console.log("incomeAdd: ", incomeAdd);

const expensesAdd = document.getElementsByTagName('button')[1];
console.log("expensesAdd: ", expensesAdd);

// Чекбокс по id через querySelector
const depositCheck = document.querySelector('#deposit-check'); 
console.log("checkBox: ", depositCheck);

// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
const addIncomeItem = document.querySelectorAll('.additional_income-item');
console.log("addIncomeItem: ", addIncomeItem);

// Правая часть программы (через класс), -value.

const budgetDay = document.querySelector('.budget_day-value');
console.log("budgetDay: ", budgetDay);
const expensesMonth = document.querySelector('.expenses_month-value');
console.log("expensesMonth: ", expensesMonth);
const addIncome = document.querySelector('.additional_income-value');
console.log("addIncome: ", addIncome);
const addExpenses = document.querySelector('.additional_expenses-value');
console.log("addExpenses: ", addExpenses);
const incomePeriod = document.querySelector('.income_period-value');
console.log("incomePeriod: ", incomePeriod);
const targetMonth = document.querySelector('.target_month-value');
console.log("targetMonth: ", targetMonth);

// поля ввода (Input) с левой стороны, range

const salaryAmount = document.querySelector('.salary-amount');
console.log("salaryAmount: ", salaryAmount);

const incomeItems = document.querySelector('.income-items');
// console.log("incomeItems: ", incomeItems);
console.log("incomeTitle: ", incomeItems.children[0]);
console.log("incomeAmount: ", incomeItems.children[1]);

const expensesItems = document.querySelector('.expenses-items');
// console.log("expensesItems", expensesItems);

console.log("expensesTitle: ", expensesItems.children[0]);
console.log("expensesAmount: ", expensesItems.children[1]);

const incomeAmount = document.querySelector('.income-amount');
console.log("incomeAmount: ", incomeAmount);

const addExpensesItem = document.querySelector('.additional_expenses-item');
console.log("addExpensesItem: ", addExpensesItem);

const depositAmount = document.querySelector('.deposit-amount');
console.log("depositAmount: ", depositAmount);

const depositPercent = document.querySelector('.deposit-percent');
console.log("depositPercent: ", depositPercent);

const targetAmount = document.querySelector('.target-amount');
console.log("targetAmount: ", targetAmount);

const range = document.querySelector('.period-select');
console.log("range: ", range);




