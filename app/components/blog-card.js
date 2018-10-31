import Ember from 'ember';

export default Ember.Component.extend({

    post: Ember.computed(function(){
        let item = this.get('item');
        let imgReg = /<img(.*?)\/>/g;
        let srcReg = /src="(.*?)"/g;
        let image = imgReg.exec(item.content);
        if (item.content.includes("img")) { item.imgSrc = srcReg.exec(image[0])[1] } 
        else {item.imgSrc = "assets/images/blog/blog_placeholder.png"}
        imgReg.lastIndex = 0;
        srcReg.lastIndex = 0;
        return item;
    })
});
