import mongoose from "mongoose";
const MONGO_URL = process.env.DATABASE_URI;

if (!MONGO_URL) {
  throw new Error(
    "Please define the MONGO_URL environment variable inside .env.local"
  );
}
console.log(MONGO_URL);
async function dbConnect() {
  var conn = mongoose.connect(
    MONGO_URL,
    //  'mongodb://localhost:27017/leelecards',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  return conn;
}

export default dbConnect;
