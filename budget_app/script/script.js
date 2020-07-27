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
const addIncomeItem = document.querySelectorAll('.additional_income-item')[0];
console.log("addIncomeItem: ", addIncomeItem);

// Правая часть программы (через класс), -value.

const budgetDay = document.getElementsByClassName('budget_day-value')[0];
console.log("budgetDay: ", budgetDay);
const expensesMonth = document.getElementsByClassName('expenses_month-value')[0];
console.log("expensesMonth: ", expensesMonth);
const addIncome = document.getElementsByClassName('additional_income-value')[0];
console.log("addIncome: ", addIncome);
const addExpenses = document.getElementsByClassName('additional_expenses-value')[0];
console.log("addExpenses: ", addExpenses);
const incomePeriod = document.getElementsByClassName('income_period-value')[0];
console.log("incomePeriod: ", incomePeriod);
const targetMonth = document.getElementsByClassName('target_month-value')[0];
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




