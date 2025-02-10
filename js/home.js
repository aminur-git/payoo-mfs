// step-1 ---> add event listener to 'add button'.
document.getElementById("add-btn").addEventListener("click", function (event) {
  // step-2 ---> prevent page from default reloading.
  event.preventDefault();
  //   step-3 ---> get the pin from input field.
  const pinCheck = document.getElementById("input-pin").value;
  //   step-4 ---> get the money to be added.
  const addMoney = document.getElementById("input-money").value;
  //   console.log(addMoney)

  // step-5 ---> verify pin number
  // do if pin is correct:
  if (pinCheck === "5565") {
    // get balance:
    const currentBalance = document.getElementById("current-balance").innerText;
    console.log(currentBalance);

    // add money with current balance:
    //                 <------------- Convert string to number ------------>
    const addMoneyNumber = parseFloat(addMoney);
    const currentBalanceNumber = parseFloat(currentBalance);

    //                 <------------- Add added money to main balance ------------>
    const newBalance = addMoneyNumber + currentBalanceNumber;
    // update to main balance in the UI/DOM:
    document.getElementById("current-balance").innerText = newBalance;
    // clear input field after button click:
    document.getElementById("input-pin").value = "";
    document.getElementById("input-money").value = "";
  }
  //show a error message if pin is invalid
  else {
    alert("Failed to add money!   Please try again.");
    document.getElementById("input-pin").value = "";
  }
});
