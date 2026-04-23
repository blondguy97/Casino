const winOrLose = document.querySelector('.win-or-lose');
const allMoney = document.querySelector('.money span');
const sum = document.querySelector('.sum span');
const button = document.querySelector('.btn');
const buttonRetry = document.querySelector('.retry-btn');
const input = document.querySelector('.label input');
const buttonAgree = document.querySelector('.btn-agree');


let bank = 1000;
let cost = 0;


generateSums()

buttonAgree.addEventListener('click', function (e) {
    const sumByUser = input.value.trim();
    input.value = '';
    cost = Number(sumByUser);

    if (isNaN(cost) || cost <= 0) {
        winOrLose.innerHTML = `<b style='color: red'>Введите число или число выше нуля!</b>`;
    }

    else if (bank < cost) (
        winOrLose.innerHTML = `<b style='color: red'>У тебя нет столько чтобы поставить</b>`
    )
 
    else {
    winOrLose.innerHTML = ``;
    generateSums();
}
});


function generateSums() {
    allMoney.textContent = bank;
    sum.textContent = cost;
}


button.addEventListener('click', function (e) {

    if (bank < cost) {
        winOrLose.innerHTML = `<b style='color: red'>Недостаточно деняк :(</b>`;
        return
    }
    else {

        winOrLose.innerHTML = ``;

        const isWin = Math.random() < 0.2;

        if (isWin) {
            bank = bank + cost;
            winOrLose.innerHTML = `
            <b style='color: green'>Выиграл!</b>
        `
            generateSums()
        }
        else {
            bank = bank - cost;

            winOrLose.innerHTML = `
            <b style='color: red'>Проиграл!</b>
        `
            generateSums()
        }



        if (bank <= 0) {
            button.disabled = true;
            buttonAgree.disabled = true;
            input.disabled = true;

            winOrLose.innerHTML = `<b style='color: red'>Игра окончена! Ты проиграл вообще всё.☠️</b>`;
            cost = 0;
            generateSums()
            buttonRetry.style.display = 'block';

        }
    }
})

buttonRetry.addEventListener('click', function (e) {
    winOrLose.innerHTML = ``;
    button.disabled = false;
    buttonAgree.disabled = false;
    input.disabled = false;

    bank = 1000;

    generateSums();
    e.target.style.display = 'none'

})