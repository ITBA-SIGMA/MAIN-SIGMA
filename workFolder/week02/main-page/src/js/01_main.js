//theme changing
const btns = document.querySelectorAll(".menuList li");

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", reStyle);
}

function reStyle(){
    if (this.getAttribute("data-style")) {
        document.getElementById("theme").className = '';
        document.getElementById("theme").classList.add(this.getAttribute("data-style"));
    }
}