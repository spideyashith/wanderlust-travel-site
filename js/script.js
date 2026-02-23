// Navbar scroll effect
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((section) => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// Testimonials Slider
const testimonials = document.querySelectorAll(".testimonial");
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((t) => t.classList.remove("active"));
    testimonials[index].classList.add("active");
}

function nextTestimonial() {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }
    showTestimonial(currentIndex);
}

setInterval(nextTestimonial, 2500);

// Newsletter Validation
const emailInput = document.getElementById("emailInput");
const subscribeBtn = document.getElementById("subscribeBtn");
const message = document.getElementById("message");

subscribeBtn.addEventListener("click", function () {
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        message.style.color = "red";
        message.textContent = "Please enter your email.";
    } 
    else if (!emailValue.includes("@") || !emailValue.includes(".")) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
    } 
    else {
        message.style.color = "green";
        message.textContent = "Subscribed successfully!";
        emailInput.value = "";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".cursor");

    if (!cursor) return; // prevents crash

    document.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
});

// Animated Counter
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});