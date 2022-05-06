/*function savelead() {
	console.log("Button clicked!")
}*/

let myleads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById('input-btn')
const ulEl=document.getElementById("ul-el")

console.log(ulEl)


inputBtn.addEventListener("click",function() {
	myleads.push(inputEl.value)
	inputEl.value=""
	renderleads()
})

function renderleads() {
	let listItems=""
	for (let i=0;i<myleads.length;i++) {
	/*console.log(myleads[i])*/
		listItems +=`
			<li>
				<a target='_blank' href='${myleads[i]}'>
					${myleads[i]}
				</a>
			</li>
		`
	}
	ulEl.innerHTML=listItems
}
