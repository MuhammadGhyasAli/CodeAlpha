document.addEventListener("DOMContentLoaded", function () {
    let userInput = document.getElementById("user-input");
    let buttons = document.querySelectorAll("button");
    let expression = "";

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            let value = this.innerText;

            if (value === "AC") {
                expression = "";
                userInput.innerText = "0";
            } else if (value === "DEL") {
                expression = expression.slice(0, -1);
                userInput.innerText = expression || "0";
            } else if (value === "=") {
                try {
                    expression = eval(expression).toString();
                    userInput.innerText = expression;
                } catch (error) {
                    userInput.innerText = "Error";
                    expression = "";
                }
            } else {
                if (userInput.innerText === "0" && value !== ".") {
                    expression = value;
                } else {
                    expression += value;
                }
                userInput.innerText = expression;
            }
        });
    });
});
