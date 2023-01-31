/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|mp3|pdf|webm)$/,
      use: {
        loader: 'url-loader',
      },
    });
    return config;
  },
};

module.exports = nextConfig;
