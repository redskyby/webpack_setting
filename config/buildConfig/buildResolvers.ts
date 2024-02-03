import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildResolvers(options: BuildOptions): Configuration["resolve"] {
    console.log(options.paths.src);
    return {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "@": options.paths.src,
        },
    };
}
