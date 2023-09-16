const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      distDir: '.next-dev',
    }
  }

  return {
    distDir: '.next',
  }
}
