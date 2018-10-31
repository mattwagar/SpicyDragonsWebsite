import Ember from 'ember';

export default Ember.Controller.extend({

    selectedRoute: Ember.computed.reads("model.routeName"),

    actions: {
        selectRoute(routeName){
            $('.upper-bite').removeClass('show');
            $('.lower-bite').removeClass('show');
            $('.head-lift').removeClass('show');
            $('.hat-jiggle').removeClass('show');
            $('.shade-translate').removeClass('show');
            $('.shade-scale').removeClass('show');
            $('.headphone-jiggle').removeClass('show');


            $('.upper-bite').outerWidth($('.upper-bite').outerWidth).addClass('show');
            $('.lower-bite').outerWidth($('.lower-bite').outerWidth).addClass('show');
            $('.head-lift').outerWidth($('.head-lift').outerWidth).addClass('show');
            $('.hat-jiggle').outerWidth($('.hat-jiggle').outerWidth).addClass('show');
            $('.shade-translate').outerWidth($('.shade-translate').outerWidth).addClass('show');
            $('.shade-scale').outerWidth($('.shade-scale').outerWidth).addClass('show');
            $('.headphone-jiggle').outerWidth($('.headphone-jiggle').outerWidth).addClass('show');
            
            this.set('selectedRoute', routeName);
        }
    }
});
