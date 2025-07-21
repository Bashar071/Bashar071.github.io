const scriptURL = 'https://script.google.com/macros/s/AKfycbyfyyMPn5aVq7jYkx5U4kmOkVMWBWldkO2U8K4rH2Hfpb0RKnfZ88szhgcFGiPwQtY6/exec';
const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => alert("Data submitted successfully"))
  .catch(error => alert("Error submitting data"));
});

function myFunction() {
  alert("Sorry the link is not available right now ): It will be available soon!");
}