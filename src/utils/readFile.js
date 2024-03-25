const fs = require("fs");
const fileUrl =
  "https://github.com/andycao/leetCodeCases/blob/master/src/algo/";
const filePath = `${__dirname}/../algo/`;

fs.readdir(filePath, (err, files) => {
  if (!null) {
    const list = [];
    files.sort((a, b) => parseInt(a) - parseInt(b)).forEach((file) => {
      console.log(file);
      list.push({
        name: file,
        url: `${fileUrl}${encodeURIComponent(file)}`
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
