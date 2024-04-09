document.addEventListener("DOMContentLoaded", function() {
    // Load wildlife data from JSON file
    fetch('dashb.json')
      .then(response => response.json())
      .then(data => {
        // Create HTML elements for each wildlife entry
        const contentDiv = document.getElementById('content');
        data.forEach(wildlife => {
          const card = document.createElement('div');
          card.classList.add('card');
          const image = document.createElement('img');
          image.src = wildlife.image;
          const name = document.createElement('h2');
          name.textContent = wildlife.name;
          const description = document.createElement('p');
          description.textContent = wildlife.description;
          card.appendChild(image);
          card.appendChild(name);
          card.appendChild(description);
          contentDiv.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching wildlife data:', error));
  });

  document.addEventListener('DOMContentLoaded', function () {
    const ctxBar = document.getElementById('barChart').getContext('2d');
    const ctxPie = document.getElementById('pieChart').getContext('2d');

    // Sample data
    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'population',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56]
        }]
    };

    const pieChartData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            backgroundColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'purple'
            ],
            data: [12, 19, 3, 5, 2]
        }]
    };

    // Create bar chart
    const barChart = new Chart(ctxBar, {
        type: 'bar',
        data: barChartData,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // Create pie chart
    const pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: pieChartData
    });
});

  
  // Function to view subscribers
function viewSubscribers() {
  var subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
  if (subscriptions.length > 0) {
    var subscriberString = subscriptions.join(',');
    window.location.href = 'subscribers.html?subscribers=' + encodeURIComponent(subscriberString);
  } else {
    alert('No subscriptions yet.');
  }
}

// Add event listener to the button
document.getElementById('viewSubscribersBtn').addEventListener('click', viewSubscribers);

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
