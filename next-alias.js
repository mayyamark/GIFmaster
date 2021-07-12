const path = require('path');

module.exports = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack(config, options) {
      const newConfig = config;
      newConfig.resolve.modules.push(path.resolve('./'));
      newConfig.resolve.alias.src = path.join(__dirname, './src');
      newConfig.resolve.alias['@app'] = path.join(__dirname, './src');

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(newConfig, options);
      }

      return newConfig;
    },
  };
};
