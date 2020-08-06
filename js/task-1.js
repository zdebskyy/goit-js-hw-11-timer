import gallery from './gallery-items.js'

const openModal = document.querySelector('.js-lightbox');
const closeBtn = document.querySelector('.lightbox__button');
const overlay = document.querySelector('.lightbox__content');


overlay.addEventListener('click', onOverlayClose)
closeBtn.addEventListener('click', onModalClose)


const createSetOfPictures = (data) => {
    const itemRef = document.createElement('li')
    itemRef.classList.add('gallery__item')
    const linkRef = document.createElement('a')
    linkRef.classList.add('gallery__link')
    linkRef.setAttribute('href', data.preview)
    const imgRef = document.createElement('img')
    imgRef.classList.add('gallery__image')
    imgRef.setAttribute('src', data.original)
    imgRef.setAttribute('data-source', data.original)
    imgRef.setAttribute('alt', data.description)
    linkRef.appendChild(imgRef)
    itemRef.appendChild(linkRef)
    return itemRef;
}
const data = gallery.map(item => createSetOfPictures(item))

const ulRef = document.querySelector('.js-gallery');
ulRef.append(... data)

ulRef.addEventListener('click', openPicture)


function openPicture(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    onModalOpen(event.target)
}


function onModalOpen(clickedTarget) {
    if (clickedTarget) {
        openModal.classList.add('is-open')
    }
    modalSetup (clickedTarget)
}

function modalSetup (clickedTarget){
    const currentPicture = openModal.querySelector('.lightbox__image');
    const imgAlt = clickedTarget.getAttribute('alt')
    currentPicture.setAttribute('src', clickedTarget.dataset.source)
    currentPicture.setAttribute('alt', imgAlt)
}

function onModalClose(clickedTarget) {
    if (clickedTarget) {
        openModal.classList.remove('is-open')
    }
    modalClear()
}
function modalClear(){
    const clearData = openModal.querySelector('.lightbox__image');
    clearData.setAttribute('src', '')
    clearData.setAttribute('alt', '')
}

function onOverlayClose(event) {

    if (event.target.nodeName !== 'IMG') {
        onModalClose(event)
    }
}





// const clientW = event.target.clientWidth*0.5
// if (event.offsetX > clientW){
//     console.log('nextpage');
// }else{
//     console.log('prevpage');
// }
// }


// const openModal = document.querySelector('.js-lightbox');
// const closeBtn = document.querySelector('.lightbox__button');
// closeBtn.addEventListener('click', onModalClose)


// const createSetOfPictures =  (data) => {
//     const itemRef = document.createElement('li')
//     itemRef.classList.add('gallery__item')
//     const linkRef = document.createElement('a')
//     linkRef.classList.add('gallery__link')
//     linkRef.setAttribute('href', data.preview)
//     const imgRef = document.createElement('img')
//     imgRef.classList.add('gallery__image')
//     imgRef.setAttribute('src', data.original)
//     imgRef.setAttribute('data-source', data.original)
//     imgRef.setAttribute('alt', data.description)
//     linkRef.appendChild(imgRef)
//     itemRef.appendChild(linkRef)
//     return itemRef;
// }
// const data = gallery.map(item => createSetOfPictures(item))

// const ulRef = document.querySelector('.js-gallery');
// ulRef.append(...data)

// ulRef.addEventListener('click', openPicture)


// function openPicture(event){
//     event.preventDefault()
//     const clickedTarget = event.target;
//     if (clickedTarget.nodeName !== 'IMG'){
//         return;
//     }

//     onModalOpen(clickedTarget)

//     console.log(clickedTarget);
//     console.log(clickedTarget.nodeName);
//     console.log(event.currentTarget);
// }


// function onModalOpen (clickedTarget){
//     if(clickedTarget){
//         openModal.classList.add('is-open')
//         const currentPicture = openModal.querySelector('.lightbox__image');
//         const imgAlt = clickedTarget.getAttribute('alt')
//         currentPicture.setAttribute('src', clickedTarget.dataset.source)
//         currentPicture.setAttribute('alt', imgAlt)
//     }
// }

// function onModalClose (clickedTarget){
//     if(clickedTarget){
//         openModal.classList.remove('is-open')
//         const clearUrl = openModal.querySelector('.lightbox__image');
//         clearUrl.setAttribute('src', '')
//         clearUrl.setAttribute('alt', '')
//     }
// }


// =======================================================================================

// const galleryListRef = document.querySelector('.js-gallery');

// const pictures = gallery.reduce((acc, el) => {
// acc+= `<li class="gallery__link"><a class="gallery__link" href="${el.preview}"><img class="gallery__image" src="${el.preview}" data-sourec ="${el.original}" alt="${el.description}"></a></li>  `
//     return acc
// }, '')

// galleryListRef.insertAdjacentHTML('afterbegin', pictures)
