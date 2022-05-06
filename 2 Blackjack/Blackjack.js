//let cards=[firstcard,secondcard]
//let sum=firstcard+secondcard
//let hasblackjack=false
//let isalive=true
let player={
	name:"Anirudh",
	chips:145
}

let cards=[]
let sum=0
let message=""

let messageEl=document.getElementById("message-el")
console.log(messageEl)

let sumEl=document.getElementById("sum-el")
console.log(sumEl)

let cardsEl=document.getElementById("cards-el")
console.log(cardsEl)



let playerEl=document.getElementById("player-el")
console.log(playerEl)
playerEl.textContent=player.name+":"+player.chips


function randomcard(){
	let carddrawn=Math.floor(Math.random()*13)+1
	if(carddrawn>10){
		return 10
	}else if(carddrawn==1){
		return 11
	}else{
		return carddrawn
	}
}


function startgame(){
	let firstcard=randomcard()
	let secondcard=randomcard()
	sum=firstcard+secondcard
	cards=[firstcard,secondcard]
	hasblackjack=false
	isalive=true
	rendergame()
}


function rendergame(){
	if (sum<21){
		message="Do you want a new card?"
	} else if(sum==21){
		message="You won Blackjack"
		hasblackjack=true
	} else{
		message="You are out"
		isalive=false
	}
	messageEl.textContent=message
	sumEl.textContent="Sum:"+sum
	cardsEl.textContent="Cards:"
	for (let i=0;i<cards.length;i++){
		cardsEl.textContent+=cards[i]+" "
	}
	//console.log(hasblackjack)
	//console.log(isalive)
	//console.log(message)
}


function newcard(){
	console.log("Drawing a new card from deck.")
	if (isalive==true && hasblackjack==false){
		let newcard=randomcard()
		sum+=7
		cards.push(newcard)
		console.log(cards)
		rendergame()
	}
	
}