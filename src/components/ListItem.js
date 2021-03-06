const h = require ('react-hyperscript')
const React = require('react')

const ListItem = React.createClass({
  onUp: function (e){
    this.props.item.score = this.props.item.score +1
    this.props.onScoreChange(this.props.item)
  },
  onDown: function (e){
    if (this.props.item.score === 0) return
    this.props.item.score = this.props.item.score -1
    this.props.onScoreChange(this.props.item)
  },

  render: function () {
    const item = this.props.item
    return h('li.mh2', [
       h('a.link.light-blue', {
         target: '_blank',
         href: item.link
       }, item.title),
       h('button.ml1', { onClick: this.onUp }, ['Like']),
       h('button.ml1', { onClick: this.onDown }, ['Dislike']),
       h('span', item.score)

    ])
  }
})
module.exports = ListItem
