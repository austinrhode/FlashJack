import hardTotals from "./hardTotals.js"
import splits from "./splits.js"
import softTotals from "./softTotals.js"

const hit = document.getElementById("hit")
const stand = document.getElementById("stand")
const split = document.getElementById("split")
const double = document.getElementById("double")

const dealer = document.getElementById("dealer")

const card1 = document.getElementById("player1")
const card2 = document.getElementById("player2")

const feedback = document.getElementById("feedback")

let index = 0;

let hands = [];

hands.push(...hardTotals);
hands.push(...softTotals);
hands.push(...splits);

shuffle(hands);

updateCard(card1, hands[index].card1)
updateCard(card2, hands[index].card2)
updateCard(dealer, hands[index].upCard)

hit.addEventListener("click", (e) =>{
    giveFeedback("hit");    
})

stand.addEventListener("click", (e) => {
    giveFeedback("stand");
})

split.addEventListener("click", (e) => {
    giveFeedback("split");
})

double.addEventListener("click", (e) => {
    giveFeedback("double");
})

function updateCards(){
    index = (index + 1) % hands.length;
    updateCard(card1, hands[index].card1)
    updateCard(card2, hands[index].card2)
    updateCard(dealer, hands[index].upCard)
}

function giveFeedback(action){
    const current = hands[index];
    if(current.should === action){
        feedback.innerText = "Correct";
        updateCards();
    }else{
        feedback.innerText = `Incorrect should have ${current.should}`;
    }
}

function updateCard(card, value){
    card.children[0].src = `assets/${value}.png`;
}

//Fisher Yates Algorithm

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }