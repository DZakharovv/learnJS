// 'use strict';
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let isNum = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

  

function start(){
    let randomNumber = getRandomInt(100);
    console.log('randomNumber:', randomNumber);

        function attempt(){
            let number = prompt('Угадай число от 1 до 100');
            if (number === null) {
                alert('Пока');
                return;
            }
            if (isNum(number)) {
                if (number > randomNumber) {
                    alert('Загаданное число меньше'); 
                    attempt();
                }   else if (number < randomNumber) {
                    alert('Загаданное число больше'); 
                    attempt();
                }   else {
                    if (confirm('Вы угадали!')) {
                        start();
                    } else {
                        alert('Пока');
                        return;
                    }
                }
                    
            } else {
                alert('Введите число');
                attempt();            
            }
        };
        attempt();
};
start();
        
        
        
        // — спрашивает пользователя: "Угадай число от 1 до 100".
 // — если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
   // — если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;         
// — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
// — если пользователь нажимает "Отмена", то игра заканчивается.
