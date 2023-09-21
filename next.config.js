const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
const commonConfig = {
  experimental: {
    typedRoutes: true,
  }
}

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /** @type {import('next').NextConfig} */
    const devConfig = {
      ...commonConfig,
      distDir: '.next-dev',
    }

    return devConfig
  }

  /** @type {import('next').NextConfig} */
  const config = {
    ...commonConfig,
    distDir: '.next',
  }

  return config
}
