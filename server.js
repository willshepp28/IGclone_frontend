const express = require("express");
const application = express();
const path = require("path");


application.use(express.static(__dirname + "/dist"));


application.listen(process.env.PORT || 8080);


// PathLocationStategy

application.get("/*", function(request, response) {
    response.sendFile(path.join(__dirname + "/dist/IGclone/index.html"));
});

console.log("Console listening");
