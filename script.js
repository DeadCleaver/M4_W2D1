/*     Your API key: 8rEjv6j6Oycl4gYdxemxWJghEieidkM7ZbDluXvZ0xBHpR3e5v47WLrK */
/* https://api.pexels.com/v1/search?query=INSERISCIQUERY */

/* prova per capire il fetch e come sono strutturati i dati che ricevo */
/* fetch(`https://api.pexels.com/v1/search?query=gatti`, { 
    headers: { Authorization: `8rEjv6j6Oycl4gYdxemxWJghEieidkM7ZbDluXvZ0xBHpR3e5v47WLrK`}
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log("Error detected: ", err));  */


/* function createImgCard(pic) {

    // il div contenitore della card
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("mx-1");


    // l'immagine della card
    let cardImg = document.createElement('img');
    cardImg.classList.add("card-img-top");
    cardImg.classList.add("w-100");
    cardImg.src = pic.src.original;
    cardImg.alt = pic.alt;

    // il corpo della card
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let cardText = document.createElement(`div`);
    cardText.classList.add('card-text');
    cardText.innerText = pic.alt;

    // Append elements to the card
    card.appendChild(cardImg);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);

    return card;
}; */

/* galleria base di gatti */
/* 
fetch(`https://api.pexels.com/v1/search?query=gatto`, {
    headers: { Authorization: `8rEjv6j6Oycl4gYdxemxWJghEieidkM7ZbDluXvZ0xBHpR3e5v47WLrK` }
})
    .then((response) => response.json())
    .then((json) => {
        let cardsWrapperWrapper = document.getElementById(`pics-gallery`);

        json.photos.forEach(pic => {
            let picCard = createImgCard(pic);
            cardsWrapperWrapper.appendChild(picCard);
        })
    })
    .catch((err) => console.log("Error detected: ", err)); */

function createFigure(pic) {

    let figure = document.createElement(`figure`);
    figure.classList.add("figure");

    let figureImg = document.createElement(`img`);
    figureImg.classList.add(`figure-img`, `img-fluid`, `rounded`);
    figureImg.src = pic.src.original;
    figureImg.alt = pic.alt;

    let figureCaption = document.createElement(`figcaption`);
    figureCaption.classList.add(`figure-caption`);
    figureCaption.innerText = pic.alt;

    figure.appendChild(figureImg);
    figure.appendChild(figureCaption);

    return figure;
};

    
/* funzione di search */
function search() {
    let searchInput = document.getElementById("search-input");
    console.log(searchInput);
    let searchQuery = searchInput.value.toLowerCase().trim();
    console.log(searchQuery);

    fetch(`https://api.pexels.com/v1/search?query=${searchQuery}`, {
        headers: { Authorization: `8rEjv6j6Oycl4gYdxemxWJghEieidkM7ZbDluXvZ0xBHpR3e5v47WLrK` }
    })
        .then((response) => response.json())
        .then((json) => {
            let cardsWrapperWrapper = document.getElementById("pics-gallery");
    
            json.photos.forEach(pic => {
                let picCard = createFigure(pic);
                cardsWrapperWrapper.appendChild(picCard);
            })

        })
        .catch((err) => console.log("Error detected: ", err));

};

document.addEventListener("DOMContentLoaded", () => {

        let searchButton = document.getElementById("search-button");
        console.log(searchButton);
        searchButton.addEventListener("click", search);
    
});

