import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        // Работает только для дев сервера , если через nginx то надо делать проксирование на index.html
        historyApiFallback: true,
        //Включение hmr
        hot: true,
    };
}
