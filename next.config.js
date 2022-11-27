const nextConfig = {
  reactStrictMode: true,

  webpack: function (config, options) {
    config.resolve.fallback = { fs: false, path: false };
    config.experiments = { asyncWebAssembly: true, layers: true };
    return config;
  },
};

module.exports = nextConfig;
