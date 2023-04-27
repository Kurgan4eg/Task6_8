const consoleLog = document.querySelector("#consoleLog");

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const Alert = document.querySelector("#alert");

Alert.addEventListener('click', () => {
    alert('Служит для вывода информации на экран');
})

const Prompt = document.querySelector("#prompt");

Prompt.addEventListener('click', () => {
    alert('Служит для вывода диалогового окна с запросом на ввод текста');
})