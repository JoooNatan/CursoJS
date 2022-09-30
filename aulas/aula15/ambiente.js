var num = [5, 6, 1, 9]
num.sort()

/*for (var c = 0; c < num.length; c++) {
    console.log(num[c])
}*/

for (var c in num) {
    console.log(num[c])
}

console.log(num.indexOf(9))