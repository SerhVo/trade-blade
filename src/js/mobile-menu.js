document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger-menu");
  const menu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-menu");

  // Функция для переключения меню и бургера
  const toggleMenu = () => {
    menu.classList.toggle("open");
    burger.classList.toggle("open");
  };

  // Открытие меню
  burger.addEventListener("click", toggleMenu);

  // Закрытие меню
  closeBtn.addEventListener("click", toggleMenu);

  // Закрытие при клике на ссылку (делегирование)
  menu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      toggleMenu();
    }
  });

  // Закрытие меню при нажатии Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      toggleMenu();
    }
  });
});
