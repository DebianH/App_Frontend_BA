const path = require("path");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Configuración personalizada para Metro
const config = {
  transformer: {
    // Agrega el transformador para archivos SVG
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    // Elimina 'svg' de las extensiones de recursos
    assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
    // Asegúrate de añadir 'svg', 'png', y otros formatos a las extensiones fuente
    sourceExts: [...defaultConfig.resolver.sourceExts, "svg", "png", "jpg"],
    // Define los campos principales de resolución
    resolverMainFields: ["sbmodern", "react-native", "browser", "main"],
  },
  // Añade carpetas adicionales que deberían observarse por Metro
  watchFolders: [path.resolve(__dirname, "../")],
};

// Exporta la configuración combinada
module.exports = mergeConfig(defaultConfig, config);
