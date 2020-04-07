const keyboardEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']','\\','Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
    'ctrl', 'win', 'alt', 'Space', 'alt', '←', '↓', '→','ctrl'
];
const capsEng = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\'','Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑','Shift',
    'ctrl', 'win', 'alt', 'Space', 'alt',  '←',  '↓', '→','ctrl'
];
const shiftEng = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\'','Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑','Shift',
    'Ctrl', 'Win', 'Alt', 'Space', ' Alt',  '←',  '↓', '→','ctrl'
];
const keyboardRu= ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\','Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
    'ctrl', 'win', 'alt', 'Space', 'alt' ,'←', '↓', '→','ctrl'
];
const capsRu = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/','Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
    'ctrl', 'win', 'alt', 'Space', 'alt', '←', '↓', '→', 'ctrl'];

const shiftRu = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/','Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
    'ctrl', 'win', 'alt', 'Space', 'alt','←', '↓', '→','ctrl'];


const container = document.createElement('div');
container.className = "container";
document.body.append(container);


const displayKeyboard = document.createElement('textarea');
displayKeyboard.className = "displayKeyboard";
displayKeyboard.id = 'textarea_block';
container.prepend(displayKeyboard);

let rowKeyboard = document.createElement('div');
rowKeyboard.className = "rowKeyboard";
rowKeyboard.id = "button-container";
container.append(rowKeyboard);

function board(arr){
    for(let i = 0; i < arr.length; i++){
        let index = document.createElement('button');
        if(i === 14 || i === 29 || i === 42 || i === 55){
            indexTag =  document.createElement('br');
            rowKeyboard.append(indexTag);
        }
        if(arr[i] === 'Backspace' || arr[i] === 'Tab'
            || arr[i] === 'CapsLock' || arr[i] === 'Enter'
            || arr[i] === 'Shift' || arr[i] === 'Space'
            || arr[i] === 'ctrl' || arr[i] === 'Tab'
            || arr[i] === 'win' || arr[i] === 'alt'
            || arr[i] === '←' || arr[i] === '↓'
            || arr[i] === '↑' || arr[i] === '→'
            || arr[i] === 'Del'){
            index.id = arr[i];
            rowKeyboard.append(index);
        }

        index.type = 'button';
        index.className = "button";
        index.innerHTML = arr[i];
        rowKeyboard.append(index);

    }
}
board(keyboardEng);

const HandleKeyboard=document.getElementById('button-container').children;

for (let i = 0; i < HandleKeyboard.length; i++) {
    HandleKeyboard[i].addEventListener('click',()=>{
        console.log('click');
    });
}

let englFlag = true;
let ruFlag = false;
let shiftFlag = false;
document.addEventListener('keyup', (event)=> {
    if(event.code === 'ShiftLeft') {
        shiftFlag = true;
    }
    if (shiftFlag && event.ctrlKey ) {
        ruFlag = !ruFlag;
        if (ruFlag) {
            document.getElementById('button-container').innerHTML = '';
            board(keyboardRu);
        } else {
            document.getElementById('button-container').innerHTML = '';
            board(keyboardEng);
        }
    }
});

let capsFlag = false;
document.addEventListener('keyup', (event)=>{
    if(event.code === "CapsLock"){
        capsFlag = !capsFlag;
        if (capsFlag) {
            document.getElementById('button-container').innerHTML = '';
            board(capsEng);
        } else {
            document.getElementById('button-container').innerHTML = '';
            board(keyboardEng);
        }}

});