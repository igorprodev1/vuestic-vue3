
const getLastCommitHash = () => {
  const hash = require('child_process').execSync('git rev-parse HEAD').toString()

  return hash.slice(0, 6)
}
// src/vue-book/book-main.ts
module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
    },
  },
  configureWebpack: {
    plugins: [
      new (require('webpack')).DefinePlugin({
        VERSION: JSON.stringify(require('./package.json').version),
        TIMESTAMP: JSON.stringify(new Date().toUTCString()),
        COMMIT: JSON.stringify(getLastCommitHash()),
      }),
    ],
  },
}
