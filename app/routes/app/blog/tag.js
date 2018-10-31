import Ember from 'ember';

export default Ember.Route.extend({
    redirect(model, transition) {
        console.log(transition);
        if (transition.targetName === "app.blog.index") {
            this.controllerFor('app').transitionToRoute('app.blog.archive');
            // this.transitionTo('app.blog.archive'); // Implicitly aborts the on-going transition.
        }
    },

    model(params) {
        console.log(params);
        return Ember.RSVP.hash({
            // posts: Ember.$.get("https://www.googleapis.com/blogger/v3/blogs/1441926061414130557/posts?key=AIzaSyAlS7uOny5TTTmpMla3QNRU8Hy0KLEZqSg", function (response) {
            posts: Ember.$.get(`https://www.googleapis.com/blogger/v3/blogs/1441926061414130557/posts/search?q=label:"${params.tag_name}"&maxResults=20&key=AIzaSyAlS7uOny5TTTmpMla3QNRU8Hy0KLEZqSg`, function (response) {
                return response;
            }),
            tagName: params.tag_name
        })
    },

});
