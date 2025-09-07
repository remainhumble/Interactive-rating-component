const submitButton = document.getElementById("submit");
const ratingOptions = document.querySelectorAll(".rating-option");

let selectedRating = null;

ratingOptions.forEach((option) => {
  option.addEventListener("click", () => {
    selectedRating = option.dataset.value;
    ratingOptions.forEach((o) => o.classList.remove("selected"));
    option.classList.add("selected");
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating) {
    window.location.href = `thankyou.html?rating=${selectedRating}`;
  } else {
    alert("Please select a rating before submitting.");
  }
});
