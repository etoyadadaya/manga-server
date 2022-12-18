import {join, resolve} from "path";
import {Configuration as WebpackConfiguration} from "webpack";
import {Configuration as WebpackDevServerConfiguration} from "webpack-dev-server";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

module.exports = (
    argv: {
      mode: "production" | "development";
      host: string;
      port: string;
    }): Configuration => {
  const mode = argv.mode || "development";

  return {
    mode: "production",
    entry: "./src/client.tsx",
    output: {
      publicPath: "/",
      filename: "app/[chunkhash].js",
      path: resolve(__dirname, "dist"),
      assetModuleFilename: "assets/img/[hash][ext]"
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.scss$/,
          use: mode === "production" ? [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                modules: {
                  mode: "local",
                  localIdentName: "[local]-[hash:base64:6]"
                }
              }
            },
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  outputStyle: "compressed"
                }
              }
            }
          ] : [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                modules: {
                  mode: "local",
                  localIdentName: "[local]-[hash:base64:6]"
                }
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  outputStyle: "compressed"
                }
              }
            }
          ]
        },
        {
          test: /\.png|jpg|svg|webp|gif/,
          type: "asset/resource",
          generator: {
            filename: "assets/img/[hash][ext]"
          }
        },
        {
          test: /\.woff|woff2|ttf|eot/,
          type: "asset/resource",
          generator: {
            filename: "assets/fonts/[hash][ext]"
          }
        },
        {
          test: /\.json/,
          type: "asset/resource",
          generator: {
            filename: "app/locales/[hash][ext]"
          }
        }
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "./assets/css/[contenthash].css",
        chunkFilename: "assets/css/[contenthash].css"
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/html/index.html",
        minify: true
      }),
      new CopyPlugin({
        patterns: [
          "public"
        ]
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false
      }),
    ],
    performance: {
      hints: false
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all"
      },
      minimize: mode === "production",
      minimizer: [new TerserPlugin()]
    },
    devServer: {
      static: join(__dirname, "public"),
      historyApiFallback: true,
      compress: true,
      host: argv.host,
      port: argv.port || 10880,
      hot: true
    }
  };
}
