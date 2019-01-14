/*
PT XYZ memiliki beberapa cabang usaha masing masing cabang meberikan laporan bulanan income dan outcome mereka, 
data ini telah terkumpul dalam bentuk berikut

EXAMPLE:

INPUT:
month  = ['jan', 'feb', 'march', 'april', 'mei', 'jun', 'jul', 'augst', 'sept', 'oct', 'nov', 'dec'];
branches = [
  [
    [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
    [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
  ], //Branch 1
  [
    [1200, 2500, 2000, 2000, 1500, 2000, 1200, 1200, 2000, 2500, 2000, 3500], //Income
    [700, 1200, 700, 1200, 700, 1200, 500, 500, 500, 1200, 1200, 1700] //Outcome
  ], //Branch 2
  [
    [2000, 1500, 1200, 1200, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
    [500, 600, 500, 700, 1200, 1200, 1200, 1500, 1200, 1500, 1200, 2200] //Outcome
  ] //Branch 3
]

dari data tersebut tampikan hasil income dan outcome perbulan masing masing cabang dengan formatsebagai berikut
| {bulan} | Branch-1 IN: {income} OUTCOME: {outcome} | Branch-2 IN: {income} OUT{outcome} | Branch-3 IN: {income} OUT{outcome} |

OUTPUT: 

| jan | Branch-1 IN: 1200 | OUT: 500 | Branch-2 IN: 1200 | OUT: 700 | Branch-3 IN: 2000 | OUT: 500 |
| feb | Branch-1 IN: 1500 | OUT: 700 | Branch-2 IN: 2500 | OUT: 1200 | Branch-3 IN: 1500 | OUT: 600 |
| march | Branch-1 IN: 2000 | OUT: 700 | Branch-2 IN: 2000 | OUT: 700 | Branch-3 IN: 1200 | OUT: 500 |
| april | Branch-1 IN: 1500 | OUT: 700 | Branch-2 IN: 2000 | OUT: 1200 | Branch-3 IN: 1200 | OUT: 700 |
| mei | Branch-1 IN: 2500 | OUT: 1200 | Branch-2 IN: 1500 | OUT: 700 | Branch-3 IN: 1500 | OUT: 1200 |
| jun | Branch-1 IN: 3500 | OUT: 1300 | Branch-2 IN: 2000 | OUT: 1200 | Branch-3 IN: 2000 | OUT: 1200 |
| jul | Branch-1 IN: 3500 | OUT: 1300 | Branch-2 IN: 1200 | OUT: 500 | Branch-3 IN: 2000 | OUT: 1200 |
| august | Branch-1 IN: 2500 | OUT: 1200 | Branch-2 IN: 1200 | OUT: 500 | Branch-3 IN: 2500 | OUT: 1500 |
| sept | Branch-1 IN: 1200 | OUT: 500 | Branch-2 IN: 2000 | OUT: 500 | Branch-3 IN: 2000 | OUT: 1200 |
| oct | Branch-1 IN: 2000 | OUT: 1200 | Branch-2 IN: 2500 | OUT: 1200 | Branch-3 IN: 2500 | OUT: 1500 |
| nov | Branch-1 IN: 1200 | OUT: 500 | Branch-2 IN: 2000 | OUT: 1200 | Branch-3 IN: 2000 | OUT: 1200 |
| dec | Branch-1 IN: 4000 | OUT: 2200 | Branch-2 IN: 3500 | OUT: 1700 | Branch-3 IN: 4000 | OUT: 2200 |

*/

function printBranch(branches) {
  // your code is here
  const month  = ['jan', 'feb', 'march', 'april', 'mei', 'jun', 'jul', 'augst', 'sept', 'oct', 'nov', 'dec'];

  let output = []
  let temp = ''
  for(let i=0;i < month.length;i++){
    temp=`| ${month[i]} | Branch-1 IN: ${branches[0][0][i]} | OUT: ${branches[0][1][i]} |`
    if(!!branches[1]){
      temp+=`Branch-2 IN: ${branches[1][0][i]} | OUT: ${branches[1][1][i]} |`
    }
    if(!!branches[2]){
      temp+=` Branch-3 IN: ${branches[2][0][i]} | OUT: ${branches[2][1][i]} |`
    }
    output.push(temp)
  }
  return output.join('\n')
}

//TEST CASE 1
var data1 = [
  [
    [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
    [5003, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
  ],
  [
    [1200, 2500, 2000, 2000, 1500, 2000, 1200, 1200, 2000, 2500, 2000, 3500], //Income
    [7004, 1200, 700, 1200, 700, 1200, 500, 500, 500, 1200, 1200, 1700] //Outcome
  ],
  [
    [2000, 1500, 1200, 1200, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
    [500, 600, 500, 700, 1200, 1200, 1200, 1500, 1200, 1500, 1200, 2200] //Outcome
  ]
]

console.log(printBranch(data1));

/*
| jan | Branch-1 IN: 1200 | OUT:500 |Branch-2 IN: 1200 | OUT:700 |Branch-3 IN: 2000 | OUT:500 |
| feb | Branch-1 IN: 1500 | OUT:700 |Branch-2 IN: 2500 | OUT:1200 |Branch-3 IN: 1500 | OUT:600 |
| march | Branch-1 IN: 2000 | OUT:700 |Branch-2 IN: 2000 | OUT:700 |Branch-3 IN: 1200 | OUT:500 |
| april | Branch-1 IN: 1500 | OUT:700 |Branch-2 IN: 2000 | OUT:1200 |Branch-3 IN: 1200 | OUT:700 |
| mei | Branch-1 IN: 2500 | OUT:1200 |Branch-2 IN: 1500 | OUT:700 |Branch-3 IN: 1500 | OUT:1200 |
| jun | Branch-1 IN: 3500 | OUT:1300 |Branch-2 IN: 2000 | OUT:1200 |Branch-3 IN: 2000 | OUT:1200 |
| jul | Branch-1 IN: 3500 | OUT:1300 |Branch-2 IN: 1200 | OUT:500 |Branch-3 IN: 2000 | OUT:1200 |
| augst | Branch-1 IN: 2500 | OUT:1200 |Branch-2 IN: 1200 | OUT:500 |Branch-3 IN: 2500 | OUT:1500 |
| sept | Branch-1 IN: 1200 | OUT:500 |Branch-2 IN: 2000 | OUT:500 |Branch-3 IN: 2000 | OUT:1200 |
| oct | Branch-1 IN: 2000 | OUT:1200 |Branch-2 IN: 2500 | OUT:1200 |Branch-3 IN: 2500 | OUT:1500 |
| nov | Branch-1 IN: 1200 | OUT:500 |Branch-2 IN: 2000 | OUT:1200 |Branch-3 IN: 2000 | OUT:1200 |
| dec | Branch-1 IN: 4000 | OUT:2200 |Branch-2 IN: 3500 | OUT:1700 |Branch-3 IN: 4000 | OUT:2200 |
*/

// TEST CASE 2
var data2 = [
  [
    [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
    [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
  ]
]

console.log(printBranch(data2))
/*
| jan | Branch-1 IN: 1200 | OUT:500 |
| feb | Branch-1 IN: 1500 | OUT:700 |
| march | Branch-1 IN: 2000 | OUT:700 |
| april | Branch-1 IN: 1500 | OUT:700 |
| mei | Branch-1 IN: 2500 | OUT:1200 |
| jun | Branch-1 IN: 3500 | OUT:1300 |
| jul | Branch-1 IN: 3500 | OUT:1300 |
| augst | Branch-1 IN: 2500 | OUT:1200 |
| sept | Branch-1 IN: 1200 | OUT:500 |
| oct | Branch-1 IN: 2000 | OUT:1200 |
| nov | Branch-1 IN: 1200 | OUT:500 |
| dec | Branch-1 IN: 4000 | OUT:2200 |
*/