import Ember from 'ember';

export default Ember.Component.extend({

   

    skillPoints: Ember.computed(function(){
        // 50 0, 2 35, 21 90, 79 90, 98 35

        let pScale = this.get('programSkill')/3 * 50;
        let oScale = this.get('orgSkill')/3 * 50;
        let aScale = this.get('artSkill')/3 * 50;
        let lScale = this.get('leadSkill')/3 * 50;
        let cScale = this.get('comSkill')/3 * 50;
        

        let prog= `${50 - Math.cos(Math.PI/2) * pScale} ${50 - Math.sin(Math.PI/2) * pScale} `;
        let org = `${50 - Math.cos(Math.PI/2 + 2*Math.PI/5) * oScale} ${50 - Math.sin(Math.PI/2 + 2*Math.PI/5) * oScale} `;
        let art = `${50 - Math.cos(Math.PI/2 + 4*Math.PI/5) * aScale} ${50 - Math.sin(Math.PI/2 + 4*Math.PI/5) * aScale} `;
        let lead= `${50 - Math.cos(Math.PI/2 + 6*Math.PI/5) * lScale} ${50 - Math.sin(Math.PI/2 + 6*Math.PI/5) * lScale} `;
        let com = `${50 - Math.cos(Math.PI/2 + 8*Math.PI/5) * cScale} ${50 - Math.sin(Math.PI/2 + 8*Math.PI/5) * cScale} `;
        
        
        return prog + org + art + lead + com;
    }),

    twothirdPent: Ember.computed(function(){
        
        let scale = 2/3 * 50;

        let prog= `${50 - Math.cos(Math.PI/2) * scale} ${50 - Math.sin(Math.PI/2) * scale} `;
        let org = `${50 - Math.cos(Math.PI/2 + 2*Math.PI/5) * scale} ${50 - Math.sin(Math.PI/2 + 2*Math.PI/5) * scale} `;
        let art = `${50 - Math.cos(Math.PI/2 + 4*Math.PI/5) * scale} ${50 - Math.sin(Math.PI/2 + 4*Math.PI/5) * scale} `;
        let lead= `${50 - Math.cos(Math.PI/2 + 6*Math.PI/5) * scale} ${50 - Math.sin(Math.PI/2 + 6*Math.PI/5) * scale} `;
        let com = `${50 - Math.cos(Math.PI/2 + 8*Math.PI/5) * scale} ${50 - Math.sin(Math.PI/2 + 8*Math.PI/5) * scale} `;
        
        return prog + org + art + lead + com;
    }),

    onethirdPent: Ember.computed(function(){
        
        let scale = 1/3 * 50;
        
        let prog= `${50 - Math.cos(Math.PI/2) * scale} ${50 - Math.sin(Math.PI/2) * scale} `;
        let org = `${50 - Math.cos(Math.PI/2 + 2*Math.PI/5) * scale} ${50 - Math.sin(Math.PI/2 + 2*Math.PI/5) * scale} `;
        let art = `${50 - Math.cos(Math.PI/2 + 4*Math.PI/5) * scale} ${50 - Math.sin(Math.PI/2 + 4*Math.PI/5) * scale} `;
        let lead= `${50 - Math.cos(Math.PI/2 + 6*Math.PI/5) * scale} ${50 - Math.sin(Math.PI/2 + 6*Math.PI/5) * scale} `;
        let com = `${50 - Math.cos(Math.PI/2 + 8*Math.PI/5) * scale} ${50 - Math.sin(Math.PI/2 + 8*Math.PI/5) * scale} `;
        
        return prog + org + art + lead + com;
    }),
     
    didInsertElement(){
        $("body").append(`<md-tooltip id="svg-tooltip" class="md-tooltip md-panel md-show md-origin-top hidden tooltip"></md-tooltip>`);
    }
});
