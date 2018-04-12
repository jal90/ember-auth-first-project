import Component from '@ember/component'

export default Component.extend({
  example: {
    text: ''
  },
  actions: {
    deleteExample (example) {
      // console.log('in list, this.get(example) is', this.get('example'))
      this.sendAction('deleteExample', example)
    },
    updateExample (example) {
      this.sendAction('updateExample', example)
    }
  }
})
