const tabsHomePriceChange = document.querySelector(
  ".place-trends__home-change"
);
const tabsJobGrowth = document.querySelector(".place-trends__job-growth");
const popHomePriceChange = document.querySelector(
  ".place-trends__contents-home"
);
const popJobGrowth = document.querySelector(".place-trends__contents-job");

//Подобные блоки кода найдены в 4 местах

function activeHomePrice() {
  tabsHomePriceChange.classList.add("place-info__button--active");
  popHomePriceChange.classList.add("active");
  tabsJobGrowth.classList.remove("place-info__button--active");
  popJobGrowth.classList.remove("active");
}

//Подобные блоки кода найдены в 4 местах

function activeJobGrowth() {
  tabsHomePriceChange.classList.remove("place-info__button--active");
  popHomePriceChange.classList.remove("active");
  tabsJobGrowth.classList.add("place-info__button--active");
  popJobGrowth.classList.add("active");
}

if (tabsHomePriceChange) {
  tabsHomePriceChange.addEventListener("click", activeHomePrice);
}

if (tabsJobGrowth) {
  tabsJobGrowth.addEventListener("click", activeJobGrowth);
}
