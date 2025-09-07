document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const rating = params.get("rating");
  document.getElementById("rate").textContent = rating;
});
