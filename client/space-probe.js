var SpaceProbes = new Meteor.Collection("spaceProbes");

Template.spaceProbeList.helpers(
  {
    spaceProbes: function(){
      return SpaceProbes.find();
    }
  }
);
