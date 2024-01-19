const container = document.querySelector(".container")
const QrCodeBtn = document.querySelector("#qr-form button")

const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector(".img")

function generateQrCode() {

    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;

    QrCodeBtn.innerText = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        QrCodeBtn.innerText = "Código gerado!";
    })
}

QrCodeBtn.addEventListener("click", () => {
    generateQrCode()
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter");
    generateQrCode();
})

qrCodeInput.addEventListener("keyup", () =>{
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        QrCodeBtn.innerText = "Gerar QRCode";
    }
})