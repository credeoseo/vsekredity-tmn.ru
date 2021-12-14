const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, e, theme, variants }) {

}, {
  theme: {
    extend: {
		colors: {
			themes: {
				default: '#84adea',
				second: '#e4effe'
			}
		}
	},
  }
})
