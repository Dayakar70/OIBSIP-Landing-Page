document.getElementById('shopNowButton').addEventListener('click', function() {
    alert('Redirecting to the shop page!');
    // You can redirect to the shop page here, e.g., window.location.href = 'shop.html';
});

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing to our newsletter!');