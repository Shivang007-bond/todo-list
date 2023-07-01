const add = document.querySelector(".btn");
const list = document.querySelector(".todos");
let inputField = document.querySelector(".input-field");


add.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add("todos")
    paragraph.innerText = inputField.value ;
    list.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through" ;
    })

    paragraph.addEventListener("dblclick",function(){
        list.removeChild(paragraph);
        paragraph.classList.add("todos")
    })
})

document.addEventListener("keydown", function(e){
        if(e.key == "Enter"){
            let paragraph = document.createElement('p');
            paragraph.classList.add("todos")
            paragraph.innerText = inputField.value ;
            list.appendChild(paragraph);
            inputField.value = "";

            
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through" ;
    })

    paragraph.addEventListener("dblclick",function(){
        list.removeChild(paragraph);
    })
        }
})