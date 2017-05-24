import Woowahan from '../../../../index'
import Template from './users-view.hbs'
import { FETCH_USERS } from '../action'

export default Woowahan.CollectionView.create('Users', {
  rowContainer: 'ul',
  rowView: Woowahan.ItemView.create('User', {
    tagName: 'li',
    template: '<span data-role="bind" data-name="name"></span>',
    onSelectedRow(event, trigger) {
      trigger({ id: this.getModel('id') });
    }
  }),

  template: Template,

  events: {
  },

  initialize() {
    console.log('[view][users]initilize()')
    this.super();
  },

  viewDidMount() {
    console.log('[view][users]viewDidMount()')
    this.dispatch(Woowahan.Action.create(FETCH_USERS), this.fetchUsers)
  },

  fetchUsers(data) {
    console.log('[view][users]fetchUsers()', data)
    this.reload(data)
  },

  onSelectedRow(row) {
    console.log('[view][users]onSelectedRow()', row, this.getRouteTables('UserDetailView'))
    window.location.hash = this.getRouteTables('UserDetailView', { id: row.id })
  }
})
