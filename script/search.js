

const buttonSearch = document.getElementById('searchButton');

const divCard = document.getElementById('card-container-js');

let displaySearch = "";

buttonSearch.addEventListener('click', (e) => {
    
    const inputSearch = document.getElementById('searchInput');
    
    const searchValue = inputSearch.value;
    console.log(searchValue)
    datas.filter((data) => {
        let result = data.name.toLowerCase() === searchValue.toLowerCase();
        if(result){
           return displaySearch = `
             <div class="card card-js" style="width: 18rem;">
        <div class="img-content">
  <img src="./img/${data.image}.jpg" class="card-img-top image-hover" alt=${data.name}>
  </div>
  <div class="card-body header">
    <h5 class="card-title text-white">${data.name}</h5>
    <p class="card-text text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="text-sel">${data.name}</p>
    <a class="link-to-page" href="./pages/${data.name.toLowerCase()}.html">
    <button type="button" class="btn btn-dark bouton">${data.name}</button>
    </a>
  </div>
  </div>`;

        }
    })
    divCard.innerHTML = displaySearch;
})
