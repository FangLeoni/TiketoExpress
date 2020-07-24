const form = document.querySelector('.form_register')
const Name = document.querySelector('.name_register')
const Email = document.querySelector('.mail_register')
const Password = document.querySelector('.pswd_register')
const PasswordConf = document.querySelector('.pswdConf_register')
const Cpf = document.querySelector('.cpf_register')

PasswordConf.addEventListener("blur", (e) => {
    if(Password.value != PasswordConf.value){
        
    }
})