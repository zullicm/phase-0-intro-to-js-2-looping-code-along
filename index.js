function writeCards(names, event){
    let cardMessage = []
    for (let i = 0; i < names.length; i++){
        cardMessage[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    }
    return cardMessage
}

function countDown(){
    let num = 10
    while (num >= 0){
        console.log(num--)
    }
}