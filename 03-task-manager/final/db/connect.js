const connectionString =
  "mongodb+srv://Yuvraj:mongo@)123@nodeexpressprojects.3jis4ll.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

const mongoose = require("mongoose");

const connectDB = (connectionString) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
