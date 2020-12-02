// Copy a file
// create and export a copy(src, dst) function
 const fs = require('fs').promises;
// use fsPromises.readFile to read a file
// then use fsPromises.writeFile to write the read data
// return the promise
// test
// test your copy function
// invoke your copy function
// then expect that the new file exists
// make sure to clean up copied files in an afterAll or afterEach


const copy = (src, dst) => {
  fs.readFile(src, 'utf-8' )
  .then(data => {
  fs.writeFile(dst, data)  
  }) 
  .catch(err => console.log(err));
};

module.exports = { copy };
copy('./sandbox/read2.txt', './cool-finish2.txt' );