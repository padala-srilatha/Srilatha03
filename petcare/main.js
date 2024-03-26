let btn2=document.getElementById("btn2")
console.log(btn2);

btn2.onmousemove=function(){
    let dogs=document.getElementById("dogs")
    console.log(dogs);
    let btn2=document.getElementById("btn2")
    console.log(btn2);
    dogs.style.display="block";
}
btn2.onmouseleave=function(){
    let dogs=document.getElementById("dogs")
    console.log(dogs);
    let btn2=document.getElementById("btn2")
    console.log(btn2);
    dogs.style.display="none";
}

btn3.onmousemove=function(){
    let sign=document.getElementById("sign-in")
    console.log(sign);
    let btn3=document.getElementById("btn3")
    console.log(btn3);
    sign.style.display="block";
}
btn3.onmouseleave=function(){
    let sign=document.getElementById("sign-in")
    console.log(sign);
    let btn3=document.getElementById("btn3")
    console.log(btn3);
    sign.style.display="none";
}

let btn4=document.getElementById("btn4")
console.log(btn4);
btn4.onclick=function(){
    window.open("https://www.f6s.com/companies/pet-care/india/co")
}
