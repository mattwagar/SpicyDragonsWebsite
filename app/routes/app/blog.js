import Ember from 'ember';

export default Ember.Route.extend({
    redirect(model, transition) {
        console.log(transition);
        if (transition.targetName === "app.blog.index") {
            this.controllerFor('app').transitionToRoute('app.blog.archive');
            // this.transitionTo('app.blog.archive'); // Implicitly aborts the on-going transition.
        }
    }

});
