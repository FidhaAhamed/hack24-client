function updateImageSrc() {
  var img = document.getElementById("responsiveImage");
  var screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    img.src = "src/assets/Line 2.svg";
  }
}

// Update image source on initial load
updateImageSrc();

// Update image source on window resize
window.addEventListener("resize", updateImageSrc);
