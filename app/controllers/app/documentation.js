import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDoc:"scrum",

    // selectedSell:"sell3w",
    selectedScrum:"rainbopzPres",

    actions:{
        mutate(obj, key){
            this.set(obj, key);
        }
    }
});
