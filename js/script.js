const submitButton = document.querySelector('.submitButton');

const hello = () => {
  const alertMessage = document.querySelector(".alert");
  alertMessage.style.display = "block";
  const name = document.querySelector("#name");
  alertMessage.innerHTML = name.value;
}

submitButton.addEventListener('click', hello);

console.log("My first web code in Sololearn");
