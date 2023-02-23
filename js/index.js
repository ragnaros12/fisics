"use-strict";

function onChange(){
    let value = document.getElementById("volume_number").value;
    let firstMeaning = document.getElementById("volume_meaning1").value;
    let secondMeaning = document.getElementById("volume_meaning2").value;
    let result = value / (10 ** firstMeaning) * (10 ** secondMeaning);
    document.getElementById("result").value = result;
}