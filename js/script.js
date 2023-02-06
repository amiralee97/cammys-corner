const subscibeButton = document.querySelector(".btn");
const email = document.querySelector(".email");

subscibeButton.addEventListener("click", function () {
    const newSubscriber = email.value;
    if (newSubscriber !== "") {
        clearInput();
    }
});

const clearInput = function () {
    email.value = "";
};