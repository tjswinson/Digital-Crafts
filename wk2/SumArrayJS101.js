const c1Votes = [996, 139, 80, 591, 217, 817, 235, 846, 141, 60];
const c2Votes = [746, 154, 366, 515, 523, 846, 590, 806, 446, 23];
const max = c1Votes.length; // c2Votes.length is the same
let c1Total = 0;
let c2Total = 0;
for (let i=0; i<max; i++) {
  console.log(c1Votes[i]);
  c1Total += c1Votes[i];
  console.log(c2Votes[i]);
  c2Total += c2Votes[i];
}

if (c1Total > c2Total) {
    console.log('Candidate 1 is the winner!');
  } else if (c2Total > c1Total) {
    console.log('Candidate 2 is the winner!');
  } else {
    console.log('Time for a run-off. It was a tie!');
  }