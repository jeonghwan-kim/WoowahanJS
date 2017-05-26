import Woowahan from '../../../index'
import HelloView from './hello'

global.$ = global.jQuery = Woowahan.$

const joinSchema = Woowahan.Schema.create('JoinSchema', {
  id: Woowahan.Types.String({required: true, min: 4, max: 20}),
  name: Woowahan.Types.String({required: true, max: 30}),
  email: Woowahan.Types.Email({required: true}),
  memo: Woowahan.Types.String(),
  valid: Woowahan.Types.Boolean({required: true})
})

const myTask = Woowahan.Reducer.create('save-user-profile', joinSchema, function(data) {
  this.finish(data)
})

const app = new Woowahan()
app.use(myTask)

app.on('error', errors => alert(errors.map(e => e.message).join('\n')))

app.start({
  url: '/',
  view: HelloView,
  container: '#app',
})
