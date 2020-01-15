// DEPENDENCIES 
// ======================================================

var express = require("express");
// var path = require("path"); 
//using a separate routes file

// Sets up the Express App 
// ======================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// ROUTES - moved to htmlRoutes file
// ======================================================

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });
//  app.get("/survey", function (req,res) {
//    res.sendFile(path.join(__dirname, "survey.html"));
//  });


// Display all Friends - moved to apiRoutes
// ======================================================
// app.get("/api/friends", function (req,res) {
//   return res.json(friends);
// });

// // Display matched friend -- will hanlde the compatibiilty logic
// app.post("api/friends", function (req, res) {
//   var newFriend = req.body;

// // Using a RegEx Pattern to remove spaces from newCharacter
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newFriend);

//   friends.push(newFriend);
  
//   res.json(newFriend);
// });


// ROUTER - The below points our server to a series of "route" files. These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// =====================================================
require("./app/routes/htmlRoutes")(app);
require("./app/routes/apiRoutes")(app);


// LISTENER
// The below code effectively "starts" our server
// ======================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

