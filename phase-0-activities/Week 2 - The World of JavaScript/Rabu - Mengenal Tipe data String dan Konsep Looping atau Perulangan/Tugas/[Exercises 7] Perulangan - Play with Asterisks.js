/*
Looping

1. Menyusun Barisan Bintang

Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.

Skeleton Code
var rows1; // input the number of rows

// do loops to display asterisks in the console.

Output
jika rows1 = 5

*
*
*
*
*
*/

console.log('1. Menyusun Barisan Bintang\n')
var rows1; // input the number of rows

// do loops to display asterisks in the console.
for(let i=0;i<rows1;i++){
    console.log('*')
}

/*
2. Menyusun Barisan Bintang Dengan Nested Looping

Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

Skeleton Code
var rows2; // input the number of rows

// do loops to display asterisks in the console.

Output
jika rows2 = 5

*****
*****
*****
*****
*****
*/

console.log('\n\n2. Menyusun Barisan Bintang Dengan Nested Looping\n')
var rows2; // input the number of rows

// do loops to display asterisks in the console.
for(let i=0;i<rows2;i++){
    let output = '';
    for(let j=0;j<rows2;j++){
        output+='*';
    }
    console.log(output)
}

/*
3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

Skeleton Code
var rows3; // input the number of rows

// do loops to display asterisks in the console.

Output
jika rows3 = 5

*
**
***
****
*****
*/
console.log('\n\n3. Menyusun Barisan Tangga Bintang Dengan Nested Looping\n')
var rows3; // input the number of rows

// do loops to display asterisks in the console.
for(let i=0;i<rows3;i++){
    let output = '';
    for(let j=0;j<=i;j++){
        output+='*';
    }
    console.log(output)
}
