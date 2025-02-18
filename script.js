// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Simulate PDF download (mock functionality)
document.getElementById('downloadBtn').addEventListener('click', function () {
    // You can later implement real PDF generation using libraries like jsPDF
    alert('Your resume is ready for download! (This is a mockup.)');
});
