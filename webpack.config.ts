import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

type Mode = "production" | "development";

interface EnvVariables {
    mode: Mode;
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
    };

    return config;
};
