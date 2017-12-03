var path = require('path');

module.exports = {
  entry: ["./app/assets/scripts/App.js", "./app/assets/scripts/display_time.js"],
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: '[name].js'
  }
}


/*
module.exports = {
  entry: "./app/assets/scripts/display_time.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "display_time.js"
  }

}
*/
