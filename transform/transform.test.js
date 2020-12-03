const fs = require("fs").promises;
const { transform } = require("./transform");
const input_src = "./transform/transform.txt";
const output_src = "./mrofsnart.txt";

describe("transformer", () => {
  afterEach(() => {
    return fs.rm("./mrofsnart.txt");
  });
  it("reads a file, removes all capitals with lowercase, makes all letters capital, then reverses the string", async () => {
    const string = await transform(input_src);
    const contents = await fs.readFile(output_src, "utf-8");
    expect(contents).toEqual(string);
  });
});