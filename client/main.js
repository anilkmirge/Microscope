Deps.autorun(function(){
  if (Meteor.user() && !Meteor.loggingIn()) {
    Meteor.call('getHash', Meteor.user().emails[0].address, function(error, result){
      Session.set('userEmailHash', result);
    });
    if(Session.get('userEmailHash')){
      var intercomSettings = {
        email: Meteor.user().emails[0].address,
        created_at: Math.round(Meteor.user().createdAt/1000),
        user_name: Meteor.user().username,
        user_hash: Session.get('userEmailHash'),
        widget: {
          activator: '#Intercom',
          use_counter: true
        },
        app_id: "k20iexvc"
      };
      Intercom('boot', intercomSettings);
    }
  }
});
