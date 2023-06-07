window.addEventListener("load", function () {
  const div = document.querySelector(".cotainer-principal");
  div.style.opacity = 0;

  function fadeIn() {
    let opacidade = 0;
    const temporizador = setInterval(function () {
      if (opacidade >= 1) {
        clearInterval(temporizador);
      }
      div.style.opacity = opacidade;
      opacidade += 0.1;
    }, 35);
  }
  fadeIn();
});

// Funcionamento do botão de navegação
function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}
