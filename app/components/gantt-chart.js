import Ember from 'ember';

export default Ember.Component.extend({
    classNames:["google-doc"],

    showDialog: false,

    actions:{
        fullscreen(){
            this.set('showDialog', true);
        },
        closeDialog() {
            this.set('showDialog', false);
        },
    }
});
