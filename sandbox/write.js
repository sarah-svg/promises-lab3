// Write a file
// require const fsPromises = require('fs').promises;
// use fsPromises.writeFile to write a file
// then console.log "DONE!"








const fs = require('fs').promises;


fs.writeFile('./cool-finish.txt', 'DONE!')

.then(() => console.log('DONE'))
.catch(err => console.log(err));


async function writeAsync() {
    try{
        const res = await fs.writeFile('./cool-finish2.txt', 'DONE!');
        console.log('done');
    } catch(err) {
        console.log(err);
    }
}
writeAsync();