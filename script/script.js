const projectsLink = document.querySelector('.call-to-action');
const projectLink2 = document.querySelector('.about');
const projectLink3 = document.querySelector('.service-nav');
const projectLink4 = document.querySelector('.contact-us-link')

projectsLink.addEventListener('click', function (e) {
    e.preventDefault();

    const projectsSection = document.getElementById('projects');

    // Scroll to the projects section with smooth behavior
    projectsSection.scrollIntoView({
        behavior: 'smooth'
    });
});

projectLink2.addEventListener('click',function(e) {
    e.preventDefault();

    const projectsSection2 = document.getElementById('about-us');

    projectsSection2.scrollIntoView({
        behavior: 'smooth'
    })
});

projectLink3.addEventListener('click',function(e) {
    e.preventDefault();

    const projectsSection3 = document.getElementById('services-nav');

    projectsSection3.scrollIntoView({
        behavior: 'smooth'
    })
});

projectLink4.addEventListener('click',function(e) {
    e.preventDefault();

    const projectsSection3 = document.getElementById('contact-us');

    projectsSection3.scrollIntoView({
        behavior: 'smooth'
    })
});




document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class "scroll-img"
    var scrollImages = document.querySelectorAll('.scroll-img');

    // Add a scroll event listener to the window
    window.addEventListener('scroll', function () {
        // Loop through each scroll image
        scrollImages.forEach(function (scrollImage) {
            // Check if the image is in the viewport
            if (isElementInViewport(scrollImage)) {
                // Add a class to make the image visible
                scrollImage.classList.add('visible');
            }
        });
    });

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});


document.getElementById("date").innerText = new Date().getFullYear();

