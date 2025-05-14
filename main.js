const apiKey = "minha_api"

function sendMessage(){
    var message = document.getElementById('message-input')
    if(!message.value){
        message.style.border = '1px solid red'
        return
    }

    message.style.border = 'none'

    var status = document.getElementById('status')

    status.innerHTML = 'Carregando...'
    btnSubmit.disable = true
    btnSubmit.style.cursor = 'not-allowed'
    message.disable = true


}