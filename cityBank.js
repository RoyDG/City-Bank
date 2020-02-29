
    //login area event handler
    const submitBtn = document.getElementById("submit");
       submitBtn.addEventListener("click", function(){
        const loginArea = document.getElementById("login-area");
    loginArea.style.display="none";
    const transitionArea = document.getElementById("transition-area");
    transitionArea.style.display = "block";
   })

   //deposit button event handler
    const depositBtn = document.getElementById("addDeposit");
        depositBtn.addEventListener("click", function(){
        const depositNumber = getInputNumber("depositAmount");

    updateSpanText("currentDeposit",depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = "";
   })

   //withdraw button event handler
    const withdrawBtn = document.getElementById("addWithdraw");
        withdrawBtn.addEventListener("click", function () {
        const withdrawNumber = getInputNumber("withdrawAmount");

    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
    })

    //functions for event handler
        function getInputNumber(id){
            const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount) || 0;
    return amountNumber;
}
        function updateSpanText(id, depositNumber) {
            const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}