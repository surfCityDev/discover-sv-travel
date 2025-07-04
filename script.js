document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("langToggle");
  let currentLang = "en";

  toggleButton.addEventListener("click", function () {
    if (currentLang === "en") {
      document.querySelectorAll('.en').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.es').forEach(el => el.style.display = 'inline');
      currentLang = "es";
      toggleButton.textContent = "English";
    } else {
      document.querySelectorAll('.es').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.en').forEach(el => el.style.display = 'inline');
      currentLang = "en";
      toggleButton.textContent = "Español";
    }
  });
});
