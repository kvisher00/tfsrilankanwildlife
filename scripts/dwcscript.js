document.addEventListener("DOMContentLoaded", function() {
  fetch("1data.json")
    .then(response => response.json())
    .then(data => {
      const imageGallery = document.getElementById("imageGallery");
      data.forEach(image => {
        const column = document.createElement("div");
        column.classList.add("column");
        column.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        imageGallery.appendChild(column);
      });
    })
    .catch(error => console.error("Error fetching data:", error));
});




document.addEventListener("DOMContentLoaded", function() {
  fetch("dwcdata.json")
    .then(response => response.json())
    .then(data => {
      const gallery = document.getElementById("gallery");

      data.forEach(item => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("galleryItem");
        galleryItem.id = `galleryID${item.id}`;

        const link = document.createElement("a");
        link.target = "_blank";
        link.href = item.link;

        const img = document.createElement("img");
        img.src = item.imageSrc;
        img.alt = item.altText;

        const description = document.createElement("p");
        description.textContent = item.description;

        link.appendChild(img);
        galleryItem.appendChild(link);
        galleryItem.appendChild(description);

        gallery.appendChild(galleryItem);
      });
    })
    .catch(error => console.error("Error fetching data:", error));
});
