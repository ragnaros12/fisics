"use-strict";

function onChange_volume(){
    let value = document.getElementById("volume_number").value;
    let firstMeaning = document.getElementById("volume_meaning1").value;
    let secondMeaning = document.getElementById("volume_meaning2").value;
    let result = value / (10 ** firstMeaning) * (10 ** secondMeaning);
    document.getElementById("result_volume").value = result;
}
function onChange_square(){
    let value = document.getElementById("square_number").value;
    let firstMeaning = document.getElementById("square_meaning1").value;
    let secondMeaning = document.getElementById("square_meaning2").value;
    let temp;
    if (firstMeaning === "Акр"){
        temp = value / 247.1;
    } else {
        temp = value / (10 ** firstMeaning);
    }
    if (secondMeaning === "Акр"){
        temp = temp * 247.1;
    } else {
        temp = temp * (10 ** secondMeaning);
    }
    document.getElementById("result_square").value = temp;
}
function onChange_speed(){
    let value = document.getElementById("speed_number").value;
    let firstMeaning = document.getElementById("speed_meaning1").value;
    let secondMeaning = document.getElementById("speed_meaning2").value;
    let result = value / (firstMeaning) * (secondMeaning);
    document.getElementById("result_speed").value = result;
}
function onChange_temp(){
    let value = Number(document.getElementById("temp_number").value);
    let firstMeaning = document.getElementById("temp_meaning1").value;
    let secondMeaning = document.getElementById("temp_meaning2").value;
    let result;
    switch (firstMeaning){
        case "C":
            result = value;
            break;
        case "F":
            result = (value - 32) * (5 / 9);
            break;
        case "K":
            result = value - 273.15;
            break;
    }
    switch (secondMeaning){
        case "F":
            result = value * 1.8 + 32;
            break;
        case "K":
            result = value + 273.15;
            break;
    }
    document.getElementById("result_temp").value = result;
}

window.onload = function (){
    document.getElementById("lesson_dropdown_container").onmouseover = function (){
        document.getElementById("lesson_dropdown").style.display = "flex";
    }
    document.getElementById("lesson_dropdown_container").onmouseout = function (){
        document.getElementById("lesson_dropdown").style.display = "none";
    }
}