const fizzBuzz = function(x, y) {
    for (let i = 0; i <= 100; i++) {
        if (i % x === 0 && i % y === 0) {
            console.log('fizzbuzz');
        } else if (i % x === 0) {
            console.log('fizz');
        } else if (i % y === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(4, 9);