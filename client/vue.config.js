const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const path = require('path');

module.exports = {
  outputDir: path.join(__dirname, '..', 'backend', 'public'),
  devServer: {
    port: process.env.VUE_APP_CLIENT_PORT
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: /sprites/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                spriteFilename: './img/sprite.svg',
                runtimeCompat: true
              }
            },
            'svg-transform-loader',
            'svgo-loader'
          ]
        },
      ]
    },
    plugins: [
      new SpriteLoaderPlugin({
        plainSprite: true
      })
    ]
  }
}