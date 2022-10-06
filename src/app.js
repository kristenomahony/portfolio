const hamburgerBtn = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

const thanksPopUp = document.getElementById('thanks')
const sendEmailBtn = document.getElementById('send-email')

function toggleButton() {
    navList.classList.toggle('show')
}

function showThankYou() {
    thanksPopUp.classList.toggle('show-pop-up')
}

hamburgerBtn.addEventListener('click', toggleButton)
sendEmailBtn.addEventListener('click', showThankYou)
