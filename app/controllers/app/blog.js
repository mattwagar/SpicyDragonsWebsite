import Ember from 'ember';

export default Ember.Controller.extend({

    posts: Ember.computed('model.posts', function(){
        let response = this.get('model.posts').responseJSON.items;
        return response;
    })
});
