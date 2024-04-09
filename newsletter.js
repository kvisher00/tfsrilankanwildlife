const saveSubscription = email => {
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions.push(email);
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  };

  document.addEventListener('submit', event => {
    if (event.target.id === 'newsletterForm') {
      event.preventDefault();
      const email = event.target.querySelector('#emailInput').value.trim();
      if (email) {
        saveSubscription(email);
        event.target.reset();
        alert('Thank you for subscribing!');
      }
    }
  });
