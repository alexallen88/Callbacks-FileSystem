const path = require('path')
const fs = require('fs')


// TODO: read in and console.log the content from testdata.txt
function getTheGoods(filepath) {
  fs.readFile(filepath, 'utf8', (err, contents) => {
    if (err) {
      console.error(err.message)
      return
    }
    console.log(contents)
  })
}

const testdataPath = path.join(__dirname, 'testdata.txt')
getTheGoods(testdataPath)