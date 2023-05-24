const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ?''
  :'/'
  ,
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})

// module.exports = {
//   devServer: {
//     allowedHosts: [
//       'localhost',
//       'example.com',
//       '192.168.1.1',
//     ],
//   },
// };

// module.exports = {
//   devServer: {
//     disableHostCheck: true
//   }
// }

// module.exports = {
//   devServer: {
//     public: 'subdomain.domain.ext:port'
//   }
// };