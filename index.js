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

window.renderNewScore = renderNewScore

function resetScore(){
    homeScore.textContent = guestScore.textContent = 0
    resetGlow()
}

window.resetScore = resetScore

function resetGlow(){
    homeTitle.classList.remove("glow")
    guestTitle.classList.remove("glow")    
}

window.resetGlow = resetGlow

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

window.highlightLeader = highlightLeader

function plusOneHome(){
    renderNewScore(1, homeScore)
}

window.plusOneHome = plusOneHome

function plusTwoHome(){
    renderNewScore(2, homeScore)    
}

window.plusTwoHome = plusTwoHome

function plusThreeHome(){
    renderNewScore(3, homeScore)    
}
window.plusThreeHome = plusThreeHome

function plusOneGuest(){
    renderNewScore(1, guestScore)    
}

window.plusOneGuest = plusOneGuest

function plusTwoGuest(){
    renderNewScore(2, guestScore)    
}

window.plusTwoGuest = plusTwoGuest

function plusThreeGuest(){
    renderNewScore(3, guestScore)    
}

window.plusThreeGuest = plusThreeGuest