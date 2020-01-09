//Load Data
// ======================================================
var friendsData = require("../data/friends")

friendsData = [
    {
        name: "Mickey Mouse",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fd%2Fd4%2FMickey_Mouse.png%2F220px-Mickey_Mouse.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMickey_Mouse&docid=o8fKNZd6urBFOM&tbnid=cfGkw9uCLWAi0M%3A&vet=10ahUKEwjWot-It_fmAhVHj1kKHef3CagQMwiXASgAMAA..i&w=220&h=220&bih=731&biw=1440&q=mickey%20mouse&ved=0ahUKEwjWot-It_fmAhVHj1kKHef3CagQMwiXASgAMAA&iact=mrc&uact=8"
    }
]
//GET Routing
// ======================================================
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });
  //POST Routing
  // ======================================================
  //Display matched friend -- will hanlde the compatibiilty logic
  app.post("api/friends", function (req, res) {
    var newFriend = req.body;

    //Using a RegEx Pattern to remove spaces from newFriend

    // newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
  });
};




