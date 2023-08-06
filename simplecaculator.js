/*function C1() {
    document.getElementById("result").value += value;
    function Add() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value y;
    }
}*/

let view = document.getElementById("view");
function inputValue(value) {
    view.value += value;
}
function result() {
    let result = eval(view.value);
    view.value = result;
}
function xoa() {
    view.value="";
}