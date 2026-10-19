let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

// Обработчики кнопок
document.getElementById("btn_guitar").addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
        item = "";
    } else {
        tg.MainButton.setText("Вывести информацию по гитаре");
        item = "Гитара";
        tg.MainButton.show();
    }
});

document.getElementById("btn_piano").addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
        item = "";
    } else {
        tg.MainButton.setText("Вывести информацию по пианино");
        item = "Пианино";
        tg.MainButton.show();
    }
});

document.getElementById("btn_violin").addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
        item = "";
    } else {
        tg.MainButton.setText("Вывести информацию по скрипке");
        item = "Скрипка";
        tg.MainButton.show();
    }
});

document.getElementById("btn_drums").addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
        item = "";
    } else {
        tg.MainButton.setText("Вывести информацию по барабанам");
        item = "Барабаны";
        tg.MainButton.show();
    }
});

// Передача данных боту
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});
