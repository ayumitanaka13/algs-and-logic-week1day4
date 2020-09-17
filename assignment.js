// Function 1: Return the remainder. Function will take two parameters.
// It will divide the first number by the second, and return the remainder. 

function one(x, y) {
    return x / y;
}

console.log(one(8, 2));

// Function 2: convert minutes into seconds. Function will take one parameter that will be  a number of minutes, up to 2 decimal places.
// Convert it into seconds, and return that number. 

function two(min) {
    let sec = (min * 60).toFixed(2);
    return sec;
}

console.log(two(10));

// Function 3: convert hours into seconds. Take in a value of hours up to 4 decimal places, and convert it into seconds. 

function three(hrs) {
    let sec = (hrs * 60 * 60).toFixed(4);
    return sec;
}

console.log(three(1));

// Function 4: convert celsius into fahrenheit into celsius, and vice versa.
// Function will take two parameters that will be  a temp either fahrenheit or celsius, up to 2 decimal places.
// The second argument will be either the letter ‘c’ or the letter ‘f’ to state whether the value given is starting in celsius or in fahrenheit.
// Convert the temp to the opposite unit, and return the value.  (35.6, ‘c’)

function four(temp, fc) {
    if (fc === "c") {
        return ((temp - 32) * 5 / 9).toFixed(2) + "C";
    } else {
        return ((temp * 9 / 5) + 32).toFixed(2) + "F";
    }
}

console.log(four(100, "c"))
console.log(four(30, "f"));

// Function 5: return the area of a triangle when given two parameters, 
// a Base width, and a height. 

function five(width, height) {
    let area = width * height / 2;
    return area;
}

console.log(five(5, 10));

// Function 6: even or odd?  will take in one parameter ( a number ) and print either even or odd, depending on the number. 

function six(num) {
    if (num % 2 === 0) {
        return "even number";
    } else {
        return "odd number";
    }
}

console.log(six(9));