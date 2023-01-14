//const writer = document.getElementById('writer_id');
const writer = document.querySelector('.writer');

//Змінна зі збереженим текстом
var myNotes;
//сподобався тернарний оператор =^_^=
//пусте за замовченням
(localStorage.getItem('myNotes')) ? myNotes = localStorage.getItem('myNotes') : myNotes = "";

console.log('myNotes: ', myNotes);

writer.value = myNotes;

writer.addEventListener('input', () => {
    saver.style.borderColor = "red";
    saver.style.color = "red";
    saver.innerText = "Змінено";
});

const saver = document.querySelector(".save");
saver.addEventListener('mouseenter', () => {
    var temp = writer.value;
    if (temp != myNotes) {
        console.log('myNotes save: ', temp);
        myNotes = temp;
        localStorage.setItem('myNotes', myNotes);    
    } else {
        console.log('нічого не змінилося');
    }
    saver.style.borderColor = "green";
    saver.style.color = "green";
    saver.innerText = "Збережено";    
});

const btnReset = document.querySelector(".reset");
btnReset.addEventListener('click', () => {
    writer.value = "";
    var temp = writer.value;
    if (temp != myNotes) {
        console.log('myNotes save: ', temp);
        myNotes = temp;
        localStorage.setItem('myNotes', myNotes);    
    } else {
        console.log('спрацював клік стерти');
    }
});