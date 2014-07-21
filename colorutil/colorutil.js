module.exports = {
	luminosity: function() {
					var r = process.argv[2]
					var g = process.argv[3]
					var b = process.argv[4]
					var luminosity = 0.2126*r + 0.7152*g + 0.0722*b
					module.exports = luminosity
					console.log(luminosity)
				},
	darken: function() {
					var r = process.argv[2]
					var g = process.argv[3]
					var b = process.argv[4]
					var brightness = 0.8
					var darkened = [brightness*r, brightness*g, brightness*b]
					darkened = darkened.join(' ')
					module.exports = darkened
					console.log(darkened)
			}
};