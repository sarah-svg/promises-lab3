//copyfile.js
const fs = require('fs');
const { fileURLToPath } = require('url');

// destination will be created or overwritten by default.

fs.copyFile('sandbox/read2.txt',
 'sandbox/copy.txt',
  (err) => {
  if (err) throw err;
  console.log('File was copied to destination copy1');

  })

  //////////
  const copyFileAsync = async () => {
      try {
        const newFile = await fs.copyFile('sandbox/read2.txt',
        'sandbox/copy2.txt',
         (err) => {
         if (err) throw err;
      }
        );
        return file;
  } catch (err) {
      console.log('File was copied to destination copy2')
  }};

copyFileAsync();