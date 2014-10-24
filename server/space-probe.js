var SpaceProbes = new Meteor.Collection("spaceProbes");

Meteor.startup(function(){
  console.log("I am starting up...");
  if(SpaceProbes.find().count() == 0){
    console.log("No space probe found, I am inserting new ones...")
    SpaceProbes.insert({spacecraft: "Voyager 1", organization: "NASA", launchDate: new Date("1979-03-05"), status: "Reached the Heliosheath, in operation"});
    SpaceProbes.insert({spacecraft: "Voyager 2", organization: "NASA", launchDate: new Date("1979-07-09"), status: "Reached the Heliosheath, in operation"});
    SpaceProbes.insert({spacecraft: "Curiosity", organization: "NASA", launchDate: new Date("2012-08-06"), status: "Landed on Mars, in operation"});
    SpaceProbes.insert({spacecraft: "Rosetta", organization: "ESA", launchDate: new Date("2004-03-02"), status: "Reached Comet 67P/Churyumov-Gerasimenko, in operation"});
  }
});

