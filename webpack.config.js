const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.[name].[contenthash].js",
        clean: true
    }
};