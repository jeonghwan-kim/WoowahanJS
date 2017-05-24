import Woowahan from '../../../../index'
import Template from './hello-view.hbs'

export default Woowahan.View.create('Hello', {
  className: 'container',
  template: Template,

  // events: {
  //   '@click #btn': 'onClick(#btn)'
  // },

  initialize() {
    // this.setModel({msg: 'hello world!'});
    this.super();
  },

  // onClick(val) {
  //   alert('val: ' + val)
  //   console.log(val)
  // }
})
