// Exemplo de JavaScript inicial para desativar os envios de formulário se houver campos inválidos
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Busque todos os formulários aos quais queremos aplicar estilos de validação personalizados do Bootstrap para
      var forms = document.getElementsByClassName('needs-validation')
  
      // Passe por cima deles e impeça o envio
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())
  
const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const closeButton = document.querySelector('.popup-close')
button.addEventListener('click',()=>{
    popup.style.display = 'block'
})
closeButton.addEventListener('click',()=>{
    popup.style.display = 'none'
})
popup.addEventListener('click',()=>{
popup.style.display = 'none'
})