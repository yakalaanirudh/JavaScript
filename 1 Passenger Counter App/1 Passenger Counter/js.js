//document.getElementById("count-el").innerText=7


let countEl=document.getElementById("count-el")
console.log(countEl)

let count=0
function increment(){
	count=count+1
	countEl.textContent=count
}

let saveEl=document.getElementById("save-el")

function save(){
	let countStr=count+" - "
	saveEl.textContent +=countStr
	countEl.textContent=0
	count=0
}