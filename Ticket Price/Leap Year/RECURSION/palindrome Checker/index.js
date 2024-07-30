function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    if (str.length <= 1) {
        return true;
    }

    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    } else {
        return false;
    }
}

let inputString = prompt("Enter a string to check if it's a palindrome:");
let result = isPalindrome(inputString);
alert(result ? "The string is a palindrome." : "The string is not a palindrome.");
