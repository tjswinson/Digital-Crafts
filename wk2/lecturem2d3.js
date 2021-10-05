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
    console.log('${m} cookie: me. ');
    conversation += "one for me \m";
    m--;
    console.log('${m} cookie: you')
    conversation += "one for you \m";
    m--;
}


