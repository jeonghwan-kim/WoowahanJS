import Woowahan from '../../../index'

global.$ = global.jQuery = Woowahan.$

export default Woowahan.View.create('HelloView', {
  template: `
    <h1>Schema Example</h1>

    <form>
      <div class="form-group">
        <label for="id">ID</label>
        <input type="text" class="form-control" id="id" name="id" placeholder="id">
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Email">
      </div>
    
      <button type="submit" class="btn btn-default" data-action="save">Save</button>
    </form>
  `,

  events: {
    '@submit form': 'onSave(#id, #name, #email)'
  },

  initialize() {
    this.super()
  },

  onSave(id, name, email, inputs) {
    this.log(`onSave ${id} ${name} ${email} ${inputs}`)

    this.dispatch(Woowahan.Action.create('save-user-profile', {
      id: inputs['id'],
      name: inputs['name'],
      email: inputs['email'],
      valid: true
    }), this.onCompleteSave)

    return false; // 이게 무한 루프 문제의 답인가?
  },

  onCompleteSave(data) {
    this.log(`onCompleteSave() ${data}`)
    alert('saved')
  }


})

