const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// login page
let login=document.getElementById("login");

login.addEventListener("click", function(){
    let loginPage=document.querySelector(".loginPage").style.display="block";
})

let loged=document.getElementById("loged")
loged.addEventListener("click", function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");

    if(email.value==""||pass.value==""){
        alert("Please Enter Email Password")
    }
    else{
        alert("You Loged In")
        document.querySelector(".loginPage").style.display="none";
    }
})
