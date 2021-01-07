const autoprefixer = require('autoprefixer') // 统一在各各浏览器上面的显示兼容 统一加前缀
// 导包
const pxtorem = require('postcss-pxtorem')
// 导入路径的包
const path = require('path')
module.exports = {
  // css属性如何处理
  css: {
    // 处理的选项
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          // 使用 pxtorem库进行转换
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.join(__dirname), './src/style/var.less']
    }
  }
}
