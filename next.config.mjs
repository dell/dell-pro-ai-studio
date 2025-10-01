import nextra from "nextra";
const isDev = process.env.NODE_ENV === 'development'

const withNextra = nextra({
    search: true,
    defaultShowCopyCode: true,
});

export default withNextra({
    // ... Other Next.js config options
    output: 'export',
    basePath: isDev ? '' : '/dell-pro-ai-studio',
    assetPrefix: isDev ? '' : '/dell-pro-ai-studio/',
    images: {
        unoptimized: true,
    },
     webpack(config) {
    // Treat YAML as a raw string
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "asset/source",
    });

    return config;
  },

});
