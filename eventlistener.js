// function fun(){
//     alert("this is form js code")
// }

// function func(){
//     var name = prompt("Enter you name")
//     var loc = prompt("Enter your location")
//     var maindiv = document.createElement("div")
//     document.body.append(maindiv)
//     var sub1 = document.createElement("section")
//     var sub2 = document.createElement("section")
//     sub1.textContent = `Name = ${name}`
//     sub2.textContent = `Location = ${loc}`
//     maindiv.appendChild(sub1)
//     maindiv.appendChild(sub2)
// }

// function func(){
//     var name = prompt("Enter you name")
//     var loc = prompt("Enter your location")
//     var maindiv = document.createElement("div")
//     document.body.append(maindiv)
//     var sub1 = document.createElement("section")
//     var sub2 = document.createElement("section")
//     sub1.textContent = `Name = ${name}`
//     sub2.textContent = `Location = ${loc}`
//     maindiv.appendChild(sub1)
//     maindiv.appendChild(sub2)
// }

// function disp(){
//     var name = prompt("Enter you name :")

//     var cname= document.getElementById("main_div")
//     cname.textContent = `Good morning ${name} Have a nice Day....`
// }

// function disp(){
//     var count = Number(prompt("Enter The Number of animals to add"))
//     var arr = new Array(count)
//     var ul = document.createElement("ul")
//     document.body.append(ul)
//     for(i = 0;i<count;i++){
//         arr[i] = prompt("Enter animal :"+(i+1))
//         if(arr[i] != "" && isNaN(arr[i])){
//             var li = document.createElement("li")
//             li.textContent = arr[i]
//             ul.appendChild(li) 
//         }else{
//             i--
//         }
//     } 
// }

var btn = document.getElementById("btn")

btn.addEventListener("click",function (){
    var input1 = document.getElementById("num1").value;
    var input2 = document.getElementById("num2").value;
    let sum = Number(input1) + Number(input2)
    let div = document.getElementById("res")
    div.textContent = `The result is ${sum}`
})
