
  
 
let html = "";
datas.forEach((data) => {
        html += `
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


    })
document.getElementById('card-container-js').innerHTML = html;


let text = document.querySelectorAll('.text-sel');

let card = document.querySelectorAll('.card-js');

let title = document.querySelectorAll('.card-title');

let description = document.querySelectorAll('.card-text');
let image = document.querySelectorAll('.image-hover');
let contentImage = document.querySelectorAll('.img-content');
for(let i = 0; i < card.length; i++){
 card[i].addEventListener('click', () => {
      image[i].style.opacity = 0.2;
      contentImage[i].style.backgroundColor = 'black';
      title[i].style.display = 'none';
      description[i].style.display = 'none';
      text[i].style.display = 'block';
      text[i].classList.add('text-hover');
      
  })
}
