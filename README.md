# @whaaaley/hyperapp-node-to-xml-string

> Renders Hyperapp nodes of any XML dialect as a string.

## Example

```js
import { h } from 'hyperapp'
import fs from 'fs'
import render from '@whaaaley/hyperapp-to-xml'

const File = () =>
  h('div', null, [
    h('span', { class: 'title' }, 'Thomas Hobbes'),
    h('p', { class: 'body' },
      'Man is distinguished, not only by his reason, ' +
      'but by this singular passion from other animals, ' +
      h('b', null, 'which is a lust of the mind, ') + 'that by a...'
    )
  ])

fs.writeFile('./index.html', render(Files()), err => {
  if (err) throw err
  console.log('The file has been rendered.')
})
```

## Usage

### `render({ nodeName, attributes, children })`

- `nodeName`: The element name.
- `attributes`: An object containing the attributes for the element.
- `children`: A string or array of objects.

```js
render({
  nodeName: 'div',
  attributes: { class: 'foo' },
  children: 'hello world'
})
// '<div class="foo">hello world</div>'


render({
  nodeName: 'div',
  attributes: null,
  children: [
    {
      nodeName: 'span',
      attributes: null,
      children: 'foo'
    },
    {
      nodeName: 'span',
      attributes: null,
      children: 'bar'
    }
  ]
})
// '<div><span>foo</span><span>bar</span></div>'
```

# Prior Art

+ [jamen/h2ml](https://github.com/jamen/h2ml)
+ [semibran/manifest](https://github.com/semibran/manifest)
+ [hyperapp/render](https://github.com/hyperapp/render)
