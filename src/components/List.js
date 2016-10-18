const h = require ('react-hyperscript')

module.exports = ({items}) => h('section.list', [
  h('ul', items.map(item =>
  h('li', [
   h('a', {href: item.link}, item.title),
   h('button', ['up']),
   h('button', ['down']),
   h('span', item.score)
   ])
  ))
])
