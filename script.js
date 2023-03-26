var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

const headerGraphicsList = document.querySelectorAll(".header_graphics, .header_graphics_1, .header_graphics_2, .header_graphics_3 ");

headerGraphicsList.forEach((headerGraphics) => {
  headerGraphics.addEventListener("click", () => {
    headerGraphics.classList.toggle("rotate");
  });
});
