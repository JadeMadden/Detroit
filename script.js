document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");
    const text = "Welcome to the Future";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setTimeout(typeText, 100); // Скорость печати (100 мс)
        }
    }

    textElement.textContent = ""; // Очищаем текст перед печатью
    typeText();
});