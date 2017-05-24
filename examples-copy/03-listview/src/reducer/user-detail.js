import Woowahan from '../../../../index';
import { FETCH_USER_DETAIL } from '../action'

const users = [
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Bek'},
  {id: 3, name: 'Chris'},
]

export default Woowahan.Reducer.create(FETCH_USER_DETAIL, function(options) {
  console.log('[reducer][user-detail]', options)
  setTimeout(_=> {
    this.finish(users.filter(u=> u.id === parseInt(options.id, 10))[0] || {id:0, name: 'none'})
  }, 200)
});
