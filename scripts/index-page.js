const submitBtn = document.querySelector('.comments__btn')
const userName = document.querySelector('#name')
const comment = document.querySelector('#text')

submitBtn.addEventListener('click', displayComment)

function displayComment(e){
    e.preventDefault()
    const nameClick = userName.value 
    const commentClick = comment.value 
    console.log(nameClick, commentClick)

    clearInput()
}

function clearInput(){
    userName.value = ''
    comment.value = ''
}