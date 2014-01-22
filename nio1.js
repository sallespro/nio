if (Meteor.isClient) {


 $(function(){
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 50
  });
});


  Template.mainbody.headline = function () {
    return "real-time meteor powered nitrous.io hosted vm";
  };


  Template.mainbody.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        
        console.log("interaction registered");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
