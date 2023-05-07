const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const globule = require("globule");
const webpack = require("webpack");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileLoader = require("file-loader");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}
console.log(mode + " mode");

// ================= Write Mixins to bundles ===============

// ----------- Looking for component folders----------
const componentsWriteFiles = [];
const componentsBundles = globule.find([
  "src/components/**/*.pug",
  "!src/components/**/_*.pug",
]);

// ---------- Adding bundle and searchfile to array -------
componentsBundles.forEach(function (bundle) {
  componentsWriteFiles.push(
    bundle +
      "," +
      bundle.split("/").slice(0, 3).join("/").concat("/**/_*.pug") +
      "," +
      path.parse(bundle).dir.split("/").pop()
  );
});

// ---------- Looking for mixins for each folder----------
componentsWriteFiles.forEach(function (fileSet, index) {
  let fileSetArr = fileSet.split(",");
  let bundleFile = fileSetArr[0];
  let searchMixinFile = fileSetArr[1];
  let bundleFileName = fileSetArr[2];
  console.log(
    `${index} FileSetArr = ${fileSetArr} \n bundleFile = ${bundleFile} \n searchMixinFile = ${searchMixinFile} \n bundleFileName = ${bundleFileName}`
  );
  let bundleMixins = globule
    .find(searchMixinFile)
    .map((path) =>
      path
        .split("/")
        .slice(path.split("/").indexOf(bundleFileName) + 1) //--3
        .join("/")
        .split(".")
        .slice(0, -1)
    )
    .reduce((acc, currentItem) => acc + `include ${currentItem}\n`, ``);

  console.log(`Mixins found .. \n  ${bundleMixins}`);

  // -------- Writing mixins to bundle files -----------
  if (bundleFile && bundleMixins) {
    fs.writeFile(bundleFile, bundleMixins, (err) => {
      if (err) throw err;
      console.log("Mixins are generated automatically!");
    });
  } else {
    console.log("Failed to find search and bundle files.");
  }
});
// ----- Getting array of paths for HTMLWebpackPlugin -----
const paths = globule.find(["src/pages/**/*.pug"]);
// =============================================

module.exports = {
  mode: mode,
  entry: {
    index: "./src/pages/index.js",
    "ui-kit": "./src/pages/ui-kit/ui-kit.js",
    landing: "./src/pages/landing/landing.js",
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    // clean: true,
  },
  devtool: "source-map",
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
  devServer: {
    open: true,
    hot: true,
    // port: "auto",
    static: {
      directory: "./src",
      watch: true,
    },
  },
  resolve: {
    alias: {
      jquery: "jquery/src/jquery",
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)/i,
        type: "asset/resource",
      },
      {
        // test: /\.(woff|woff2|eot|ttf|otf)$/i,
        test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        // loader: "file-loader",
        // options: {
        //   name: "images/[name].[hash].[ext]",
        // },
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new webpack.optimize.SplitChunksPlugin({
      chunks: "all",
      name: "vendor",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
    }),

    // new htmlWebpackPlugin({
    //   template: "./src/views/pages/index.pug",
    //   filename: "index.html",
    // }),
    // new htmlWebpackPlugin({
    //   template: "./src/views/pages/ui-kit/ui-kit.pug",
    //   filename: "ui-kit.html",
    // }),
    ...paths.map((path) => {
      return new HtmlWebpackPlugin({
        template: path,
        filename: `${path.split(/\/|.pug/).splice(-2, 1)}.html`,
      });
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path
            .resolve(__dirname, "src/assets/favicons/favicon.ico")
            .replace(/\\/g, "/"),
          to: path
            .resolve(__dirname, "dist/assets/favicons")
            .replace(/\\/g, "/"),
        },
        // {
        //   from: path
        //     .resolve(__dirname, "src/assets/images")
        //     .replace(/\\/g, "/"),
        //   to: path.resolve(__dirname, "dist/assets/images").replace(/\\/g, "/"),
        // },
      ],
    }),
  ],
};
