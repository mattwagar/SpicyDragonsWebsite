import Ember from 'ember';

export default Ember.Controller.extend({

    showDialog: false,

    selectedProfileTab: "aboutme",

    profiles: Ember.computed(function () {
        return [
            Ember.Object.create({
                id: "mmoore",
                pic: "assets/images/profile-placeholder.png",
                name: 'Natasha Warshawsky',
                role: 'Art Lead',
                color: 'mwagar-color',
                icon: 'create',
                myrole: "woah boy",
                aboutme: "Test123"
            }),
            Ember.Object.create({
                id: "sdreisbach",
                pic: "assets/images/profile-placeholder.png",
                name: 'Ruben Guzman',
                role: 'Programming Lead',
                color: 'mwagar-color',
                icon: 'code',
                myrole: "woah boy",
                aboutme: "Test123"
            }),
            Ember.Object.create({
                id: "mwagar",
                pic: "assets/images/mwagar_profile_pic.jpg",
                name: 'Matthew Wagar',
                role: 'Unity Developer',
                color: 'mwagar-color',
                icon: 'code',
                myrole: "woah boy",
                aboutme: "Test123"
            }),
            Ember.Object.create({
                id: "jlipinski",
                pic: "assets/images/profile-placeholder.png",
                name: 'Tom Bavaria',
                role: 'Artist',
                color: 'mwagar-color',
                icon: 'create',
                myrole: "woah boy",
                aboutme: "Test123"
            }),
            Ember.Object.create({
                id: "cbelser",
                pic: "assets/images/profile-placeholder.png",
                name: 'Dimitri Couwenberg',
                role: 'Artist',
                color: 'mwagar-color',
                icon: 'create',
                myrole: "woah boy",
                aboutme: "Test123"
            }),
            Ember.Object.create({
                id: "clucas",
                pic: "assets/images/profile-placeholder.png",
                name: 'Steven Lilley',
                role: 'Unity Developer',
                color: 'mwagar-color',
                icon: 'code',
                myrole: "woah boy",
                aboutme: "Test123"
            }),

        ]
    }),

    actions: {
        closeDialog(profile) {
            profile.set('showDialog', false);
            this.set('selectedProfileTab', 'aboutme');
        },
        openDialog(profile) {
            profile.set('showDialog', true);

            //HACK fixes weird visual bug (sometimes)
            $(`#${profile.get('id')}`).removeClass('md-focused');
        }
    }
});
