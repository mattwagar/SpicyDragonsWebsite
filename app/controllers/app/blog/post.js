import Ember from 'ember';

export default Ember.Controller.extend({

    // post_id: Ember.computed.reads('model.post_id'),

    post: Ember.computed.reads('model.post'),

    title: Ember.computed("model.post", "post", function(){
        let post = this.get("post");
        console.log(post.responseText);
        return post;
    })

    // posts: Ember.computed(function () {
    //     return [
    //         Ember.Object.create({
    //             id: "1",
    //             pic: "assets/images/blog/level_design1_square.png",
    //             title: 'Level Design Structure and Layout of Remembrance',
    //             icon: 'extension',
    //             author: 'Matthew Wagar',
    //             date: '11/1/2017',                
    //             showDisplay: false,
    //             text: [
    //             `In Remembrance, there are many mechanics to consider when creating a level. Some of the major mechanics are passing through walls, enemy pathing, and memento nests. The player should think about all of these options in both the explore and escape phase of the level.`,
    //             ``,
    //             `In my process of designing a level, I followed a few key principles:`,
    //             `1. Keep the path to and from the memento non-linear, to encourage strategy and emergent gameplay`,
    //             `2. Offer strategies that can be used to win, but aren’t necessary to win`,
    //             `3. Allow the level to be difficult enough that the player may need to redo it, but not so difficult that they can’t make progress`,
    //             ``,
    //             `By following these key principles, to create a multipath level, I started with a single path and branched out. On this single path, I put in enemies that would force the player to go off the beaten path. On this off beaten path, the player can then explore, and understand their surroundings, so then when they pick up the memento they can mentally forge a path back to the safe room.`,
    //             ``,
    //             `In the explore phase, doors are somewhat irrelevant, other than to lure enemies. This is because you aren’t holding the memento, and you can freely pass through walls. However in the escape phase, doors create an imaginary maze that the player must work around to safely bring the memento to the goal room.`
    //             ]
    //         }),
    //         Ember.Object.create({
    //             id: "2",
    //             pic: "assets/images/blog/blog_2.png",
    //             title: 'Overhauling the Enemy Code',
    //             icon: 'code',
    //             author: 'Corwin Belser',
    //             date: '11/8/2017',                
    //             showDisplay: false,
    //             text: [
    //             `My primary task this week was fixing the player-enemy-memento-nest interactions.  Each additional interaction requested was thrown onto the existing code and as a result, became an entangled mess.  A prime example is the how the enemy, memento, and nest work.  Enemies were placing the memento into a nest, and telling the memento and nest that they are now paired. If the player took the memento, the connection had to be broken, but it’s not the enemy’s job.  Two very related actions being handled by different entities.  This decreased code readability, and made new features harder to implement. `,
    //             `The solution was to define all interactions, and delegate them to appropriate locations.  Being so entangled, this required heavy changes to the code for mementos and enemies.  Progress on this had been made in a previous week.  Tragically, I had forgotten to push my code after committing my changes, causing a confusion over my team not seeing the features I had implemented (memento pulse, enemies retrieving memento, etc). Even more tragically, the code had changed too much for an easy merge.  This week I focused on fixing my mistake, and getting all mechanics involving the memento up and running. `,
    //             `17 changed files, 346 lines added, and 224 deleted later and the overhaul was completed.  The enemy code was given a more standardized file name, as well as implementing a state machine to cleanly handle state transitions.  Memento code was broken into components such that the enemy and player were now responsible for picking up and dropping the memento, while the memento itself was only responsible for floating and following its owner.  The nests now have responsibility for detecting mementos entering and exiting, so that an enemy can accurately check its nest.`,
    //             `The ultimate goal I had this week was to allow new features to be simpler to integrate into our existing code.  The interactions between all of our entities are still heavily connected, but the connections are located in the proper locations, such that responsibility lies with one entity.  My final task for this project is documentation.  As a true Computer Science major, I left it to last, and have my work cut out for me.`,
    //             ]
    //         }),
    //         Ember.Object.create({
    //             id: "3",
    //             pic: "assets/images/blog/blog_3.png",
    //             title: 'Too Many Hats',
    //             icon: 'code',
    //             author: 'Joseph Lipinski',
    //             date: '11/12/2017',                
    //             showDisplay: false,
    //             text: [
    //             `Some of the time in a project you must stray outside your comfort zone. Being a computer science major, I feel that programming is probably one of my strongest skills and really enjoy working in this area. But sometimes there is work that must be done and you’re the one that’s going to do it!`,
    //             `That’s basically how I ended up as both a 3D modeler and sound designer for our game.  Luckily, I’ve done work in Maya before for my animation classes so creating some basic models was a fun refresher into the art side of game development. Using what I have learned in class, and applying a low-poly style made the process much easier.`,
    //             ` Below is a screenshot of the table that I modeled out. Earlier I mentioned that I had also became the sound designer for our game. In this regard I have very little experience. Times like this are always a wonderful opportunity to learn and grow. Over the next few weeks I’ll become an audio master!`,
    //             ]
    //         }),
    //         Ember.Object.create({
    //             id: "4",
    //             pic: "assets/images/blog/blog_4.png",
    //             title: 'Beta Level Is In!!!',
    //             icon: 'code',
    //             author: 'John Harvey',
    //             date: '11/15/2017',                
    //             showDisplay: false,
    //             text: [
    //             `So, this week was a bit on the heavy side for the design department, but it was
    //             expected. At the start of the week the team was tasked with concepting and creating
    //             “tutorial” like levels. I spent a good bit of time coming up with some cool concepts.
    //             The team overall deemed them to be heavier than expected on the mechanical side…I
    //             must have misinterpreted them. After a mid-week meeting, I was tasked with creating
    //             and populating our beta level. After creating some assets, myself and building other
    //             members tutorial that they couldn’t get to, I dove head first into the beta.`,
    //             `Three hours into it, half the level base was made, but I needed sleep so I took a
    //             break. The next day I was back in the saddle. First, I finished the rooms, then went
    //             into making unique prefabs to populate the scene.`,
    //             `Then I put those objects in
    //             and added lights along with enemies
    //             and enemy pathing. After all that,
    //             Corwin helped me figure out why
    //             my Navmesh wasn’t baking and
    //             we’re off. Or we would be, but
    //             enemy animations broke the AI ☹.`,
    //             ]
    //         }),
    //         Ember.Object.create({
    //             id: "5",
    //             pic: "assets/images/blog/blog_5.png",
    //             title: "It's Alive!",
    //             icon: 'code',
    //             author: 'Michael Moore',
    //             date: '11/15/2017',                
    //             showDisplay: false,
    //             text: [
    //             `Well hello adoring fans… this week Chris Lucas and myself decided to get our animation on. It 
    //             all started with a little reading about the rig required for mocap. After a couple of rigs and a 
    //             couple of attempts we found exactly what we needed. After multiple attempts at weight 
    //             painted Rem and the Screen head were ready to rock and roll.`,
    //             `Bum bum bum…. And for the best part… Chris knew how to use motion capture. So we booked 
    //             us the lab and went to town for about three hours. Luckily… thank you sweet baby Jesus….. 
    //             mocap went down without a single hiccup. We were able to record the full list of animations 
    //             non-stop. These animations should be in this builds week.`,
    //             ]
    //         }),
    //         Ember.Object.create({
    //             id: "6",
    //             pic: "assets/images/blog/blog_6.png",
    //             title: "Textures for Days…",
    //             icon: 'code',
    //             author: 'Sierra Dreisbach',
    //             date: '11/15/2017',                
    //             showDisplay: false,
    //             text: [
    //             `Concept art is done, orthos and models are coming in, now it’s time to texture all
    //             of them! Chris and I have been texturing most of the week, and everything looks
    //             very….blue, but in a good way! Frozen hospital aesthetic, here we come. Again, this is
    //             a good thing! This is exactly what we were looking for and it’s super exciting to see it all
    //             come together.`,
    //             `I spent a lot of time working on the logo this week and last week as well. I’ve
    //             finally finished it! I was going for a worn down creepy vibe, I feel like it comes across
    //             well. After trying a bunch of different, heart rate monitor designs (the one and only
    //             hospital-logo-tie-in idea I had), I finally decided on one. Figuring out that I could make
    //             the heart rate part of the “M” in the word “reMembrance” was one of the best moments
    //             in my life.`,
    //             ]
    //         }),
            // Ember.Object.create({
            //     id: "7",
            //     pic: "assets/images/blog/blog_6.png",
            //     title: "Eye of the Hurricane",
            //     icon: 'code',
            //     author: 'Noah Nam',
            //     date: '11/15/2017',                
            //     showDisplay: false,
            //     text: [
            //     `This week I wasn't assigned much to do. I had adding a death animation for Rem, creating a tutorial
            //     level for the X-ray and dash mechanic, and adding tutorial text to the walls of levels.`,
            //     `<b>Positive Outcomes</b>`,
            //     `I got my tasks completed.`,
            //     `Fixed a few bugs that stopped the player from progressing through the game.`,
            //     `<b>Negative Outcomes</b>`,
            //     `Our codebase is getting very messy, and our project hierarchy has multiple copies of the same prefabs,
            //     which is leading to confusion on which prefab to update.`,
            //     `Next term, there'll be double the people working on this project. We'll need to clean the code and asset
            //     folder or it'll be a rough winter term.`,
            //     ]
            // }),
        // ];
    // }),

    // actions: {
    //     togglePost(post){
    //         post.set("showDisplay", !post.get('showDisplay'));
    //     }
    // }
});
