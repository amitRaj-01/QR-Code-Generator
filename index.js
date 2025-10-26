import { API_URL } from "./env.js";

let qrText = document.getElementById("qrText");
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let genBtn = document.getElementById("genBtn");

async function generateQR(inputText) {
    let textLength = inputText.length;
    if (textLength > 0) {
        qrImage.src = `${API_URL}${encodeURIComponent(inputText)}`; 
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}

genBtn.addEventListener("click", () => {
    let inputText = qrText.value;
    generateQR(inputText);
});
