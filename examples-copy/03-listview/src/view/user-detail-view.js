import Woowahan from '../../../../index'
import Template from './user-detail-view.hbs'
import { FETCH_USER_DETAIL } from '../action'

export default Woowahan.View.create('UserDetailView', {
  template: Template,

  initialize() {
    console.log('[view][user-detail]initilize()')
    this.super();
  },

  viewDidMount() {
    console.log('[view][user-detail]viewDidMount()', this.params)
    this.dispatch(Woowahan.Action.create(FETCH_USER_DETAIL, { id: this.params.id }), this.fetchUser)
  },

  fetchUser(data) {
    console.log('[view][user-detail]fetchUser()', data)
    this.setModel({
      id: data.id,
      name: data.name
    })
  }
})
