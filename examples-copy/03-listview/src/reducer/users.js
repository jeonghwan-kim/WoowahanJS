import Woowahan from '../../../../index';
import { FETCH_USERS } from '../action'

const users = [
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Bek'},
  {id: 3, name: 'Chris'},
]

export default Woowahan.Reducer.create(FETCH_USERS, function(options) {
  setTimeout(_=> {
    this.finish(users)
  }, 200)
});
