// entrypoint file
// replace the original require function with the esm version
require = require("esm")(module)
// normal export so node knows what the main file is
module.exports = require('./src/core');