
var VOID = [
  'area',
  'base',
  'br',
  'circle',
  'col',
  'ellipse',
  'embed',
  'img',
  'input',
  'line',
  'link',
  'mesh',
  'meta',
  'param',
  'path',
  'polygon',
  'polyline',
  'rect',
  'source',
  'track',
  'wbr'
]

const escapeRegExp = /["&'<>]/g
const escapeLookup = new Map([
  ['"', '&quot;'],
  ['&', '&amp;'],
  ["'", '&#39;'],
  ['<', '&lt;'],
  ['>', '&gt;']
])

function render (node) {
  const { nodeName, attributes, children } = node

  var attrs = ''
  for (var attr in attributes) {
    attrs += ' ' + attr + '="' + (attributes[attr]).replace(escapeRegExp, escapeLookup) + '"'
  }

  var result = ''
  for (var i = 0; i < children.length; i++) {
    const node = children[i]
    result += (typeof node === 'object' ? render(node) : node)
  }

  const el = '<' + nodeName + attrs

  if (VOID.indexOf(nodeName) !== -1) {
    return el + '/>'
  }

  return el + '>' + result + '</' + nodeName + '>'
}

module.exports = render
