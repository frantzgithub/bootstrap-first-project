
let html = "";
let b = 1;
for(let i = 0; i < animalData.length; i++){
    html += `
    <p class="text">${b++} - ${animalData[i]}</p>
    `;
}
document.getElementById('link-js').innerHTML = html;