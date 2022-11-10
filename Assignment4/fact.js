function factorial() {
    let number = parseInt(document.getElementById("input1").value)
    let fact = 1
    for(let i = number; i >= 1 ; i--) {
        fact = fact * i;
    }
    document.getElementById("result").value = fact;
}