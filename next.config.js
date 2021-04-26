const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

// https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#generatesw_plugin

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
  },
});
