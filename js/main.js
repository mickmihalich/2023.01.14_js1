//const writer = document.getElementById('writer_id');
const writer = document.querySelector('.writer');

//Змінна зі збереженим текстом
let myNotes;
//сподобався тернарний оператор =^_^=
//пусте за замовченням
(localStorage.getItem('myNotes')) ? myNotes = localStorage.getItem('myNotes') : myNotes = "";

console.log('myNotes: ', myNotes);

writer.value = myNotes;

writer.addEventListener('input', () => {
    if(saver.classList.contains('wait')){
        saver.classList.remove('wait');
    }    
    if(saver.classList.contains('good')){
        saver.classList.remove('good');
    }
    if(!saver.classList.contains('warning')){        
        saver.classList.add('warning');
        
        console.log('add(warning)');        
        
        saver.innerText = "Змінено";
    }  
    
    
});

function savering() {
    let temp = writer.value;
    if (temp != myNotes) {
        console.log('myNotes save: ', temp);
        myNotes = temp;
        localStorage.setItem('myNotes', myNotes);   
     
        if(saver.classList.contains('warning')){
            saver.classList.remove('warning');
        }
        if(!saver.classList.contains('good')){
            saver.classList.add('good');
        }

        saver.innerText = "Збережено";  
    } else {
        console.log('нічого не змінилося');
    }     
}

const saver = document.querySelector(".save");
saver.addEventListener('mouseenter', () => {
    savering();
});

const btnReset = document.querySelector(".reset");
btnReset.addEventListener('click', () => {
    writer.value = "";
    let temp = writer.value;
    if (temp != myNotes) {
        console.log('myNotes стерто!');
        myNotes = temp;
        localStorage.setItem('myNotes', myNotes);    
    } else {
        console.log('вже стерто!');
    }
});

//додам з хабра деякий код для перехвату Ctrl+S (Але він поки що не відпрацьовує)
//  © https://habr.com/ru/post/25511/
// Функция для добавления обработчиков событий
function addHandler(object, event, handler, useCapture) {
    if (object.addEventListener) {
        object.addEventListener(event, handler, useCapture ? useCapture : false);
    } else if (object.attachEvent) {
        object.attachEvent('on' + event, handler);
    } else alert("Add handler is not supported");
}
    
// Определяем браузеры
var ua = navigator.userAgent.toLowerCase();
var isIE = (ua.indexOf("msie") != -1 && ua.indexOf("opera") == -1);
var isGecko = (ua.indexOf("gecko") != -1);

// Добавляем обработчики
if (isIE) addHandler (document, "keydown", hotSave);
else addHandler (document, "keypress", hotSave);

function hotSave(evt) {
    // Получаем объект event
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    // Определяем нажатие Ctrl+S
    key = String.fromCharCode(key).toLowerCase() == "s";
    if (evt.ctrlKey && key) {
        // Блокируем появление диалога о сохранении
        if(evt.preventDefault) evt.preventDefault();
        evt.returnValue = false;
        // Запускаем любую функцию, по желанию
        savering();
        // Возвращаем фокус в окно
        window.focus();
        return false;
    }
}
