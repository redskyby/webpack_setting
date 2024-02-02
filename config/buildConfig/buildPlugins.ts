import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(): Configuration["plugins"] {
    return;
    [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
        isDev ? new webpack.ProgressPlugin() : undefined,
        isProud &&
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            }),
    ].filter(Boolean);
}
