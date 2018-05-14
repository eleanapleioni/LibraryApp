var path = require("path");

module.exports = {
    entry: "./src/app.ts",
    output: {
        library: "libraryapp",
        libraryTarget: "var",
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode:"production",
    performance:{
        hints:false
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                 test: /\.css$/,
                 exclude: /node_modules/,
                 use: ['style-loader', 'css-loader']
                },
             {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    }
};

