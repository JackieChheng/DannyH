document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section'); // Select all <section> elements
    const navLinks = document.querySelectorAll('.navbar a'); // Select all navigation links

    // Function to check which section is currently in view
    function checkSectionInView() {
        let scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // If the current scroll position is within the section
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active'); // Remove 'active' class from all navigation links
                });
                navLinks[index].classList.add('active'); // Add 'active' class to the corresponding navigation link
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', checkSectionInView);
});
