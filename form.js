const form = document.getElementById('contact-form');
const successMsg = document.getElementById('success-message');
const errorMsg = document.getElementById('error-message');
const messages = document.getElementById('form-messages');

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    messages.classList.remove('hidden');
    if (response.ok) {
      successMsg.classList.remove('hidden');
      errorMsg.classList.add('hidden');
      form.reset();
    } else {
      successMsg.classList.add('hidden');
      errorMsg.classList.remove('hidden');
    }
  } catch (err) {
    messages.classList.remove('hidden');
    successMsg.classList.add('hidden');
    errorMsg.classList.remove('hidden');
  }
});
