
let num1, num2;

function generateCaptcha() {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    document.querySelector(".captcha-question").textContent = `${num1} + ${num2} =`;
}

generateCaptcha(); // Call this once when page loads

function validateCaptcha() {
    let answer = parseInt(document.querySelector(".captcha-answer").value);
    if (answer === num1 + num2) {
        alert("Captcha passed!");
        return true;
    } else {
        alert("Wrong captcha. Try again.");
        generateCaptcha(); // Refresh captcha on failure
        document.querySelector(".captcha-answer").value = ""; // clear input
        return false;
    }
}
document.querySelector(".refresh").addEventListener("click",function(e){
    e.preventDefault(); // prevent form reload
    generateCaptcha();
})

document.querySelector(".login-btn").addEventListener("click",function(e){
    e.preventDefault();
    validateCaptcha();
})
