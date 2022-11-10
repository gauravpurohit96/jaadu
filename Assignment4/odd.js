function oddN() {
    var numbers = document.getElementById("input1").value.split(" ")
    let sum = 0
    let temp = 0
    for(let i = 0; i <= numbers.length; i++) {
        temp = parseInt(numbers[i])
        if( temp % 2 == 1) {
            sum = sum + temp;
        }
    }
    document.getElementById("p1").innerText = "Sum of odd numbers is " + sum
}