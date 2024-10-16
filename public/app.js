import hardTotals from "./hardTotals.js"
import splits from "./splits.js"
import softTotals from "./softTotals.js"

const hit = document.getElementById("hit")
const stand = document.getElementById("stand")
const split = document.getElementById("split")
const double = document.getElementById("double")

const dealer1 = document.getElementById("dealer1")

const card1 = document.getElementById("player1")
const card2 = document.getElementById("player2")

const feedback = document.getElementById("feedback")

const cardInners = document.getElementsByClassName("flip-card-inner");

let index = 0;

let hands = [];

hands.push(...hardTotals);
hands.push(...softTotals);
hands.push(...splits);

shuffle(hands);

updateCard(card1, hands[index].card1)
updateCard(card2, hands[index].card2)
updateCard(dealer1, hands[index].upCard)

hit.addEventListener("click", (e) =>{
    giveFeedback("hit");    
})

document.addEventListener("keypress", (e) => {
    switch(e.key.toLowerCase()) {
        case "h":
            giveFeedback("hit");
            break;
        case "d":
            giveFeedback("double");
            break;
        case "s":
            giveFeedback("split");
            break;
        case "j":
            giveFeedback("stand");
            break;
    }
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

    for(let card of cardInners){
        card.children[0].src = `./public/assets/back.png`;
        card.style.transform = "rotateY(180deg)";
    }

    setTimeout(function(){
        for(let card of cardInners){
            card.style.transitionDuration = "1s";
            card.style.transform = "rotateY(0deg)";
        }

        updateCard(card1, hands[index].card1)
        updateCard(card2, hands[index].card2)
        updateCard(dealer1, hands[index].upCard)
    }, 600);




    
}

function giveFeedback(action){
    const current = hands[index];
    if(current.should === action){
        feedback.children[0].innerText = "Correct";
        updateCards();
        feedback.children[1].innerText = `${index + 1}/${hands.length}`
    }else{
        feedback.children[0].innerText = `Incorrect should have ${current.should}`;
    }
}

function updateCard(card, value){
    card.children[0].src = `./public/assets/${value}.png`;
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