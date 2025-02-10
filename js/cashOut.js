document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const getCashoutAmount = parseFloat(
      document.getElementById("input-cashout-money").value
    );
    const getCashoutPin = parseFloat(
      document.getElementById("input-cashout-pin").value
    );
    const balance = parseFloat(
      document.getElementById("current-balance").innerText
    );
    if (getCashoutPin === 5525 && getCashoutAmount < balance) {
      const newBalance = balance - getCashoutAmount;
      document.getElementById("current-balance").innerText = newBalance;

      document.getElementById("input-cashout-money").value = "";
      document.getElementById("input-cashout-pin").value = "";
      alert("Transaction Successful");
    } else {
      alert("Dishonored! Please try again.");
      document.getElementById("input-cashout-money").value = "";
      document.getElementById("input-cashout-pin").value = "";
    }
  });

  