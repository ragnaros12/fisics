

window.onload = function (){
    document.getElementById("burger_button").onclick = function (){
        document.body.style.overflow = 'hidden';
        let modal = document.getElementById("modal_nav");
        modal.classList.remove("modal_nav_hide");
        modal.classList.add("modal_nav_show");
    };
    document.getElementById("close").onclick = function (){
        document.body.style.overflow = 'auto';
        let modal = document.getElementById("modal_nav");
        modal.classList.remove("modal_nav_show");
        modal.classList.add("modal_nav_hide");
    };
}