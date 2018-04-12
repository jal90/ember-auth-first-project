import Component from '@ember/component'

export default Component.extend({
  example: {
    text: ''
  },

  actions: {
    createExample () {
      this.sendAction('createExample', this.get('example'))
    }
  }
})
