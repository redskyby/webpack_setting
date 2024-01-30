const path = require("path");

module.exports =  (env) => {
   return {
       mode : env.mode ?? "development",
       entry: path.resolve(__dirname, "src", "index.js"),
       output: {
           path: path.resolve(__dirname, "build"),
           filename: "bundle.[name].[contenthash].js",
           clean: true
       }
   }
};