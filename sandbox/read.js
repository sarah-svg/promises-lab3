// Read a file
// require const fsPromises = require('fs').promises;
// use fsPromises.readFile to read a file
// then console.log the file


const fs = require('fs').promises;

fs.readFile('./sandbox/README.md', 'utf-8') ////utf-8 to read the file not in hex numbers
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });


    async function readAsync() {
        try{
            const res = await fs.readFile('./sandbox/README.md', 'utf-8');
            console.log(res);
        } catch(err) {
            console.log(err);
        }
    }
readAsync();


