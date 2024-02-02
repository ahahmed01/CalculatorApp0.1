// const button = document.getElementById("1")

// function getName(){
//     const output = document.getElementById("output");
//     console.log(5);
// }

// if (button){
//     button.onclick = getName()
// }

let buttons = document.querySelectorAll('.button')
const output = document.getElementById("output");
let opens = [];
let closeds = [];
let new_answer = false;

function find_answer(){
    try {
        output.textContent = eval(document.getElementById('output').textContent);
      } catch (error) {
        output.textContent = 'Error';
      }
}

function clicked(elem){
    let symbol = elem.id
    if (symbol == "AC"){
        output.textContent = "";
        new_answer = false;
    }
    else if (symbol == "="){
        find_answer();
        new_answer = true;
    }
    else if (new_answer == true){
        output.textContent = "";
        output.textContent += symbol;
        new_answer = false;
    }
    else{
        output.textContent += symbol;
    }
    
}

buttons.forEach(function(element){
    element.addEventListener('click',function(){
        clicked(element)
    });
});
