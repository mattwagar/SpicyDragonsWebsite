import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
        loading: function(transition, route) {
            console.log("i be loading");
            this.intermediateTransitionTo('app.loading');
        }
      }
    
});
