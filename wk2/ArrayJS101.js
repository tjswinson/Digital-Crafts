const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
const max = ratings.length;
const count = 0;
for (let i=0; i<max; i++) {
  const stars = ratings[i];
  if (stars === 5) {
    count++;
 }
}
 if (count >= 6) {
    console.log('This is a featured product!');
  } else {
    console.log('Sorry, no homepage for you.');
  }