
export  function buildBabelLoaders(isDev : boolean){
    return {
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
    }
}