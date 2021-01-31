function Sum(){
    var nb1 = parseInt(document.querySelector(".num1").value);
    var nb2 = parseInt(document.querySelector(".num2").value);
    var result = document.querySelector(".result");
    result.value = Add(nb1, nb2);
}

function multiply( n1, n2){
    return n1 * n2;
}

function division( n1, n2) {
    return parseFloat(n1 / n2).toFixed(2);
}
function Add(n1, n2) {

    return n1 + n2;
}

function Subtract(n1, n2) {
    return n1 - n2
}
