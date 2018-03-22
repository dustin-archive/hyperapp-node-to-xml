
const { h } = require('hyperapp')
const render = require('./')
const test = require('tape')

test('html strings', t => {
  t.plan(3)

  t.is(
    render(
      h('div', { class: 'foo', type: 'test' }, 'bar')
    ),
    '<div class="foo" type="test">bar</div>',
    'single element'
  )

  t.is(
    render(
      h('div', { class: 'bar', type: 'test' }, [
        h('span', null, 'foo'),
        h('span', null, 'bar')
      ])
    ),
    '<div class="bar" type="test"><span>foo</span><span>bar</span></div>',
    'basic nesting'
  )

  t.is(
    render(
      h('img', { src: 'dat://example.com' })
    ),
    '<img src="dat://example.com"/>',
    'void element'
  )

  t.is(
    render(
      h('p', { test: 'foo "bar"' }, 'Hello world')
    ),
    '<p test="foo \\"bar\\"">Hello world</p>',
    'escapes quotes'
  )

  // t.is(
  //   render(
  //     h('canvas')
  //   ),
  //   '<canvas></canvas>',
  //   'no body'
  // )

  // t.is(
  //   render(
  //     h('script', { async: true }, 'foo()')
  //   ),
  //   '<script async="true">foo()</script>',
  //   'got non-string data'
  // )

  // t.is(
  //   render(
  //     h('path', { d: 'M0,100' }, [ h('boo') ])
  //   ),
  //   '<path d="M0,100"><boo></boo></path>',
  //   'allow overriding void elements'
  // )
})
