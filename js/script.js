
function sendWhatsApp() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var message = document.getElementById("message").value;

    var whatsappMessage =
        "*Hello ChillPro Refrigeration*%0A%0A" +
        "*Name:* " + name + "%0A" +
        "*WhatsApp:* " + phone + "%0A" +
        "*Address:* " + address + "%0A%0A" +
        "*Message:* " + message;
    var whatsappURL = "https://wa.me/918508579048?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");
}


// Progress Scroll to Top - Solution 1
class ProgressScrollToTop {
    constructor() {
        this.container = document.querySelector('.scroll-progress-container');
        this.button = document.querySelector('.scroll-progress-btn');
        this.progressCircle = document.querySelector('.progress-ring-circle');
        this.circumference = 2 * Math.PI * 27; // 2πr

        if (!this.container || !this.button) return;

        this.init();
    }

    init() {
        // Set initial progress
        this.progressCircle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
        this.progressCircle.style.strokeDashoffset = this.circumference;

        // Add event listeners
        this.button.addEventListener('click', this.scrollToTop.bind(this));
        window.addEventListener('scroll', this.handleScroll.bind(this));

        // Trigger initial state
        this.handleScroll();
    }

    handleScroll() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;

        // Update progress circle
        const offset = this.circumference - (scrollPercent * this.circumference);
        this.progressCircle.style.strokeDashoffset = offset;

        // Show/hide button
        if (scrollTop > 300) {
            this.container.classList.add('visible');
        } else {
            this.container.classList.remove('visible');
        }
    }

    scrollToTop(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProgressScrollToTop();
});
document.addEventListener('DOMContentLoaded', function () {
    // WhatsApp number - REPLACE WITH YOUR ACTUAL NUMBER
    const whatsappNumber = '918508579048'; // Format: countrycode + number (without + or 0)

    // Get all enquiry buttons
    const enquiryButtons = document.querySelectorAll('.whatsapp-enquiry-btn');

    // Add click event to each button
    enquiryButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Get product name from data attribute
            const productName = this.getAttribute('data-product');

            // Create WhatsApp message
            const whatsappMessage = `*Product Enquiry*%0A%0A` +
                `*Product:* ${productName}%0A` +
                `*Message:* Hi, I'm interested in ${productName}. Please share more details, pricing, and availability.%0A%0A` +
                `_This enquiry was sent from your website_`;

            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

            // Open WhatsApp in new tab
            window.open(whatsappURL, '_blank');

            // Optional: Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

});
