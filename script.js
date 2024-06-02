document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');
    const bookingForm = document.getElementById('booking-form');
    const bookingConfirmation = document.getElementById('booking-confirmation');
    const bookingDetails = document.getElementById('booking-details');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            pages.forEach(page => {
                page.classList.add('hidden');
                if (page.id === targetId) {
                    page.classList.remove('hidden');
                }
            });
        });
    });

    document.getElementById('confirm-booking').addEventListener('click', () => {
        const service = document.getElementById('service-select').value;
        const date = document.getElementById('date-select').value;
        const time = document.getElementById('time-select').value;

        if (service && date && time) {
            bookingDetails.textContent = `Service: ${service}, Date: ${date}, Time: ${time}`;
            bookingForm.classList.add('hidden');
            bookingConfirmation.classList.remove('hidden');
        } else {
            alert('Please fill out all fields.');
        }
    });
});
