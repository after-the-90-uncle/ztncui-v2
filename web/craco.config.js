
const CracoLessPlugin = require('craco-less');
const {loaderByName } =  require('@craco/craco');
const path = require("path")
module.exports = {
  webpack: {
    alias:{
      "@":path.join(__dirname,".","src"),
      "@components":path.join(__dirname,".","src","pages","components"),
    },
    configure: {
      // 添加自定义的 webpack 配置
      
    },
  },
  plugins:[
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {}
          }
        },
        modifyLessRule(lessRule, context) {
          lessRule.exclude = /\.module\.less$/;
          return lessRule;
        },
        modifyLessModuleRule(lessModuleRule, context) {
          lessModuleRule.test = /\.module\.less$/;
          const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'));
          cssLoader.options.modules = {
            localIdentName: '[local]_[hash:base64:5]'
          };
          return lessModuleRule;
        }
      }
    },
  ],
  babel: {
    presets: [],
    plugins: [],
  },
};