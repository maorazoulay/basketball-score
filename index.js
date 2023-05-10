let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeButton1 = document.getElementById("home-btn-1")
let homeButton2 = document.getElementById("home-btn-2")
let homeButton3 = document.getElementById("home-btn-3")

let guestButton1 = document.getElementById("guest-btn-1")
let guestButton2 = document.getElementById("guest-btn-2")
let guestButton3 = document.getElementById("guest-btn-3")

let resetButton = document.getElementById("reset-btn") 

let homeTitle = document.getElementById("home-title")
let guestTitle = document.getElementById("guest-title")

function renderNewScore(addToScore, element){
    let currentScore = parseInt(element.textContent)
    element.textContent = currentScore + addToScore
    highlightLeader()
}

function resetScore(){
    homeScore.textContent = guestScore.textContent = 0
    resetGlow()
}

function resetGlow(){
    homeTitle.classList.remove("glow")
    guestTitle.classList.remove("glow")    
}

function highlightLeader(){
    let currentHomeScore = parseInt(homeScore.textContent)    
    let currentGuestScore = parseInt(guestScore.textContent)
    if(currentHomeScore > currentGuestScore){
        guestTitle.classList.remove("glow")
        homeTitle.classList.add("glow")
    } else if (currentHomeScore < currentGuestScore){
        homeTitle.classList.remove("glow")
        guestTitle.classList.add("glow")
    } else {
        resetGlow()
    }
}

function plusOneHome(){
    renderNewScore(1, homeScore)
}

function plusTwoHome(){
    renderNewScore(2, homeScore)    
}

function plusThreeHome(){
    renderNewScore(3, homeScore)    
}

function plusOneGuest(){
    renderNewScore(1, guestScore)    
}

function plusTwoGuest(){
    renderNewScore(2, guestScore)    
}

function plusThreeGuest(){
    renderNewScore(3, guestScore)    
}