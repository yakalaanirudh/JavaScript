/*
//Creating an Obj and using a function to log out the data
let person={
	Name:"Anirudh Yakala",
	Company:"Google",
	Location:"Google Boren Seattle",
	Position:"SDE"
}
function p(){
	console.log(person.Name+" is an "+person.Position+" working for "+person.Company+" at "+person.Location+".")
}

p()
*/



/*If clause
//Discount with age
let age=26
if (age<6){
	console.log("free")
}else if(age<18){
	console.log("child discount")
}else if(age<27){
	console.log("student discount")
}else if(age<67){
	console.log("full price")
}else {
	console.log("senior citizen discount")
}
*/


/*
array
let faang=["Facebook","Apple","Amazon","Netflix","Google"]
console.log("The biggest companies in the world are:")
for(let i=0;i<faang.length;i++){
	console.log("-"+faang[i])
}
*/


/*
array 2
let alphabets=["a","b","c","d","e","f","g","h","i","j"]
alphabets.pop()
alphabets.push("k")
alphabets.shift()
alphabets.unshift("z")
console.log(alphabets)
*/



/*
//Conditionals
let date=13
let weekday="friday"
if (date==13 && weekday=="friday"){
	console.log("Jinx") 	
}
*/

/*
//Rock Paper Scissor
array=["Rock","Paper","Scissor"]
function rps(){
	let hs=Math.floor(Math.random()*3)
console.log(array[hs])
}
console.log(rps())
*/


/*
//sort
let letters=["a","b","a","a","b","a","a""b","b","b",,"a",]
let p=document.getElementById("a-shelf")
let q=document.getElementById("b-shelf")

function sort(){
	for(let i=0;i<letters.length;i++){
		if(letters[i]=="a"){
			p.textcontent+="a"
		}else{
			q.textcontent+="b"
		}
	}
}
console.log(sort())
*/


/*
let player={
	name:"Messi",
	bdr:7,
	gb:6,
	ucl:4,
	int:1
}
console.log(player.bdr)
console.log(player.length) //length is not defined
*/


/*
let player={
	name:"Messi",
	bdr:7,
	gb:6,
	ucl:4,
	int:1,
	sayhello:function(){
		console.log("Howdy Messi")
	}
}
console.log(player.bdr)
console.log(player.sayhello)
console.log(player.length) //length is not defined
*/
