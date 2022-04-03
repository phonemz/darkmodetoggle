const toggle = document.querySelector('.toggle')
const body = document.body
const ball = document.querySelector('.ball')

toggle.addEventListener('click', () => {
    body.classList.toggle('dark')
    ball.classList.toggle('move')
    toggle.classList.toggle('change')
})