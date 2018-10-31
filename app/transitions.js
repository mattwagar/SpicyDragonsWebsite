export default function(){
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );
  let duration = 500;

  this.transition(
    this.fromRoute('app.blog.archive'),
    this.toRoute('app.blog.post'),
    this.toValue(true),
    this.use('fade'),
    this.reverse('fade')
  )

  this.transition(
    this.childOf('#liquid-profile'),
    this.toValue(true),
    this.use('toRight'),
    this.reverse('toLeft')
  )

  this.transition(
  this.childOf('#content'),
  this.use('explode', {
    pickOld: 'div#route-header',                // Find an "h3" in the old template. This
                                  // can be any CSS selector.

    use: ['toUp', {duration}]   // And animate it upward. This can
                                // be any arbitrary transition, and
                                // its optional parameters.

  }, {
    pickNew: 'div#route-header',                // Find an "h3" in the new template

    use: ['toDown', {duration}] // And animate it downward.

  }, {
    // For everything else that didn't match the above, use a
    // fade. I'm giving the fade half as much duration because fade
    // includes both fading out and fading in steps, each of which
    // spends `duration` milliseconds.
    use: ['fade', {duration: duration / 2}]
  })
);
}
