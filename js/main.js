let selectedItem = "";

function orderNow(item) {
  selectedItem = item;
  document.getElementById("order-form").classList.remove("hidden");
}

function sendToWhatsApp() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const whatsapp = document.getElementById("whatsapp").value;

  if (!name || !address || !whatsapp) {
    alert("Please fill all fields!");
    return;
  }

  const message = `*New Order from Crust & Crums*\n\nItem: ${selectedItem}\nName: ${name}\nAddress: ${address}\nWhatsApp: ${whatsapp}`;
  const phone = "923XXXXXXXXX"; // 👈 yahan restaurant ka WhatsApp number likho
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
