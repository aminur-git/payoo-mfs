document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  let pinCheck = document.getElementById("input-pin").value;
  if (pinCheck === "5565") {
    console.log("Amount Added");
    document.getElementById("input-pin").value = "";
  } else {
    console.log("Rejected");
    document.getElementById("input-pin").value = "";
  }
});
