document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("eventName").value;
  const date = document.getElementById("eventDate").value;
  const location = document.getElementById("eventLocation").value;

  const message = `Event Created: ${name} on ${date} at ${location}`;
  const output = document.getElementById("formMessage");

  output.textContent = message;
  output.classList.remove("hidden");
});
