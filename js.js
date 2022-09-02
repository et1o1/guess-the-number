const answer = Math.floor(Math.random() * 10 + 1)
let guesses = 0
document.getElementById("button").onclick = function(){
    let guess = document.getElementById("ip").value
    guesses +=1
    if(guess == answer){
    alert(`${answer} is the right num, it took you ${guesses} guesses`)
    }
    else if(guess < answer){
        alert("too small lol")
    }
    else if(guess > answer){
        alert("too big hehe")
    }
}