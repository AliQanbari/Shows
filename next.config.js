/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  target: 'serverless',
  /*webpack: function (config) {
    config.module.rules.push({
      test: /\.json$/,
      use: 'raw-loader',
    })
    return config
  },*/
}
  
  module.exports = nextConfig