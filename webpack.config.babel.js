var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');


const path = require('path');
const fs  = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './client/ant-theme-vars.less'), 'utf8'));

var cssModulesIdentName = '[name]__[local]__[hash:base64:5]';
if (process.env.NODE_ENV === 'production') {
  cssModulesIdentName = '[hash:base64]';
}
//--- babel tests
// /\.(js|mjs|jsx|ts|tsx)$/,
module.exports = {
  output: {
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
    modules: [
      'client',
      'node_modules',
    ],
  },
  module: {
    rules: [
       {
        test: /\.less$/,
        //        include: ['./node_modules/antd'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "true" }], // `style: true` for less
              ],
            },
          }
        ],
       },
       {
         test: /\.less$/,
         use: [
           {
             loader: 'style-loader',
           },
           {
             loader: 'css-loader',
           },
           {
             loader: 'less-loader',
             query: {

               modifyVars: themeVariables

             },
           },
         ],

       },
       {
         test: /\.css/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: cssModulesIdentName,
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                postcssFocus(),
                cssnext({
                  browsers: ['last 2 versions', 'IE > 10'],
                }),
                postcssReporter({
                  clearMessages: true,
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
};
