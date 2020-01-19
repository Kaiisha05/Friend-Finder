//Load Data
// ======================================================
var friendsData = require("../data/friendsData")


module.exports = function (app) {
//GET Routing
// ======================================================
app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });
console.log("console log #1: ", friendsData);

  //POST Routing
  // ======================================================
  //Display matched friend -- will hanlde the compatibiilty logic
  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;

    //Using a RegEx Pattern to remove spaces from newFriend

    // newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log("console #2:" ,newFriend);

    friendsData.push(newFriend);

    res.json(newFriend);
  });
};




