const express = require("express");
const application = express();
const path = require("path");


application.use(express.static(__dirname + "/dist/frontend"));





// PathLocationStategy

application.get("/*", function(request, response) {
    response.sendFile(path.join(__dirname + "/dist/frontend/index.html"));
});


application.listen(process.env.PORT || 8080);

console.log("Server listening");


