document.getElementById('waSend').addEventListener('click', function () {
  const name = document.getElementById('wa_name').value.trim();
  const msg = document.getElementById('wa_msg').value.trim();
  if (!msg) {
    alert('Please type a message before sending.');
    return;
  }
  const phone = '923313787209';
  const text = encodeURIComponent((name ? ('Name: ' + name + '%0A') : '') + 'Message: ' + msg);
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
});
