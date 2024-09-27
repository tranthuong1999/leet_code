// bài 1 : Two sum 
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// console.log(result)
const caculate = (arr, target) => {
    const myObj = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i]
        if (myObj.has(complement)) {
            return [myObj.get(complement), i]
        }
        myObj.set(arr[i], i)
    }
}
const result = caculate([2, 7, 11, 15], 9)

// bai2 : Roman interger
function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const currentValue = romanMap[s[i]];
        const nextValue = romanMap[s[i + 1]];
        if (currentValue < nextValue) {
            total -= currentValue;
        }
        else {
            total += currentValue;
        }
    }
    return total;
}

// console.log(romanToInt("IXXL"))
// bài 3 : cho tổng tìm ngược lại chuỗi thì làm như thế nào
const map = {
    "1000": "M",
    "900": "CM",
    "500": "D",
    "400": "CD",
    "100": "C",
    "90": "XC",
    "50": "L",
    "40": "XL",
    "10": "X",
    "9": "IX",
    "5": "V",
    "4": "IV",
    "1": "I"
};

const intToRoman = function (number) {
    const keys = Object.keys(map).sort((a, b) => b - a);
    let result = "";

    for (let i = 0; i < keys.length; i++) {
        while (number >= keys[i]) {
            result += map[keys[i]];
            number -= keys[i];
        }
    }
    return result;

};

// Test cases
// console.log(intToRoman(3));    // Output: "III"
// console.log(intToRoman(44));   // Output: "XLIV"
// console.log(intToRoman(9));    // Output: "IX"
// console.log(intToRoman(1994)); // Output: "MCMXCIV"
/*
IXXL
step 1 : I vs X ==> total : -1
step 2 : X vs X => total : +10
step 3 : X vs L ==> total : -10
step 4 : +50
*/

/*
9. Palindrome Number
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/
const checkBoolean = (x) => {
    return x.toString() === x.toString().split("").reverse().join("") ? true : false;
}
/*
14. Longest Common Prefix
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

// indexOf : nếu không tìm thấy thì trả về -1 . 
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix
}
const strs = ["flower", "flow", "floight"];
console.log(longestCommonPrefix(strs));


