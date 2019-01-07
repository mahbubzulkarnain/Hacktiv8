/*
=============
Number Ladder
=============

[INSTRUCTION]
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
321
21
1

contoh 2 (height = 5):
54321
4321
321
21
1

contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.

Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
var height = 5

let output = ''

if (typeof height === 'number') {
    for (let i = height; i >= 1; i--) {
        output = ''
        for (let j = i; j >= 1; j--) {
            output += j
        }
        console.log(output)
    }
}
