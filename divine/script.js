// Updated JavaScript Code for Scroll Animations, FAQ Toggle, and Scroll-to-Top Button

document.addEventListener("DOMContentLoaded", function () {
    // Scroll-Based Animations with Debouncing
    const elements = document.querySelectorAll(".hero-section, .features, .courses, .testimonials, .contact-section");
    const handleScroll = () => {
        elements.forEach((element) => {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add("visible");
            }
        });
    };

    let debounceTimer;
    window.addEventListener("scroll", () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(handleScroll, 100);
    });

    // FAQ Section Toggle
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        question.setAttribute("tabindex", "0"); // Make it keyboard accessible

        const toggleAnswer = () => {
            item.classList.toggle("active");
        };

        question.addEventListener("click", toggleAnswer);
        question.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                toggleAnswer();
                e.preventDefault(); // Prevent page scroll on space key
            }
        });
    });


    
    // Scroll-to-Top Button
    const scrollToTopButton = document.getElementById("scroll-to-top");

    const handleScrollButtonVisibility = () => {
        scrollToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

     // Prevent button visibility during downward animations
     let isScrolling = false;
     const throttleScrollHandler = () => {
         if (!isScrolling) {
             window.requestAnimationFrame(() => {
                 handleScrollButtonVisibility();
                 isScrolling = false;
             });
         }
         isScrolling = true;
     };

    // Initial Trigger for Scroll Animations and Button Visibility
    handleScroll();
    handleScrollButtonVisibility();
});













document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".features, .courses, .testimonials, .faq");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
});










// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Scroll event listener
function handleScroll() {
    const elements = document.querySelectorAll('.feature-item, .course-item, .testimonial, .faq-item');
    elements.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('animate');
        }
    });
}

// Attach event listener to the window
window.addEventListener('scroll', handleScroll);

// Trigger animation on load (in case elements are already in view)
handleScroll();