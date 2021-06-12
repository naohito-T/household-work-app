/**
 * @memo 'react-native$': 'react-native-web' で react-native を react-native-web に解決させる。
 */
module.exports = async ({ config }) => {
  config.resolve.alias = {
    'react-native$': 'react-native-web',
  };
  return config;
};
