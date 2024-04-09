document.addEventListener("DOMContentLoaded", function () {
    // Fetch footer data from JSON file
    fetch('footerData.json')
      .then(response => response.json())
      .then(data => {
        // Update social media links
        const socialMediaLinks = document.querySelector('.footer-container.social-media-links ul');
        socialMediaLinks.innerHTML = ''; // Clear existing social media links
  
        data.socialMedia.forEach(link => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = link.url;
          const img = document.createElement('img');
          img.src = link.iconSrc;
          img.alt = link.alt;
          a.appendChild(img);
          li.appendChild(a);
          socialMediaLinks.appendChild(li);
        });
  
        // Update copyright information and additional links
        const copyright = document.querySelector('.copyright');
        const copyrightText = document.createElement('p');
        copyrightText.textContent = data.copyright;
        const additionalLinks = document.createElement('ul');
        data.additionalLinks.forEach(link => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = link.url;
          a.textContent = link.text;
          li.appendChild(a);
          additionalLinks.appendChild(li);
        });
        copyright.innerHTML = ''; // Clear existing content
        copyright.appendChild(copyrightText);
        copyright.appendChild(additionalLinks);
      })
      .catch(error => {
        console.error('Error fetching footer data:', error);
      });
  });


  
  var backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });