/*
Напиши скрипт который, при наборе текста в инпуте input#name-input 
(событие input), подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/

const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

const currentValueOutput = event => {
    outputEl.textContent =
        event.target.value === '' ? 'незнакомец' : event.target.value;
};

inputEl.addEventListener('input', currentValueOutput);