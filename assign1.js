// console.log("hi");
var btn = document.getElementById("btn")

btn.addEventListener("click",function add(){
    console.log("From Addition")
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    let sum = Number(a) + Number(b);
    let val = document.getElementById("res");
    val.textContent = `The Addition is ${sum}`
    document.getElementById("maindiv").innerHTML = document.getElementById("resDiv").innerHTML
})
var btn1 = document.getElementById("btn1")

btn1.addEventListener("click",function sub(){
    console.log("From Subtraction")
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
   
    let sum = Number(a) - Number(b);
    console.log(sum);
    let val = document.getElementById("res");
    val.textContent = `The subtraction is ${sum}`
    document.getElementById("maindiv").innerHTML = document.getElementById("resDiv").innerHTML
})
var btn2 = document.getElementById("btn2")

btn2.addEventListener("click",function mul(){
    console.log("From Multiplication")
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
   
    let sum = Number(a) * Number(b);
    console.log(sum);
    let val = document.getElementById("res");
    val.textContent = `The Multiplication is ${sum}`
    document.getElementById("maindiv").innerHTML = document.getElementById("resDiv").innerHTML
})
var btn3 = document.getElementById("btn3")

btn3.addEventListener("click",function div(){
    console.log("From Division")
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    let sum = Number(a) / Number(b);
    console.log(sum);
    let val = document.getElementById("res");
    val.textContent = `The division is ${sum}`
    document.getElementById("maindiv").innerHTML = document.getElementById("resDiv").innerHTML
})
function back(){
    document.getElementById("mainDiv").display = "block";    
}