const withMarkdoc = require('@markdoc/next.js')
// const path = require('path')

module.exports = withMarkdoc({
  /**
   * @see https://markdoc.io/docs/nextjs#options
   */
  mode: 'server', // 'static' | 'server',
  //schemaPath: path.join(__dirname, 'markdoc')
})({
  pageExtensions: ['js', 'md'],
})
