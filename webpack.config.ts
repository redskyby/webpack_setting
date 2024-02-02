import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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

    const config: webpack.Configuration = {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bundle.[name].[contenthash].js",
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
            isDev ? new webpack.ProgressPlugin() : undefined,
            isProud &&
                new MiniCssExtractPlugin({
                    filename: "css/[name].[contenthash:8].css",
                    chunkFilename: "css/[name].[contenthash:8].css",
                }),
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
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
        devtool: isDev ? "inline-source-map" : false,
        devServer: isDev
            ? ({
                  port: env.port ?? 3000,
                  open: true,
              } as DevServerConfiguration)
            : undefined,
    };

    return config;
};
