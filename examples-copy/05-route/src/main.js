import Woowahan from '../../../index'
import HelloView from './hello'
import Sub1View from './sub1'

global.$ = global.jQuery = Woowahan.$

const LayoutView = Woowahan.View.create('LayoutView', {
  template: `
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#/sub1">Sub1</a></li>
    </ul>
    <div id="container"></div>
  `
})


const app = new Woowahan()
app.use(Woowahan.Layout('#app', LayoutView))

app.start([
  {
    url: '/',
    view: HelloView,
    layout: 'LayoutView',
    container: '#container',
  },
  {
    url: '/sub1',
    view: Sub1View,
    layout: 'LayoutView',
    container: '#container'
  }
], {
  empty: page => {
    alert(`${page} is not found`)
  }
})
