
// const chalk = require("chalk");

// console.log(chalk);


// function sum (a , b) {
//     return a + b;
// }

// function mul(a , b) {
//     return a * b;
// }

// console.log(sum(5, 4));


// ================================================================================
// ================================================================================


// const path = require("path");
// console.log(__dirname);
// console.log(path.join(__dirname, "index.js"));

// ================================================================================
// ================================================================================

// const fs = require('fs');
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('counter')
//   .description('CLI to do file based tasks')
//   .version('0.8.0');

// program.command('count_sentences')
//   .description('Count the number of words in a file')
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         let words = 0;
//         for(let i=0; i<data.length; i++) {
//             if(data[i] === "/n") {
//                 words++;
//             }
//         }
//         console.log(`There are ${words + 1} sentences in ${file}`);
//       }
//     });
//   });

// program.parse();


// ================================================================================
// ================================================================================


const fs = require("fs");

function main(fileName) {
    fs.readFile(fileName, "utf-8", function(err, data) {

        let total = 0;
        for(let i=0; i<data.length; i++) {
            if(data[i] === " ") {
                total++;
            }
        }
        console.log(total + 1);
    })
}

main(process.argv[2]);

// ================================================================================
// ================================================================================































