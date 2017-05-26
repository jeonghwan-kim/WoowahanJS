import Woowahan from '../../../index'
import MyModalTemplate from './my-modal.hbs'
import HelloTemplate from './hello.hbs'

require('./modal.css')

global.$ = global.jQuery = Woowahan.$

const app = new Woowahan()

app.use(Woowahan.Component('MyModal', Woowahan.View.create('MyModal', {
  template: MyModalTemplate,

  events: {
    'click #close': 'onClose'
  },

  initialize(data) {
    console.log('[MyModal]initialzie()', data)
    this.setModel(data)
    this.super()
  },

  viewDidMount() {
    console.log('[MyModal]viewDidMount()')
  },

  onClose() {
    console.log('[MyModal]onClose()')
    this.dispatch(Woowahan.Event.create('closed', {msg: 'close msg'}))
  }
})))

app.start({
  url: '/',
  container: '#app',
  view: Woowahan.View.create('Hello', {
    template: HelloTemplate,

    events: {
      'click #btn1': 'onClickModalBtn',
      '@closed #my-modal': 'onCloseMyModal'
    },

    initialize() {
      this.myModal = null
      this.setModel({
        msg: 'will be replace msg from modal'
      })

      this.super()
    },

    viewWillMount(renderData) {
      console.log('[Hello]viewWillMount()', renderData)
      return renderData
    },

    onClickModalBtn() {
      const MyModal = this.getComponent('MyModal')
      this.myModal = this.addView('#my-modal', MyModal, {title: '공지사항'})
    },

    onCloseMyModal(msg) {
      console.log('[Hello]onCloseMyModal()', msg)
      if (!this.myModal) return

      this.removeView('#my-modal')
      this.myModal = null

      this.setModel({
        msg: JSON.stringify(msg)
      })
      // this.msg = JSON.stringify(msg)
      this.updateView()
    }
  })
})
