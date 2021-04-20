const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  future: { webpack5: true, },
})

module.exports = {
  async rewrites(){
		return [
			{
				source: '/:path*',
				destination: '/:path*',
			},
			{
				source: '/:path*',
				destination: '/user/:path*',
			},

		]
	},
}
