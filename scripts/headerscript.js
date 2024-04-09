document.addEventListener("DOMContentLoaded", function () {
  // Fetch header data from JSON file
  fetch('headerdata.json')
    .then(response => response.json())
    .then(data => {
      // Update logo
      document.getElementById("logo").src = data.logoSrc;

      // Update menu items
      const menu = document.querySelector('.navbar ul');
      menu.innerHTML = ''; // Clear existing menu items

      data.menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.text;

        if (item.dropdownItems) {
          li.classList.add('dropdown');
          const dropdownMenu = document.createElement('div');
          dropdownMenu.classList.add('dropdown-menu');

          item.dropdownItems.forEach(dropItem => {
            const dropdownLink = document.createElement('a');
            dropdownLink.href = dropItem.url;
            dropdownLink.textContent = dropItem.text;
            dropdownMenu.appendChild(dropdownLink);
          });

          li.appendChild(a);
          li.appendChild(dropdownMenu);
        } else {
          li.appendChild(a);
        }

        menu.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error fetching header data:', error);
    });

  const mobileMenuButton = document.getElementById('mobile-menu');
  const navbar = document.querySelector('.navbar');
  const servicesLink = document.querySelector('.navbar .dropdown > a'); // Fix applied here
  const dropdownMenu = document.querySelector('.dropdown-menu');

  mobileMenuButton.addEventListener('click', function () {
    navbar.classList.toggle('show');
  });

  servicesLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (window.innerWidth <= 600) {
      dropdownMenu.classList.toggle('show');
    }
    event.stopPropagation();
  });

  document.addEventListener('click', function () {
    dropdownMenu.classList.remove('show');
  });

  // Prevent closing dropdown when clicking inside it
  dropdownMenu.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});
