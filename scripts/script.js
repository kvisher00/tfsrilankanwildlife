// Load JSON data
fetch('indexdata.json')
    .then(response => response.json())
    .then(data => {
        // Get the greeting section
        const greetingSection = document.getElementById('greeting-section');

        // Loop through the greetings data and create HTML elements dynamically
        data.greetings.forEach(item => {
            const greeting = document.createElement('h1');
            greeting.textContent = item.message;
            greetingSection.appendChild(greeting);
        });
    })
    .catch(error => console.error('Error loading data:', error));
        


let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
  }

  document.addEventListener("DOMContentLoaded", function() {
    fetch("content.json")
    .then(response => response.json())
    .then(data => {
        const contentContainer = document.getElementById("content");

        data.sections.forEach(section => {
            switch(section.type) {
                case "title":
                    const titleContainer = document.createElement("div");
                    titleContainer.classList.add("title-container");
                    const title = document.createElement("h1");
                    title.classList.add("stylish-title");
                    title.textContent = section.content;
                    titleContainer.appendChild(title);
                    contentContainer.appendChild(titleContainer);
                    break;
                case "paragraph":
                    const paragraph = document.createElement("p");
                    paragraph.textContent = section.content;
                    contentContainer.appendChild(paragraph);
                    break;
                case "top-section":
                case "bottom-section":
                    const sectionDiv = document.createElement("div");
                    sectionDiv.classList.add(section.type);
                    if (section.title) {
                        const sectionTitle = document.createElement("h2");
                        sectionTitle.textContent = section.title;
                        sectionDiv.appendChild(sectionTitle);
                    }
                    if (section.paragraph) {
                        const sectionParagraph = document.createElement("p");
                        sectionParagraph.textContent = section.paragraph;
                        sectionDiv.appendChild(sectionParagraph);
                    }
                    if (section.image) {
                        const sectionImage = document.createElement("img");
                        sectionImage.src = section.image;
                        sectionDiv.appendChild(sectionImage);
                    }
                    if (section.items) {
                        const sectionList = document.createElement("ol");
                        section.items.forEach(item => {
                            const listItem = document.createElement("li");
                            listItem.textContent = item;
                            sectionList.appendChild(listItem);
                        });
                        sectionDiv.appendChild(sectionList);
                    }
                    contentContainer.appendChild(sectionDiv);
                    break;
                case "card":
                    const cardDiv = document.createElement("div");
                    cardDiv.classList.add("card");
                    const cardImage = document.createElement("img");
                    cardImage.src = section.image;
                    cardImage.alt = section.alt;
                    cardDiv.appendChild(cardImage);
                    const cardParagraph = document.createElement("p");
                    cardParagraph.textContent = section.content;
                    cardDiv.appendChild(cardParagraph);
                    contentContainer.appendChild(cardDiv);
                    break;
                default:
                    console.error("Unknown section type:", section.type);
            }
        });
    })
    .catch(error => console.log("Error fetching data:", error));
});












// Load JSON data
fetch('indexdata.json')
    .then(response => response.json())
    .then(data => {
        // Get the card content section
        const cardContentSection = document.getElementById('card-content-section');

        // Create HTML elements dynamically using JSON data
        const title = document.createElement('h2');
        title.textContent = data.cardContent.title;
        cardContentSection.appendChild(title);

        const intro = document.createElement('p');
        intro.textContent = data.cardContent.intro;
        cardContentSection.appendChild(intro);

        const bulletList = document.createElement('ul');
        bulletList.className = 'bucket-c';
        data.cardContent.bullets.forEach(bullet => {
            const listItem = document.createElement('li');
            listItem.textContent = bullet;
            bulletList.appendChild(listItem);
        });
        cardContentSection.appendChild(bulletList);

        const conclusion = document.createElement('p');
        conclusion.textContent = data.cardContent.conclusion;
        cardContentSection.appendChild(conclusion);
    })
    .catch(error => console.error('Error loading data:', error));









  // Load JSON data
fetch('indexdata.json')
.then(response => response.json())
.then(data => {
    // Get the about section heading
    const aboutHeading = document.getElementById('about-heading');
    aboutHeading.textContent = data.about.heading;

    // Get the about content row
    const aboutContentRow = document.getElementById('about-content-row');

    // Loop through the content data and create HTML elements dynamically
    data.about.content.forEach(item => {
        const aboutItem = document.createElement('div');
        aboutItem.classList.add('col-sm-6');

        const aboutTxt = document.createElement('div');
        aboutTxt.classList.add('single-about-txt');

        const title = document.createElement('h3');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        aboutTxt.appendChild(title);
        aboutTxt.appendChild(description);
        aboutItem.appendChild(aboutTxt);
        aboutContentRow.appendChild(aboutItem);
    });
})
.catch(error => console.error('Error loading data:', error));

// Function to handle logout
function logout() {
    // Perform logout actions here, such as clearing session or local storage, redirecting to a logout page, etc.
    // For demonstration purposes, let's just alert that the user has been logged out.
    alert('You have been logged out.');
    // Redirect to login page after logout
    window.location.href = 'index.html';
  }
  
  // Add event listener to the logout button
  document.getElementById('logoutButton').addEventListener('click', logout);
  