import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
export function buildPlugins({ mode, paths, analyzer }: BuildOptions): Configuration["plugins"] {
    const isDev: boolean = mode === "development";
    const isProud: boolean = mode === "production";

    const plugins: Configuration["plugins"] = [new HtmlWebpackPlugin({ template: paths.html })];

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }

    if (isProud) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            }),
        );
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}
