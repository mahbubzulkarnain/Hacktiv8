/* 
===================
Distance Coordinate
===================

[INSTRUCTION]
buatlah program yang dapat menentukan jarak antara dari character o dan x 
pada array multidimensi, preview : 
[
  ['','','o',''],
  ['','','',''],
  ['','','',''],
  ['x','','','']
]

[EXAMPLE]
console.log(distanceCoordinate([
  ['','','o',''],
  ['','','',''],
  ['','','',''],
  ['x','','','']
]))

step by step solving :
[
    ['', '', 'o',''],
    ['', '', '1',''],
    ['', '', '2',''],
    ['x5','4','3','']
]
jika kita perhatikan urutan angka - angka diatas, maka jarak antara 
o dan x adalah 5. dimana posisi x dihitung sebagai 1 langkah 

maka output : 5
*/

function distanceCoordinate(board) {
  // your code here
  let countHorizontal = 0
  let countVertical = 0

  let positionO = [0,0]
  let positionX = [0,0]

  for(let i=0;i< board.length;i++){
    for(let j=0;j<board[i].length;j++){
      if(board[i][j] == 'o'){
        positionO = [i, j]
      }
      if(board[i][j] == 'x'){
        positionX = [i, j]
      }
    }
  }

  let x = Number((positionO[0]-positionX[0]).toString().replace(/-/g,''))
  let y= Number((positionO[1]-positionX[1]).toString().replace(/-/g,''))
  return x+y

}

console.log( distanceCoordinate([
   ['','','o',''],
   ['','','',''],
   ['','','',''],
   ['x','','','']
])) // 5

console.log( distanceCoordinate([
   ['','','',''],
   ['','x','',''],
   ['','','',''],
   ['o','','','']
])) // 3

console.log( distanceCoordinate([
  ['','','','o'],
  ['','','',''],
  ['','','',''],
  ['x','','','']
])) // 6

console.log( distanceCoordinate([
  ['','','','x'],
  ['','','',''],
  ['','','',''],
  ['','','','o']
])) // 3
