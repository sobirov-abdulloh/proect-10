let btn1 =document.querySelector("#btn1")
let btn2 =document.querySelector("#btn2")
let btn3 =document.querySelector("#btn3")

btn1.style.backgroundColor="orange"
btn2.style.backgroundColor="blue"
btn3.style.backgroundColor="blue"

btn1.addEventListener("click", function(){
    btn1.style.backgroundColor="orange"
    btn2.style.backgroundColor="blue"
    btn3.style.backgroundColor="blue"

        
})
btn2.addEventListener("click", function(){
    btn1.style.backgroundColor="blue"
    btn2.style.backgroundColor="orange"
    btn3.style.backgroundColor="blue"

        
})
btn3.addEventListener("click", function(){
    btn1.style.backgroundColor="blue"
    btn2.style.backgroundColor="blue"
    btn3.style.backgroundColor="orange"
    
        
})











