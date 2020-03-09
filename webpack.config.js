// plugins
const { HotModuleReplacementPlugin } = require("webpack")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

// consts
const srcPath = __dirname + "/src"
const distPath = __dirname + "/dist"

module.exports = {
    mode: "development",
    context: srcPath,
    entry: {
        main: "./main.ts",
    },
    output: {
        filename: "[name].js",
        path: distPath,
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(ts|js|vue)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "eslint-loader",
                    options: {
                        fix: true,
                    },
                },
            },
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            {
                test: /\.pug$/i,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        use: ["pug-plain-loader"],
                    },
                    {
                        use: "pug-loader",
                    },
                ],
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                        },
                    },
                ],
            },
            {
                test: /\.styl(us)?$/,
                use: ["vue-style-loader", "css-loader", "stylus-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./assets/templates/index.pug",
        }),
    ],
    resolve: {
        extensions: [".js", ".ts", ".vue"],
        alias: {
            "@": srcPath,
        },
    },
    devServer: {
        contentBase: distPath,
    },
}
