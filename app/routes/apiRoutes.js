//Load Data
// ======================================================
var friendsData = require("../data/friendsData")
// linking routes to a series of "data" sources. These data sources hold arrays of information of all possible friends


module.exports = function (app) {


//API GET ROUTING
// ======================================================
app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });
  
// console.log("apiRoutes.js: ", friendsData);

  //API POST ROUTING
  //=====================================================
  app.post("/api/friends", function (req, res) {
    
//Creates an object for the compatible friend.
    var friendMatch = {
  yourName: "",
  yourPhoto: "",
  friendDifference: Infinity
};

 //When the questionnaire is submitted, the server will respond and provide the results. 
 var newFriend = req.body;
 var newFriendScore = newFriend.scores;

//COMPATIBILITY LOGIC - will take the difference between the new friend's and existing friends' scores
var totalDifference;

//Iterate through all the existing friends in the databasae
for (var i = 0; i < friendsData.length; i++) {
  var currentFriends = friendsData[i];
  totalDifference = 0;
// console.log("currentUser: ", currentFriends.name);

//Iterate through all the scores of the existing friends. 
for (var f = 0; f < currentFriends.scores.length; f++) {
var currentFriendsScore = currentFriends.scores[f];
var currentnewFriendScore = newFriendScore[f];

//CALCULATIONS ==========================================
totalDifference += Math.abs(parseInt(currentnewFriendScore) - parseInt(currentFriendsScore));
}
 if(totalDifference <= friendMatch.friendDifference) {
   //reset the friendMatch to be the new friend
   friendMatch.yourName = currentFriends.yourName;
   friendMatch.yourPhoto = currentFriends.yourPhoto;
   friendMatch.friendDifference = totalDifference;
 }


};


    friendsData.push(newFriend);

    res.json(friendMatch);
  });

};

