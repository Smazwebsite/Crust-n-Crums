let cart = []; // multiple selected items store honge yahan

function orderNow(itemName, price) {
  // agar item pehle se cart me nahi hai tab hi add karo
  const exists = cart.find(i => i.name === itemName);
  if (!exists) {
    cart.push({ name: itemName, price: price });
  }

  // form dikhana aur update karna
  const form = document.getElementById("order-form");
  form.classList.remove("hidden");

  updateOrderForm();
}

function updateOrderForm() {
  const list = document.getElementById("selected-item");
  let total = 0;

  list.innerHTML = "";
  cart.forEach(item => {
    total += item.price;
    list.innerHTML += `🍴 ${item.name} - Rs.${item.price}<br>`;
  });

  list.innerHTML += `<br>💰 <b>Total: Rs.${total}</b>`;
}

function sendToWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();

  if (!name || !address || !whatsapp) {
    alert("⚠️ Please fill all fields!");
    return;
  }

  if (cart.length === 0) {
    alert("🛒 Please select at least one item!");
    return;
  }

  let message = `*New Order from Crust & Crums*%0A%0A`;
  cart.forEach(item => {
    message += `🍴 ${item.name} - Rs.${item.price}%0A`;
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  message += `%0A💰 *Total:* Rs.${total}%0A%0A👤 *Name:* ${name}%0A🏠 *Address:* ${address}%0A📱 *WhatsApp:* ${whatsapp}%0A%0A🕒 Please confirm my order.`;

  const phone = "923343610599"; // 👈 apna WhatsApp number yahan likho
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
}
