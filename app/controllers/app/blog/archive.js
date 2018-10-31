import Ember from 'ember';
import groupBy from 'ember-group-by';

export default Ember.Controller.extend({
    posts: Ember.computed.reads("model.posts.items"),
    // newToken: false,
    // initialize:false,
    allPosts: Ember.computed.reads('posts'),
    nextPageToken: Ember.computed('model.posts.nextPageToken', function () {
        if (this.get('model.posts.nextPageToken') === undefined) return null;
        return this.get('model.posts.nextPageToken');
    }),
    chosenTag: "",

    actions: {
        loadMore() {
            let self = this;
            let allPosts = this.get('allPosts');
            let token = this.get('nextPageToken');
            Ember.$.get(`https://www.googleapis.com/blogger/v3/blogs/1441926061414130557/posts?maxResults=10&key=AIzaSyDQdja3gFxx5twAFkbsrDmHPFVb5TZLlUs&pageToken=${token}`, function (response) {
                if (response.items) {
                    self.set('allPosts', allPosts.concat(response.items));
                    self.set('nextPageToken', response.nextPageToken);
                } else {
                    self.set('nextPageToken', null);                    
                }
            });
        },
    }
});
