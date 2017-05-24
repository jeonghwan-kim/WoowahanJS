import Woowahan from '../../../index'
import HelloView from './view/hello-view'
import UsersView from './view/users-view'
import UserDetailView from './view/user-detail-view'

import Users from './reducer/users'
import UserDetail from './reducer/user-detail'

global.$ = global.jQuery = Woowahan.$

const app = new Woowahan()

app.use(Users)
app.use(UserDetail)

const LayoutView = Woowahan.View.create('LayoutView', {
  template: `
    <h1>Layout view</h1>
    <ul>
        <li><a href="#/">home</a></li>
        <li><a href="#/users">users</a></li>
    </ul>
    <div class="content"></div>
  `,

  initialize() {
    this.super()
  }
})

app.use(Woowahan.Layout('#app', LayoutView))

app.start({
  url: '/',
  container: '.content',
  layout: 'LayoutView',
  view: HelloView,
  pages: [
    { url: '/users', view: UsersView },
    { url: '/users/:id', view: UserDetailView },
  ]
})