// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

let headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header())



function Header() {
    const headerDiv = document.createElement('div')
    headerDiv.classList.add = ('header')

    const dateSpan = document.createElement('span')
    dateSpan.classList.add = ('date')
    dateSpan.textContent = 'MARCH 28, 2019'

    const headerTitle = document.createElement('h1')
    headerTitle.textContent = 'Lambda Times'

    const tempSpan = document.createElement('span')
    tempSpan.textContent = '98°'

    headerDiv.appendChild(dateSpan)
    headerDiv.appendChild(headerTitle)
    headerDiv.appendChild(tempSpan)

    return headerDiv
}