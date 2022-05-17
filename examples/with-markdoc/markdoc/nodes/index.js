/* Use this file to export your markdoc nodes */
const { nodes } = require('@markdoc/markdoc')

function generateID(children, attributes) {
  if (attributes.id && typeof attributes.id === 'string') {
    return attributes.id
  }
  return children
    .filter((child) => typeof child === 'string')
    .join(' ')
    .replace(/[?]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

export default {
  ...nodes,
  heading: {
    ...nodes.heading,
    transform(node, config) {
      const base = nodes.heading.transform(node, config)
      base.attributes.id = generateID(base.children, base.attributes)
      return base
    },
  },
}
