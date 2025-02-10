document
    .getElementById("add-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const getAmmount = parseFloat(document.getElementById("input-money").value);
        const getPin = parseFloat(document.getElementById("input-pin").value);
        if (getPin === 11 && typeof getPin === Number) {
            const currentBalance = parseFloat(
                document.getElementById("current-balance").innerText
            );
            const newBalance = currentBalance + getAmmount;
            document.getElementById("current-balance").innerText = newBalance;

            document.getElementById("input-money").value = "";
            document.getElementById("input-pin").value = "";
        } else {
            alert("Please try again.");
            document.getElementById("input-pin").value = "";
        }
    });
