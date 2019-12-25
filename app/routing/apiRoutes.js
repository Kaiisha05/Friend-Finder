
app.get("/api/frieds", function(req, res) {
    return res.json(friends);
  });
  
  app.post("/api/friends", function(req, res) {
    /*takes in the request, asks some questions, does the table length have more than 5? If it doesn't take the request.body and shovel it into the table data array. After you push that into the table data array tell the requester that we got it */
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
      tableData.push(req.body);
      // res.json(true);
      res.json({reqBody: req.body});
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  }