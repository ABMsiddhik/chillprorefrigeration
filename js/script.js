
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
