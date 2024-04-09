

document.addEventListener('DOMContentLoaded', function () {
    fetch('animalsdata.json')
      .then(response => response.json())
      .then(data => {
        const animalList = document.getElementById('animalList');
        data.animals.forEach(animal => {
          const listItem = document.createElement('li');
          listItem.textContent = animal.name;
          animalList.appendChild(listItem);
        });


        const animalContainer = document.getElementById('animalContainer');
        data.animals.forEach(animal => {
          const galleryItem = document.createElement('div');
          galleryItem.classList.add('gallery');
          galleryItem.innerHTML = `
            <a target="_blank" href="${animal.image}">
              <img src="${animal.image}" alt="${animal.alt}" width="600" height="400">
            </a>
            <div class="desc">${animal.name}</div>
            <div class="carddis">${animal.description}</div>
          `;
          animalContainer.appendChild(galleryItem);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  