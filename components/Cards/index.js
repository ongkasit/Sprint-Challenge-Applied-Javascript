// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // console.log(response.data)
        response.data.articles['javascript'].forEach(article => {
            let newCard = cardComponent(article.headline, article.authorPhoto, article.authorName)
            articlesContainer.appendChild(newCard)
        })
        response.data.articles['bootstrap'].forEach(article => {
            let newCard = cardComponent(article.headline, article.authorPhoto, article.authorName)
            articlesContainer.appendChild(newCard)
        })
        response.data.articles['technology'].forEach(article => {
            let newCard = cardComponent(article.headline, article.authorPhoto, article.authorName)
            articlesContainer.appendChild(newCard)
        })
        response.data.articles['jquery'].forEach(article => {
            let newCard = cardComponent(article.headline, article.authorPhoto, article.authorName)
            articlesContainer.appendChild(newCard)
        })
        response.data.articles['node'].forEach(article => {
            let newCard = cardComponent(article.headline, article.authorPhoto, article.authorName)
            articlesContainer.appendChild(newCard)
        })
    })
    .catch(error => {
        console.error(error)
    })

let articlesContainer = document.querySelector('.cards-container')

function cardComponent(headline, imgUrl, authorName) {
    const cardDiv = document.createElement('div')
    const headLineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgContainerDiv = document.createElement('div')
    const imgContent = document.createElement('img')
    const authorNameSpan = document.createElement('span')

    cardDiv.classList.add('card')
    headLineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imgContainerDiv.classList.add('img-container')

    cardDiv.appendChild(headLineDiv)
    cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(imgContainerDiv)
    imgContainerDiv.appendChild(imgContent)
    authorDiv.appendChild(authorNameSpan)

    headLineDiv.textContent = headline
    imgContent.src = imgUrl
    authorNameSpan.textContent = `By: ${authorName}`

    return cardDiv

}