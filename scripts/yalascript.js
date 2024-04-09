document.addEventListener("DOMContentLoaded", function() {
    fetch("yaladata.json")
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById("content");
            data.sections.forEach(section => {
                const sectionElement = document.createElement("section");
                sectionElement.setAttribute("class", section.id);

                if (section.title) {
                    const titleElement = document.createElement("h2");
                    titleElement.textContent = section.title;
                    sectionElement.appendChild(titleElement);
                }

                if (section.subtitle) {
                    const subtitleElement = document.createElement("h3");
                    subtitleElement.textContent = section.subtitle;
                    sectionElement.appendChild(subtitleElement);
                }

                if (section.content) {
                    const contentParagraph = document.createElement("p");
                    contentParagraph.textContent = section.content;
                    sectionElement.appendChild(contentParagraph);
                }

                if (section.image) {
                    const imageElement = document.createElement("img");
                    imageElement.setAttribute("src", section.image);
                    imageElement.setAttribute("alt", section.title || "");
                    imageElement.setAttribute("class", "yalaimg");
                    sectionElement.appendChild(imageElement);
                }

                if (section.images && section.images.length > 0) {
                    const galleryDiv = document.createElement("div");
                    galleryDiv.setAttribute("class", "row");
                    section.images.forEach(imageSrc => {
                        const imageElement = document.createElement("img");
                        imageElement.setAttribute("src", imageSrc);
                        galleryDiv.appendChild(imageElement);
                    });
                    sectionElement.appendChild(galleryDiv);
                }

                contentDiv.appendChild(sectionElement);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});

// Load JSON data
// Load JSON data
fetch('yaladata.json')
.then(response => response.json())
.then(data => {
    // Get the gallery section
    const gallerySection = document.getElementById('gallery-section');

    // Create the gallery container
    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('gallery-container');

    // Loop through the sections to find the "galID" section
    data.sections.forEach(section => {
        if (section.id === 'galID') {
            // Iterate over the images and create gallery items
            section.images.forEach(image => {
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('gallery-item');

                const img = document.createElement('img');
                img.src = image;
                galleryItem.appendChild(img);

                galleryContainer.appendChild(galleryItem);
            });
        }
    });

    // Append the gallery to the gallery section
    gallerySection.appendChild(galleryContainer);
})
.catch(error => console.error('Error loading data:', error));
