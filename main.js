function toContactUs () {
    window.location.href = 'contact_us.html'
}

function toError () {
    window.location.href = 'error.html'
}

function toHome () {
    window.location.href = 'index.html'
}

const formHome = document.querySelector('#email-insert-form')
const formContac = document.querySelector('#middle-form')

function submitFormHome () {
    let validEmail = document.getElementById('email-input')

    infoSave('email', validEmail.value)

    validEmail.value = ""
}

function submitFormContact () {
    let validName = document.getElementById('input-name')
    let validLastName = document.getElementById('input-last-name')
    let validEmail = document.getElementById('input-email')
    let validMessage = document.getElementById('input-message')

    const user = {
        name: validName.value,
        lastName: validLastName.value,
        email: validEmail.value,
        message: validMessage.value
    }

    infoSave('user', user)

    validName.value = ""
    validLastName.value = ""
    validEmail.value = ""
    validMessage.value = ""
}

formHome.addEventListener('submit', (e) => {
    e.preventDefault()
    submitFormHome()
})

formContac.addEventListener('submit', (e) => {
    e.preventDefault()
    submitFormContact()
})

function infoSave (key, data) {
    sessionStorage.setItem(key, JSON.stringify(data))
}