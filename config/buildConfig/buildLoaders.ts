import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";
export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
    const isDev: boolean = options.mode === "development";

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: "@svgr/webpack",
                options: {
                    icon: true,
                    svgoConfig: {
                        //Теперь через css стили можно задавать цвет
                        plugins: [
                            {
                                name: "convertColors",
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };

    const cssLoaderWithModule = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
            },
        },
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoaderWithModule,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     use: "ts-loader",
    //     exclude: /node_modules/,
    // };

    const tsLoader = {
        // ts-loader умеет работать с JSX,
        // Если б вы не использовали TS , то нужен был бы babel-loader
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        // подключение hot module
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                },
            },
        ],
    };

    const babelLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-typescript",
                    // Если проблемы с отображением react (React is not defined), то добавляем такие опции. Если нет, то можно так "@babel/preset-react" и всё
                    [
                        "@babel/preset-react",
                        {
                            runtime: isDev ? "automatic" : "classic",
                        },
                    ],
                ],
            },
        },
    };

    // return [assetsLoader, scssLoader, tsLoader, svgLoader];
    return [assetsLoader, scssLoader, babelLoader, svgLoader];
}
