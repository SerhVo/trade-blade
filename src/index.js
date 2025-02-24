import "./styles.css";
import "./scss/index.scss";

import "./js/swiper.js";
import "./js/count.js";
import "./js/toggle.js";
import "./js/accordion.js";
import "./js/mobile-menu.js";
import { createTradeCard } from "./components/card.js";

document.addEventListener("DOMContentLoaded", () => {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  // Данные карточек
  const cardsData = [
    {
      title: "NEAR/USDT",
      profit: "58.6206",
      goal: "Цель 4",
      date: "06.10.2022",
    },
    { title: "BTC/USDT", profit: "12.45", goal: "Цель 2", date: "10.11.2023" },
    { title: "ETH/USDT", profit: "25.30", goal: "Цель 3", date: "15.08.2023" },
    { title: "LTC/USDT", profit: "30.60", goal: "Цель 1", date: "20.07.2023" },
    { title: "BCH/USDT", profit: "20.50", goal: "Цель 5", date: "25.06.2023" },
    { title: "XRP/USDT", profit: "15.90", goal: "Цель 4", date: "30.05.2023" },
    { title: "ADA/USDT", profit: "22.80", goal: "Цель 3", date: "05.05.2023" },
    { title: "DOT/USDT", profit: "18.70", goal: "Цель 2", date: "10.05.2023" },
    { title: "SOL/USDT", profit: "23.50", goal: "Цель 1", date: "15.04.2023" },
  ];
  swiperWrapper.innerHTML = ""; 
  cardsData.forEach((data) => {
    const card = createTradeCard(data.title, data.profit, data.goal, data.date);
    swiperWrapper.appendChild(card);
  });
});

console.log("Webpack настроен! 🚀");
