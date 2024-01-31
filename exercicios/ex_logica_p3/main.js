
function fizzBuzz(n){
    if(typeof n !== 'number') return NaN;
    if (n % 5 === 0 && n % 3 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;
}


for (i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}