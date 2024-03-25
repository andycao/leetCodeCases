const fs = require("fs");

const filePath = `${__dirname}/../algo/`;

fs.readdir(filePath, (err, files) => {
  if (!null) {
    const list = [];
    files.forEach((file) => {
      console.log(file);
      list.push({
        name: file,
        encode: encodeURIComponent(file)
      });
    });

    writeJson(list);
  }
});

function writeJson(files) {
  const data = JSON.stringify(files);

  // write JSON string to a file
  fs.writeFile("src/const/files.json", data, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });
}
