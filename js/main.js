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

const saver = document.querySelector(".save");
saver.addEventListener('mouseenter', () => {
    var temp = writer.value;
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
      
});

const btnReset = document.querySelector(".reset");
btnReset.addEventListener('click', () => {
    writer.value = "";
    var temp = writer.value;
    if (temp != myNotes) {
        console.log('myNotes стерто!');
        myNotes = temp;
        localStorage.setItem('myNotes', myNotes);    
    } else {
        console.log('вже стерто!');
    }
});