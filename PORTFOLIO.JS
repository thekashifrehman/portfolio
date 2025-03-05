document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop().toLowerCase();
  
  document.querySelectorAll('.glass-nav a').forEach(link => {
    if (link.getAttribute('href').toLowerCase() === currentPage) {
      link.classList.add('active');
    }
  });
});
// WhatsApp Message Sending Function
function sendMessage() {
  let phoneNumber = "+923166950205"; 
  let whatsappMessage = "Hello, I want to connect with you!";
  let encodedMessage = encodeURIComponent(whatsappMessage);
  
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

// WhatsApp Button Click Event
document.addEventListener("DOMContentLoaded", function() {
  let whatsappBtn = document.getElementById("whatsappLink");

  if (whatsappBtn) {
      whatsappBtn.addEventListener("click", function(event) {
          event.preventDefault();
          window.open(sendMessage(), "_blank");
      });
  }
});

