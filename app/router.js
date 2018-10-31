import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', {
    path: '/'
  }, function() {
    this.route('about');
    this.route('team');
    this.route('blog', function(){
      this.route('post', {
        path: '/post/:post_id'
      });
      this.route('archive');
      this.route('tag', {
        path:'/tag/:tag_name'
      });
    });
    this.route('play', function() {
      this.route('web');
    });
    this.route('home' );
    this.route('documentation');
    this.route('web');
    this.route('loading');
  });
});

export default Router;
