// main.js

// Initialize EmailJS (run once)
(function () {
    emailjs.init("S9FlpPUNmoshtqgjY"); // Public Key
})();

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    // Stop if contact form does not exist on the page
    if (!contactForm) return;

    const nameInput = document.getElementById("name");
    const companyInput = document.getElementById("company");
    const emailInput = document.getElementById("email");
    const mobileInput = document.getElementById("mobile");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const submitBtn = contactForm.querySelector("button[type='submit']");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get trimmed values
        const name = nameInput.value.trim();
        const company = companyInput.value.trim();
        const email = emailInput.value.trim();
        const mobile = mobileInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        // Basic validation
        if (!name || !email || !mobile || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Disable button to prevent multiple submits
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";

        // Send Email via EmailJS
        emailjs
            .send("service_8i6vy19", "template_0wppclq", {
                name,
                company,
                email,
                mobile,
                subject,
                message,
            })
            .then(() => {
                alert("Submitted successfully!");
                contactForm.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Failed to send message. Please try again.");
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = "Submit Message";
            });
    });
});
