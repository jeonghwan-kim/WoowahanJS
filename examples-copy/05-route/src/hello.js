import Woowahan from '../../../index'

global.$ = global.jQuery = Woowahan.$

export default Woowahan.View.create('HelloView', {
  template: `
    <h1><span data-role="bind" data-name="name"></span></h1>
  `,

  initialize() {
    this.setModel({
      name: 'Hello View'
    })
    this.super()
  }
})

