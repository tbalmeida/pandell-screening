const defaultIni = 1;
const defaultEnd = 10000;

console.clear();
suffleNumbers();


function suffleNumbers()
{
    console.log(`===== Random Numeric Sequence Generator =====
    To change the starting and ending values use:
    \n\tnode number_generator.js [starting number] [ending number]\n`);
    
    // let ini = process.argv[2];
    let ini = validateNumber(process.argv[2], defaultIni);
    let end = validateNumber(process.argv[3], defaultEnd);
    
    // proceeds only if the starting value is lower than the ending value
    if (ini < end) {
        console.log(`> Generating random numbers between ${ini} and ${end}.`)
        let source = createSource(ini, end);
    
        let result = suffleArray(source);
    
        if (end-ini > 100)
        {   // the maximum output on screen was 100 items; so, direct the output to a file instead
            createFile("arrayOutput.txt", result.join(", "));
        } else {
            console.log('\nThe results are:', result);
        }

    } else {
        console.log("> The initial value must be lower than the final value. Please, verify the numbers provided.");
    }
}


// checks if the value is numeric; if not, use default value
function validateNumber(value, defaultVal) {
    let eval = parseInt(value);

    // not using a ternary to be able to console log the error message
    if ( Number.isFinite(eval) ) {
        return eval;
    } else {
        console.log(`> Value not valid. Using the default (${defaultVal}) instead.`);
        return defaultVal;
    }
}

// creates an array with the requested range.
function createSource(start, end) {
    var result = []
    while (start <= end) {
        result.push(start);
        start++;
    }
    return result;
}

// generates a random number
function getRandomInt(max) {
    // add 1 on max to include this number as well
    return Math.floor(Math.random() * Math.floor(max+1));
}

// shuffles the array
function suffleArray(source) {
    let initial = source;
    let result = [];
    while (initial.length > 0) {
        let randomNumber = getRandomInt( initial.length-1 );     // selects a random position on the source array
        result.push(initial[randomNumber]);                      // adds the number at the select position to the result array
        initial.splice(randomNumber, 1);                         // excludes the used number from the source
    }
    return result;
}

// create a file w/ the output.
function createFile(filename, data) {
    const fs = require('fs');

    fs.writeFile(filename, data, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log(`\nFile ${filename} created!`);
    });
}