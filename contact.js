
const contactForm = document.getElementById("contactForm");
const response = document.getElementById("response");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        response.textContent = "Please fill in all fields.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        response.textContent = "Please enter a valid email address.";
        return;
    }

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    response.textContent = "Opening your email application...";

    window.location.href =
        "mailto:waibhavroth@gmail.com?subject=" +
        mailSubject + "&body=" + mailBody;
});
