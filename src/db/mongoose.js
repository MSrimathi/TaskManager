const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/taskManager", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

mongoose.connection.once("open", function() {
    console.log("mongodb database connection established successfully");
});