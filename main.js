function toContactUs () {
    window.location.href = 'contact_us.html'
}

function toError () {
    window.location.href = 'error.html'
}

function toHome () {
    window.location.href = 'index.html'
}

function toForm () {
    window.location.href = 'form.html'
}

const formHome = document.querySelector('#email-insert-form')
const formContact = document.querySelector('#middle-form')
const formInputs = document.querySelectorAll('.input')
const labelErrorHome = document.querySelector('.label-error-home')
const labelErrorContact = document.querySelectorAll('.label-error-contact')
const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
const button = document.getElementById('form-button')

formHome.addEventListener('submit', (e) => {
    e.preventDefault()
    try{
        let validEmail = validateEmailSection()

        infoSave('email', validEmail.value)

        validEmail.style.border = '0'
        validEmail.value = ""

    }catch(err){
        console.log('Invalid input: '+err)
    }
})

formContact.addEventListener('submit', (e) => {
    e.preventDefault()

    try{

        const user = {
            name: formInputs[0].value,
            lastName: formInputs[1].value,
            email: formInputs[2].value, 
            message: formInputs[3].value
        }

        infoSave('user', user)

        formInputs[0].value = ""
        formInputs[1].value = ""
        formInputs[2].value = ""
        formInputs[3].value = ""
        button.disabled = true

        toForm()

    }catch(err){
        console.log('Incomplete form')
    }
})

function validateName () {
    if(!regexName.test(formInputs[0].value) || formInputs[0].value.length == 0){
        addError(formInputs[0], labelErrorContact[0])
    }else{
        delError(formInputs[0], labelErrorContact[0])
        return formInputs[0]
    }
}

function validateLastName () {
    if(!regexName.test(formInputs[1].value) || formInputs[1].value.length == 0){
        addError(formInputs[1], labelErrorContact[1])
    }else{
        delError(formInputs[1], labelErrorContact[1])
        return formInputs[1]
    }
}

function validateEmailForm () {
    if(!regexEmail.test(formInputs[2].value)){
        addError(formInputs[2], labelErrorContact[2])
    }else{
        delError(formInputs[2], labelErrorContact[2])
        return formInputs[2]
    }
}

function validateEmailSection () {
    let input = document.getElementById('email-box')
    let email = document.getElementById('email-input')

    if(!regexEmail.test(email.value)){
        addError(input, labelErrorHome)
    }else{
        delError(input, labelErrorHome)
        return email
    }
}

function validateMessage () {
    if(formInputs[3].value.length < 10) {
        addError(formInputs[3], labelErrorContact[3])
    }else{
        delError(formInputs[3], labelErrorContact[3])
        return formInputs[3]
    }
}

function validateInputs () {
    let validName = validateName()
    let validLastName = validateLastName()
    let validEmail = validateEmailForm()
    let validMessage = validateMessage()

    try {
        if(validName.value && validLastName.value && validEmail.value && validMessage.value){
            button.disabled = false
        }
    }catch(err){
        console.log("Button disabled")
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
    localStorage.setItem(key, JSON.stringify(data))
}