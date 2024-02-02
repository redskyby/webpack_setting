import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildWebpack } from "./config/buildConfig/buildWebpack";

type Mode = "production" | "development";

interface EnvVariables {
    mode: Mode;
    // npm run start -- --env port=5000
    // можно запускать и так, числом задается любой порт
    port: number;
}

export default (env: EnvVariables) => {
    const isDev: boolean = env.mode === "development";
    const isProud: boolean = env.mode === "production";

    const config: webpack.Configuration = buildWebpack();

    return config;
};
