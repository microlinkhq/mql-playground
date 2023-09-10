/** @type {import('next').NextConfig} */

/**
 * https://dev.to/rashidshamloo/using-styled-components-with-nextjs-v13-typescript-2l6m
 */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.d.ts$/i,
      loader: 'raw-loader'
    })
    return config
  }
}

module.exports = nextConfig
