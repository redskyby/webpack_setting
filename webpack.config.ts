import webpack from "webpack";
import { buildWebpack } from "./config/buildConfig/buildWebpack";
import { BuildMode, BuildPaths, BuildPlatform } from "./config/buildConfig/types/types";
import path from "path";

interface EnvVariables {
    mode: BuildMode;
    // npm run start -- --env port=5000
    // можно запускать и так, числом задается любой порт
    port: number;
    //  npm run build:prod analyzer=true и запуститься analyzer
    analyzer?: boolean;
    platform: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, "build"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? "development",
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? "desktop",
    });

    return config;
};
