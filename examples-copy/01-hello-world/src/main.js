import Woowahan from '../../../index'
import HelloView from './hello-view'

global.$ = global.jQuery = Woowahan.$

var app = new Woowahan()

app.start({
  url: '/',
  container: '#app',
  view: HelloView
})