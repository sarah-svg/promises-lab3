const { copy } = require('./copy');
const fs = require('fs').promises;

describe('copy fn', () => {
  // afterEach(() => {
  //   fs.rm('../cool-finish2.txt');
  // });
  it('it copy\'s a file and writes it to a new file', async() => {
    await copy('sandbox/read2.txt', './cool-finish2.txt');
    const copy2 = await fs.readFile('./cool-finish2.txt', 'utf-8');
    expect(copy2).toEqual('HEYY');
  });

    
});
