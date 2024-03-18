const MiniCssExtractPlugin = require('mini-css-extract-plugin');  
// Importando Eslint plugin para webpack
const ESlintPlugin = require("eslint-webpack-plugin");
// Notas importanes
// El archivo de configuración debe usar ES5

// Importar un administrador de rutas de archivos
const path = require('path');

// Exportamos un objeto de configuración
// que sera usado por webpack
module.exports = {
  // 1. El archivo de entrada o indexador
  entry: "./client/index.js",
  // 2. Especificar el archivo de salida
  output: {
    // 2.1 Ruta absoluta de salida
    path: path.resolve(__dirname, "public"),
    // 2.2 Nombre del archivo de salida
    filename: "bundle.js"
  },
  // 3. Configurando el servidor de desarrollo
  devServer: {
    // 3.1 Folder de archivos estáticos
    static: path.join(__dirname, "public"),
    // 3.2 Puerto del servidor de desarrollo
    port: 8080,
    // 3.3 Definiendo el host
    host: "localhost"
  },
  // Agregando un modulo a webpack
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    'modules': false,
                    'useBuiltIns': 'usage',
                    'targets': '> 0.25%, not dead',
                    'corejs': 3
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Archivo css de salida
      filename: 'styles/app.css'
    }),
    new ESlintPlugin()
  ]
};