/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5


[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

/*
your Pseudocode/ Algoritma here
BEGIN
  SET 'gold' with 0
  SET 'silver' with 0
  SET 'bronze' with 0
  SET 'total' with 0

  READ and SAVE 'input'

  SET 'i' with 0
  FOR i UNTIL 'i' less than length of 'input'
    IF 'input' of 'i' equal 'G' THAN
      INCREAMEANT 'gold'
    ELSE IF 'input' of 'i' equal 'S' THAN
      INCREAMEANT 'silver'  
    ELSE IF 'input' of 'i' equal 'B' THAN
      INCREAMEANT 'bronze'  
    ENDIF  
  ENDFOR
  SET 'total' with 'gold' * 2 + 'silver' * 1 + 'bronze' / 2
  DISPLAY "jumlah Gold: "+'gold'+", jumlah Silver: "+'silver'+", jumlah Bronze: "+'bronze'+". Dan totalnya adalah: " + 'total'
END
*/

function poinCalculator(array) {
  // your code here
  let Gold = 0
  let Silver = 0
  let Bronze = 0

  for(let i=0;i<array.length;i++){
    if(array[i]=='G'){
      Gold++
    } else if(array[i]=='S'){
      Silver++
    } else if(array[i]=='B'){
      Bronze++
    }
  }
  return `jumlah Gold: ${Gold}, jumlah Silver: ${Silver}, jumlah Bronze: ${Bronze}. Dan totalnya adalah: ${((Gold*2)+(Silver*1)+(Bronze/2))}`
}

console.log(poinCalculator("GSB"));
// jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
console.log(poinCalculator("GGG"));
// jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
console.log(poinCalculator("SSB"));
// jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
console.log(poinCalculator("BBGSSGB"));
// jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
console.log(poinCalculator(""));
// jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0
