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
const formContact = document.querySelector('#middle-form')
const labelErrorHome = document.querySelector('.label-error-home')
const labelErrorContact = document.querySelectorAll('.label-error-contact')

formHome.addEventListener('submit', (e) => {
    e.preventDefault()
    submitFormHome()
})

formContact.addEventListener('submit', (e) => {
    e.preventDefault()
    submitFormContact()
})

function submitFormHome () {
    try{
        let validEmail = validateEmail(document.getElementById('email-input'), labelErrorHome)

        infoSave('email', validEmail.value)

        validEmail.style.border = '0'
        validEmail.value = ""

    }catch(err){
        console.log('Invalid input: '+err)
    }
}

function submitFormContact () {
    try{

        let validName = validateName(document.getElementById('input-name'), labelErrorContact[0])
        let validLastName = validateName(document.getElementById('input-last-name'), labelErrorContact[1])
        let validEmail = validateEmail(document.getElementById('input-email'), labelErrorContact[2])
        let validMessage = validateMessage(document.getElementById('input-message'), labelErrorContact[3])

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

    }catch(err){
        console.log('Invalid input: '+err)
    }
}

function validateName (name, label) {
    const regexName = /\W|_/

    if(regexName.test(name.value)){
        addError(name, label)
    }else{
        delError(name, label)
        return name
    }

}

function validateEmail (email, label) {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i

    if(!regexEmail.test(email.value)){
        addError(email, label)
    }else{
        delError(email, label)
        return email
    }

}

function validateMessage (message, label) {
    if(message.value.length < 10) {
        addError(message, label)
    }else{
        delError(message, label)
        return message
    }
}

function addError (input, label) {
    input.style.border = "1px solid #ff0000"
    label.style.display = "block"
}

function delError (input, label) {
    input.style.border = "1px solid #6e6d6d"
    label.style.display = "none"
}

function infoSave (key, data) {
    sessionStorage.setItem(key, JSON.stringify(data))
}