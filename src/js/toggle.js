document.addEventListener("DOMContentLoaded", () => {
  const toggleBtns = document.querySelectorAll(".toggle-btn");
  const toggleSlider = document.querySelector(".toggle-slider");

  toggleBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Удаляем активный класс у всех кнопок
      toggleBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Двигаем ползунок
      toggleSlider.style.transform =
        index === 0 ? "translateX(0)" : "translateX(100%)";
    });
  });
});
