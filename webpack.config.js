const path = require(`path`);
const fs = require(`fs`);
const HtmlPlugin = require(`html-webpack-plugin`);
const CopyPlugin = require(`copy-webpack-plugin`);
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const files  = [];

function throughDirectory(directory) {
  const directoryContents = fs.readdirSync(directory);
  directoryContents.forEach((file) => {
    const absolute = path.join(directory, file);
    if (fs.statSync(absolute).isDirectory()) return throughDirectory(absolute);
    else return files.push(absolute);
  });

  return files;
}

function scanDirectory(directory) {
  const tempfiles = [];

  fs.readdirSync(directory).forEach((file) => {
    const extension = file.split(".");

    if (extension[extension.length - 1] === "js" || extension[extension.length - 1] === "html" || extension[extension.length - 1] === "css") {
      const absolute = path.join(directory, file);

      if (fs.statSync(absolute).isDirectory()) return throughDirectory(absolute);
      return tempfiles.push(`./${absolute.replace(/\\/g, '/')}`);
    }
  });

  return tempfiles;
}

function generateHtmlPlugins(templateDir) {
  const htmlFiles = throughDirectory(templateDir);
  return htmlFiles.map((item) => {
    const parts = item.split(path.sep);
    const name = parts[parts.length - 1];

    return new HtmlPlugin({
      filename: name,
      template: path.resolve(item),
      inject: true,
    })
  })
}

const cssFiles = scanDirectory('./src/css');
const htmlFiles = scanDirectory('./src/html');
const jsFiles = scanDirectory('./src/js');

module.exports = {
    target: `web`,
    mode: `development`,
    entry: [
        ...jsFiles,
        ...htmlFiles,
        ...cssFiles
    ],
    output: {
        path: path.resolve(__dirname, `build`),
    },
    devtool: `source-map`,
    devServer: {
        static: path.resolve(__dirname, `build`),
        open: true,
        hot: true,
        port: 8080,
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, `src/fonts`),
              to: path.resolve(__dirname, `build/fonts/`),
            },
            {
              from: path.resolve(__dirname, `src/img`),
              to: path.resolve(__dirname, `build/img/`),
            },
            {
              from: path.resolve(__dirname, `src/css`),
              to: path.resolve(__dirname, `build/css`)
            }
          ],
        }),
    ].concat( generateHtmlPlugins(`./src/html`)),
    module: {
      rules: [
          {
              test: /\.(js)$/,
              exclude: /(node_modules)/,
              use: [
                  "babel-loader"
              ],
          },
          {
              test: /\.(css)$/,
              include: path.resolve(__dirname, `src/css`),
              use: [
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: true,
                    url: false,
                  }
                },
              ],
          },
          {
              test: /\.(html)$/,
              include: path.resolve(__dirname, `src/html`),
              loader: "html-loader",
              options: {
                sources: false,
              },
          },
          {
            test: /.html$/,
            loader: 'string-replace-loader',
            options: {
              multiple: [
                {
                  search: '<link rel="stylesheet" href="../css',
                  replace: '<link rel="stylesheet" href="./css',
                  flags: 'g'
                },
                {
                  search: '../img',
                  replace: './img',
                  flags: 'g'
                }
              ]
            }
          }

      ]
  },
};
