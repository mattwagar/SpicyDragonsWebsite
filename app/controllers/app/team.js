import Ember from 'ember';

export default Ember.Controller.extend({

    showDialog:false,

    selectedProfileTab:"aboutme",

    profiles: Ember.computed(function () {
        return [            
            Ember.Object.create({
            id: "mwagar",
            pic: "assets/images/mwagar_profile_pic.jpg",
            name: 'Matthew Wagar',
            role: 'Unity Developer',
            color: 'mwagar-color',
            icon: 'extension',
            myrole:"woah boy",
            aboutme:"Test123"
        }),
        ]
    }),

    actions: {
        closeDialog(profile) {
            profile.set('showDialog', false);
            this.set('selectedProfileTab', 'aboutme');
        },
        openDialog(profile){
            profile.set('showDialog', true);

            //HACK fixes weird visual bug (sometimes)
            $(`#${profile.get('id')}`).removeClass('md-focused');
        }
    }
});
