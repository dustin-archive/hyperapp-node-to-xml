
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

var join = arr => {
  var result = ''

  for (var i = 0; i < arr.length; i++) {
    const node = arr[i]

    node && (result += render(arr[i]))
  }

  return result
}

var render = ({ nodeName, attributes, children }) => {
  var attrs = ''

  for (var attr in attributes) {
    attrs += ' ' + attr + '="' + (attributes[attr] + '').replace(/"/g, '\\"') + '"'
  }

  const el = '<' + nodeName + attrs

  if (VOID.indexOf(nodeName) !== -1) {
    return el + '/>'
  }

  return el + '>' + (Array.isArray(children) ? join(children) : children) + '</' + nodeName + '>'
}

module.exports = render
