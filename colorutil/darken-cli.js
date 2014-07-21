var colorutil = require('./colorutil.js')
var rgbValues = process.argv.slice(2,4)
var luminosity = colorutil.darken.apply(colorutil, rgbValues)