import Ember from 'ember';

export default Ember.Component.extend({
    tagName:"rect",
    attributeBindings:["x", "y", "width", "height"],
    classNames:["svg-tooltip"],

    mouseEnter(){
        console.log('something is happening?');
    $("#svg-tooltip").removeClass('hidden');
    $("#svg-tooltip").html(`
      <div class="tooltip-title">${this.get('title')}</div>
      <div>${this.get('desc')}</div>
    `);
  },

  mouseMove(event){
      console.log($("#svg-tooltip").width());
    $("#svg-tooltip").css("top", event.pageY - $("#svg-tooltip").height() - 10);
    $("#svg-tooltip").css("left", event.pageX - $("#svg-tooltip").width()/2);
  },

  mouseLeave(){
    $("#svg-tooltip").addClass('hidden');
    // $("#svg-tooltip").html("");
  },
});
