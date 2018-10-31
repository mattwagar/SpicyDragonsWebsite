import Ember from 'ember';
import groupBy from 'ember-group-by';

export default Ember.Controller.extend({
    allPosts: Ember.computed.reads("model.posts.items"),
    chosenTag: Ember.computed.reads("model.tagName"),
    nextPageToken: Ember.computed('model.posts.nextPageToken', function () {
        if (this.get('model.posts.nextPageToken') === undefined) return null;
        return this.get('model.posts.nextPageToken');
    }),
    actions: {
        nextPage() {
            let nextPageToken = this.get('response.model.posts');
            console.log(nextPageToken);

        },
        loadMore() {
            let self = this;
            let allPosts = this.get('allPosts');
            let token = this.get('nextPageToken');
            Ember.$.get(`https://www.googleapis.com/blogger/v3/blogs/1441926061414130557/posts?maxResults=20&key=AIzaSyAlS7uOny5TTTmpMla3QNRU8Hy0KLEZqSg&pageToken=${token}`, function (response) {
                if (response.items) {
                    self.set('allPosts', allPosts.concat(response.items));
                    self.set('nextPageToken', response.nextPageToken);
                } else {
                    self.set('nextPageToken', null);                    
                }
            });
        }
    }
});
