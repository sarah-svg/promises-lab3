// test
// invoke your transform function
// then expect that the result is what you think it should be
const { transform } = require('./transform');

describe('transform fn', () => {
    ////aftereach adds a line to the end of each test to remove caps.txt
//   afterEach(() => {
//     return fs.rm('./transform.txt');
//   });

  it('transforms word', async() => {
    await transform('spOt');
    const contents = await fs.readFile('/transform.txt', 'utf-8');
    expect(contents).toEqual('TOPS');
  });
});
