const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["stryle-loader", {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: true,
                            localIdentName: "[name]__[local]__[hash:base64:5]",
                        }
                    }
                }]

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "static/assets/"
                    },
                },
            },
        ],

    },

    resolve: {
        extensions: ['.js', '.jsx']
      },

    plugins: [new HtmlWebpackPlugin({template: "./public/index.html"})],
    devServer: {
        port: 3000,
    }
};