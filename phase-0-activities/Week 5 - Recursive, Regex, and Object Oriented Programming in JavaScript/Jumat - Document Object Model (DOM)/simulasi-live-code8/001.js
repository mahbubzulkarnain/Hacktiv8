/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan

Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/

// Algoritma / Pseudocode here..

/**
 * READ and SAVE 'input'
 *
 * SET 'healt' equal 3
 * SET 'villain' equal 0
 *
 * SET 'i' equal 0
 * FOR 'i' until LENGTH OF 'input' and 'healt' > 0 THAN
 *      IF 'i' equal '@' THAN
 *          SET 'healt' with 'healt' minus 1
 *      ELSE IF 'i' equal 'Villain' THAN
 *          SET 'villain' with 'villain' plus 1
 *      ENDIF
 *      SET 'i' with 'i' plus 1
 * ENDFOR
 *
 * IF 'healt' equal 0 THAN
 *      DISPLAY 'Ooops, you die. You got ' + 'villain' + ' villains'
 * ELSE
 *      DISPLAY 'Nice work, detective! You got ' + 'villain' + ' villains'
 * ENDIF
 *
 *
 */
