

const isPalindrome = function(x) {
    let digits = [];
    while(x > 0) {
        let d = x % 10;
        digits.push(d);
        x = Math.floor(x / 10);
    }

    console.log(digits);
    let len = digits.length - 1;
    for (let i = 0; i < len / 2; i++) {
        console.log(digits[i]);
        console.log(digits[len - i])
        if(digits[i] != digits[len - i]) {
            return false
        }
    }
    return true
};

console.log(isPalindrome(-12588521));