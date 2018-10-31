import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return Ember.RSVP.hash({
            // posts: Ember.$.get("https://www.googleapis.com/blogger/v3/blogs/1441926061414130557/posts?key=AIzaSyAlS7uOny5TTTmpMla3QNRU8Hy0KLEZqSg", function (response) {
            posts: Ember.$.get("https://www.googleapis.com/blogger/v3/blogs/1441926061414130557/posts?maxResults=10&key=AIzaSyAlS7uOny5TTTmpMla3QNRU8Hy0KLEZqSg", function (response) {
                return response;
            }),
            // postssearch: Ember.$.get('https://www.googleapis.com/blogger/v3/blogs/1441926061414130557/posts/search?q=label:"Week 1"&key=AIzaSyAlS7uOny5TTTmpMla3QNRU8Hy0KLEZqSg', function (response) {
                
            //     return response;
            // }),
        })
    },
});
