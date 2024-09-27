
// Bài 1 : tìm phần từ chung giữa 2 mảng : new Set() , new Map
// Bài 2 : 
const arr_1 = [1, 2, 3, 4, 5];
const arr_2 = [5, 6, 7, 8, 9, 2];
const general = (arr_1, arr_2) => {
    const result = arr_1.filter((item) => new Set(arr_2).has(item));
    return [...arr_1, ...arr_2].filter((item) => !new Set(result).has(item));
}
// console.log("acc", general(arr_1, arr_2));
for (const entry of arr_2) {
    console.log(entry);
}
const set_1 = new Set([1, 2, 3, 4, 5])
const map_1 = new Map([
    [4, 5]
]);
map_1.set("1", "xinchoa")
map_1.set("2", "kaka")
map_1.set("3", "ranado")
console.log(map_1)
console.log(set_1)

const input = [1, 0, 3, 0, 0]
const output = [120, 60, 40, 30, 24]

const caculate = (arr) => {
    const check_zero = arr.filter((item) => item === 0);
    if (check_zero.length >= 2) {
        arr.fill(0)
        return arr;
    }
    const tich = arr.reduce((acc, num) => {
        if (num !== 0) {
            return acc * num;
        }
        return acc;
    }, 1)
    return arr.map((item) => {
        if (item === 0) {
            return 0;
        }
        return tich / item;
    });
}
const arr_3 = ["a", "b", "c", "a", "a", "c"]
const output_arr_3 = "a3b1c2"
const calc_2 = (arr) => {
    const count = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1
        return acc;
    }, {})
    return Object.entries(count).map(([key, value], index) => {
        return key + value;
    }).join("");
}

const arr_4 = "abcd"
const check = (str) => {
    const result = str.split("").reverse().join("")
    return result;
}
check(arr_4);







