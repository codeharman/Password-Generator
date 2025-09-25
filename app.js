// Provided password individual 

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// getElementById

let generatePassword = document.getElementById('password-btn');
let firstEl = document.getElementById('first-el');
let secondEl = document.getElementById('second-el');



// add eventlistener event

generatePassword.addEventListener('click', randomPassword);

// function here random password generator

function randomPassword() {
  let length = 12;
  let firstPassword = '';
  let secondPassword = '';

  for (let i = 0; i < length; i++) {
    firstPassword += characters[Math.floor(Math.random() * characters.length)]
    secondPassword += characters[Math.floor(Math.random() * characters.length)]
  }

  firstEl.textContent = firstPassword;
  secondEl.textContent = secondPassword;


};


// trying to make the clipboard function 

firstEl.addEventListener('click', () => {
  navigator.clipboard.writeText(firstEl.textContent);
    alert('First Password Copied')
});

secondEl.addEventListener('click', () => {
  navigator.clipboard.writeText(secondEl.textContent);
    alert('Second Password Copied')
})