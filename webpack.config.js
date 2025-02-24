const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Очищает dist перед сборкой
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"], // Вынос CSS в отдельный файл
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // Поддержка новых JS-фич
          },
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"], // Загружаем HTML как строку
      },
      {
        test: /\.scss$/i, // Обрабатываем SCSS
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Берем шаблон из src
      filename: "index.html", // Имя выходного файла
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css", // Имя выходного файла для CSS
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets" }], // Копируем файлы
    }),
  ],
  devServer: {
    static: "./dist",
    port: 3000,
    open: true, // Открывает браузер
    hot: true, // Горячая перезагрузка
  },
};
