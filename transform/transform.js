// Transformer
// create and export a transform(src) function
// require const fsPromises = require('fs').promises;
// use fsPromises.readFile to read a file
// then remove all capital letters
// then make all letters capital
// then reverse the string
const fs = require('fs').promises;

// const transform = (rmvCapital, makeCapital, rev, path) => {
//     fs.readFile(rmvCapital.toLowerCase(), rmvCapital)
//     .then(data => {
//     fs.readFile(data.toUpperCase(), makeCapital )
//     .then(data2 => {
//     fs.readFile(data2.reverse(), rev)    
//     .then(data3 => {
//     fs.readFile(data3, path)    
//     })
//     .catch(err => console.log(err));     
//     })
// })
// };
const transform = (toWrite, path) => {
    fs.readFile(toWrite.toLowerCase())
    .then(data => {
    fs.readFile(data.toUpperCase())
    .then(data2 => {
    fs.readFile(path,'utf-8', data2.reverse() );    
    })   
    
  
    .catch(err => console.log(err));
    })
    };
module.exports = { transform };

transform('transform/transform.test.js');