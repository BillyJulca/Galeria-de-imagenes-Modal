// Función para abrir el popup
function abrirVentana() {
    // Mostrar la capa overlay
    document.querySelector(".overlay").style.display = "flex";
  }
  
  // Función para cerrar el popup
  function cerrarVentana() {
    // Ocultar la capa overlay
    document.querySelector(".overlay").style.display = "none";
  }
  
  // Agregar evento click a cada imagen de persona
  const images = document.querySelectorAll(".team-img");
  images.forEach((img) => {
    img.addEventListener("click", abrirVentana);
  });
  
  // Agregar evento click al botón "X" dentro del popup
  const btnCerrar = document.querySelector(".btn-cerrar");
  btnCerrar.addEventListener("click", cerrarVentana);
