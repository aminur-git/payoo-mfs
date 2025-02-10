/*  // console.log('btn clicking file added')

// step-1 ----> set event handler.
document.getElementById("btn-login").addEventListener("click", function (event) {
// step-2 -----> prevent reloading browser.
    event.preventDefault();
// step-3 -----> get phone number and pin number. 
    const inputNumber = document.getElementById('input-number').value;
    const inputPin = document.getElementById('input-pin').value;

// step-4 -----> validate phone number and pin. 
    if(inputNumber === '01610' && inputPin === '1234'){
        console.log('You are logged in')
    }
    // allow user to use the website. 
    else{
        console.log('Wrong Phone Number or Pin')
    }
    // don't allow
}); */
 

document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("input-number").value;
    const pinNumber = document.getElementById("input-pin").value;
    if (phoneNumber === "01916" && pinNumber === "5565") {
      console.log("Access Granted");
      window.location.href = '/home.html'
    } else {
      console.log("Access Denied");
    }
  });
