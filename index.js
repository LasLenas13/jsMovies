let message = document.querySelector("#message")

function deleteMovie (event){
    event.target.parentNode.remove()
    message.textContent = (`${event.target.previousSibling.textContent} "Bad Movie"`)
    revealMessage()
}

function crossOffMovie (event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains("checked")) {
        message.textContent = ("Movie Watched" + event.target.textContent)
    } else {message.textContent = "Movie added back!" + event.target.textContent}
    revealMessage()
}

function addMovie (event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
     
    movieTitle.addEventListener("click", crossOffMovie)
    
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    document.querySelector("ul").appendChild(movie)
    inputField.value = "";

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    
}

document.querySelector('form').addEventListener("submit", addMovie)

function revealMessage (){
    message.classList.remove("hide")
    setTimeout( () => {message.classList.add('hide')}, 1000)
}