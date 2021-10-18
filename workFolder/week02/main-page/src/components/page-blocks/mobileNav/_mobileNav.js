//mobile menu button
function CollNav() {
  var x = document.getElementById("navList");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}