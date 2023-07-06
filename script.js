//getElementByID

// var main_div = document.getElementById("main_div")
// console.log(main_div);
// main_div.style.backgroundColor = "red"

// getElementbyClass

// var para = document.getElementsByClassName("para");
// console.log(para)
// // for(i=0;i<para.length;i++){
// //     para[i].style.backgroundColor = "red";
// // }
// para[0].textContent= "This is my text content"

// var para = document.getElementsByTagName("p")
// console.log(para)
// for(i=0;i<para.length;i++){
//     para[i].style.backgroundColor = "red"
// }

// var list = document.getElementsByTagName("li")
// console.log(list)
// for(i=0;i<list.length;i++){
//     if(i%2==0)
//         list[i].style.backgroundColor="yellow"
// }

// css Selector
// var main_div = document.querySelector("#main_div")
// console.log(main_div)

// var para = document.querySelectorAll(".para")
// // for(i=0;i<para.length;i++){
// //     para[i].style.backgroundColor = "pink"
// // }
// console.log(para)

// var main_div = document.getElementById("main_div");
// console.log(main_div);
// main_div.style.border = "1px solid black"
// main_div.firstChild.textContent="this is my text Node"
// main_div.firstElementChild.style.fontSize = "25px" 
// main_div.children

// 19-05-2023

// var maindiv = document.createElement("div")
// var subdiv  = document.createElement("div")
// maindiv.textContent = "this is my text"
// subdiv.textContent = "this is my sub content"
// maindiv.style.border = " 1px solid red"
// maindiv.style.padding = "30px"
// subdiv.style.border = " 1px solid red"
// subdiv.style.color = " red"
// subdiv.style.padding = "30px"
// document.body.append(maindiv)
// maindiv.appendChild(subdiv)


//important
// var mydiv = document.createElement("div")
// mydiv.textContent = "hiii from Employee data"
// var name = prompt("Enter your name : ")
// var loc = prompt("enter your location :")
// var sub1 = document.createElement("section")
// sub1.textContent = `Name : ${name}`
// var sub2 = document.createElement("section")
// sub2.textContent = `Location : ${loc}`
// mydiv.style.border = "1px solid red"
// mydiv.appendChild(sub1)
// mydiv.appendChild(sub2)
// document.body.append(mydiv)

//getting list of animals
// var main_div = document.createElement("div")
// document.body.append(main_div)
// main_div.textContent = "HII from animals"
// main_div.style.border = "1px solid black"
// var unli = document.createElement("ul")
// main_div.append(unli)
// var list = document.createElement("li") 
// var need = prompt("Enter the elements to add : ")
// for(i=0;i<need;i++){
//     var aname = prompt("Enter animal name : ")
//     aname.textContent = `${aname}`
//     list.appendChild(aname)
// }