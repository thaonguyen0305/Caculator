function Addition() {
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    let z = Number(x) + Number(y)
    document.getElementById("result").innerHTML = z;
}
function Subtraction() {
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    let z = Number(x) - Number(y)
    document.getElementById("result").innerHTML = z;
}
function Multiplication() {
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    let z = Number(x) * Number(y)
    document.getElementById("result").innerHTML = z;
}
function Division() {
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    let z = Number(x) / Number(y)
    document.getElementById("result").innerHTML = z;
}