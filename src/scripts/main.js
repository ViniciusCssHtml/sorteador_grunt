document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#sorteador").addEventListener("submit", function (e) {
    e.preventDefault();
    let numeroMaximo = document.querySelector("#numeroMaximo").value;
    numeroMaximo = parseInt(numeroMaximo);

    let numeroAleatorio = Math.random() * numeroMaximo;
    document.querySelector("#resultado-valor").innerText = Math.floor(
      numeroAleatorio + 1
    );
    document.querySelector(".resultado").style.display = "block";
  });
});
