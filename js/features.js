document
  .getElementById("show-cashOut-btn")
  .addEventListener("click", function () {
    const cashOut = document.getElementById("cashOut-form");
    const addMoney = document.getElementById("addMoney-form");

    cashOut.classList.remove("hidden");
    addMoney.classList.add("hidden");
  });

document
  .getElementById("show-addMoney-btn")
  .addEventListener("click", function () {
    const cashOut = document.getElementById("cashOut-form");
    const addMoney = document.getElementById("addMoney-form");

    addMoney.classList.remove("hidden");
    cashOut.classList.add("hidden");
  });
