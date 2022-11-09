const changeJar = document.querySelector(".change-jar");
const moneyform = document.querySelector(".moneyform");

moneyform.addEventListener("submit", (e) => {
  e.preventDefault();
  let coinAmount = document.querySelector("#amount").value;
  let coinChosen = document.querySelector("#type").value;
  for (let i = 0; i < coinAmount; i++) {
    const newCoin = document.createElement("li");
    newCoin.classList.add("coin", coinChosen);
    newCoin.textContent = coinChosen;
    changeJar.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
});