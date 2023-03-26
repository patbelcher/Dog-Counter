// JavaScript Document
//document.getElementById("count-el").innerText = 17
//let count = 0

//function increment() {
//	console.log("The button was clicked")
//}

let saveEl = document.getElementById("save-el") 
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
	count += 1
	countEl.innerText = count
	
}



function save() {
	 let myCount = count + "  - " 
	 saveEl.textContent += myCount
	 countEl.textContent = 0
	 count = 0
	 
	  
	
}

