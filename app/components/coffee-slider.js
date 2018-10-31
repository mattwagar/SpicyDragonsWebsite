import Ember from 'ember';

export default Ember.Component.extend({

    classNames:["coffee-slider-component"],

    didInsertElement(){
        this.$('#coffee-circle').css("top", (this.$("#coffee-slider").height()-16) * this.get('step')/this.get('max'));
    }
});
