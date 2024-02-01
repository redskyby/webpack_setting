import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = "production" | "development";

interface EnvVariables {
    mode: Mode;
    // npm run start -- --env port=5000
    // можно запускать и так, числом задается любой порт
    port: number;
}

export default (env: EnvVariables) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "index.ts"),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bundle.[name].[contenthash].js",
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
            new webpack.ProgressPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        devServer: {
            port: env.port ?? 3000,
            open: true,
        } as DevServerConfiguration,
    };

    return config;
};
