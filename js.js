
var typed = new Typed('#element', {
    strings: ["Web Designer","AIML Engineer","Data Analyst"],
    typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
  });

  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const status = document.getElementById('status');

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);

        status.textContent = 'Submitting...';

        await new Promise(resolve => setTimeout(resolve, 1000));

        displaySubmittedDetails(formData);

        contactForm.reset();

        status.textContent = 'Your details have been submitted successfully.';
    });

    function displaySubmittedDetails(formData) {
        const details = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        const detailsString = `Name: ${details.name}\nEmail: ${details.email}\nMessage: ${details.message}`;

        alert(detailsString);
    }
});
