import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        sroute(routeName){
            this.send('selectRoute')(routeName);
        }
    }
});
