let n = 1;
while (n < 10) {
    console.log(n);
    n++;
}
console.log(n)
// 10

let m = 5;
let conversation = '';
while (m > 0) {
    if (n % 2 !== 0) {
    console.log('${m} cookie: me');
    conversation += "one for me. \m";
    } else {
    console.log('${m} cookie: you')
    conversation += "one for you \m";
    }
    m--;
}

