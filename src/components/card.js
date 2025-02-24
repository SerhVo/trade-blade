import "../../src/scss/base/card.scss";
export function createTradeCard(title, profit, goal, date) {
  const card = document.createElement("div");
  card.classList.add("swiper-slide");
  card.innerHTML = `
    <div class="trade-card__header">
      <h2>${title}</h2>
      <span>SPOT • 1 мин. назад</span>
    </div>
    <div class="trade-card__profit">
      <p>ПРИБЫЛЬ</p>
      <h3>${profit}% <span class="arrow-up">↑</span></h3>
    </div>
    <div class="trade-card__footer">
      <p> ${goal}</p>
      <p class="entry-date">Дата входа ${date}</p>
    </div>
  `;
  return card;
}
