function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let n = parseInt(prompt("Enter the position of the Fibonacci number you want:"));
let result = fibonacci(n);
alert("The " + n + "th Fibonacci number is " + result + ".");
