// module.exports = {
// devServer: {
// proxy: {
// '/': {
// ws: false, // proxy websockets
// target: 'http://192.168.11.172:8090',
// pathRewrite: {
// '^/': '/bpp/'
// },
// cookiePathRewrite: {
// '/bpp': '/'
// }
// }
// }
// },
// baseUrl: process.env.NODE_ENV === 'production' ? '/bpp' : '/9999'
// }