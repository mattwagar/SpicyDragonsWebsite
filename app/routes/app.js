import Ember from 'ember';

export default Ember.Route.extend({
    //Redirects users from route home.index to home.projects
  redirect(model, transition) {
      console.log(transition);
    let self = this;
    model.routeName = transition.targetName;
    if (transition.targetName === "app.index") {
        self.controllerFor('app').transitionToRoute('app.home');
    }
  },

  model(){
      return {
          routeName: null
      };
  }
});
