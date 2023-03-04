

window.onload = function (){
    for (const item of document.getElementsByClassName("lesson_item")){
        item.onclick = function (){
            if(item.className.includes("lesson_item_enable")){
                item.classList.remove("lesson_item_enable");
                item.classList.add("lesson_item_disable");
            }
            else{
                item.classList.remove("lesson_item_disable");
                item.classList.add("lesson_item_enable");
            }
        }
    }
    document.getElementById("lesson_dropdown_container").onmouseover = function (){
        document.getElementById("lesson_dropdown").style.display = "flex";
    }
    document.getElementById("lesson_dropdown_container").onmouseout = function (){
        document.getElementById("lesson_dropdown").style.display = "none";
    }

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