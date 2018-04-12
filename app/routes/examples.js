import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('example')
  },

  actions: {
    createExample (example) {
      this.get('store').createRecord('example', example)
        .save()
    },
    deleteExample (example) {
      console.log('in route, example is ', example)
      example.destroyRecord()
    },
    updateExample (example) {
      example.save()
    }
  }
})
