// function openModal() {
//     var d = document.getElementById("myModal");
//     if (d.style.display === "flex") {
//       d.style.display = "none";
//     } else {
//       d.style.display = "flex";
//     }
//   }
  
//   var scrollIndex = 1;
//   showScrolls(scrollIndex);
  
//   function plusImg(n) {
//     showScrolls(scrollIndex += n);
//   }
  
//   function currentImg(n) {
//     showScrolls(scrollIndex = n);
//   }
  
//   function showScrolls(n) {
//     var i;
//     var scrolls = document.getElementsByClassName("myImgSlides");
//     var dots = document.getElementsByClassName("demo");
//     var captionText = document.getElementById("caption");
//     if (n > scrolls.length) {scrollIndex = 1}
//     if (n < 1) {scrollIndex = scrolls.length}
//     for (i = 0; i < scrolls.length; i++) {
//         scrolls[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     scrolls[scrollIndex-1].style.display = "flex";
//     dots[scrollIndex-1].className += " active";
//     captionText.innerHTML = dots[scrollIndex-1].alt;
//   }