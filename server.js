const express = require("express");
const application = express();
const path = require("path");


application.use(express.static(__dirname + "/dist/frontend"));


application.listen(process.env.PORT || 8080);


// PathLocationStategy

application.get("/*", function(request, response) {
    response.sendFile(path.join(__dirname + "/dist/frontend/index.html"));
});


application.listen(process.env.PORT || 8080, () => {
    console.log("Console listening");
})


