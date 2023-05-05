const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://darshantest:darshantest123@ac-2e5r2mt-shard-00-00.46oktx1.mongodb.net:27017,ac-2e5r2mt-shard-00-01.46oktx1.mongodb.net:27017,ac-2e5r2mt-shard-00-02.46oktx1.mongodb.net:27017/test-task?ssl=true&replicaSet=atlas-l17t9t-shard-0&authSource=admin&retryWrites=true&w=majority"
);
