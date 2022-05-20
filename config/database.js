import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://memories_user:<memories123>@cluster0.0k9x7.mongodb.net/FYP?retryWrites=true&w=majority";

const connect = () => {
  mongoose
    .connect(MONGO_URI, {
      userNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully Connected to Database");
    })
    .catch((error) => {
      console.log("Database Connection Failed...");
      console.log(error);
      process.exit(1);
    });
};

export default connect;
