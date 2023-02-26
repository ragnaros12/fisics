

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
}