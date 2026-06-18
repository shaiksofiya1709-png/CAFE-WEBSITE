// Dark Mode
const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Reservation Form
document
  .getElementById("reservationForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    alert("Table Reserved Successfully!");
});