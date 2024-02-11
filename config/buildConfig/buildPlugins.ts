import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";
export function buildPlugins({ mode, paths, analyzer, platform }: BuildOptions): Configuration["plugins"] {
    const isDev: boolean = mode === "development";
    const isProud: boolean = mode === "production";

    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.icon, "favicon.png") }),
        // Тут добавлена глобальная переменная
        new webpack.DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
            __ENV__: JSON.stringify(mode),
        }),
    ];

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
        // Выносит проверку типов в отдельный поток: не нарушая сборку
        plugins.push(new ForkTsCheckerWebpackPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    if (isProud) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            }),
        );
        plugins.push(
            new CopyPlugin({
                patterns: [{ from: path.resolve(paths.public, "locales"), to: path.resolve(paths.output, "locales") }],
            }),
        );
    }

    //npm run build:prod -- --env analyzer=true
    //и тогда будет аналитика по размерам
    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}
