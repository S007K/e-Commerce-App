const mongoose = require("mongoose");

//mongoose.connect("mongodb:127.0.0.1:27017/server5pm")
//.then(()=>{
//    console.log("database is connected!!!")
//})
//.catch(error=>{
//    console.log("error")
//})

async function getConnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/server5pm");
    console.log("Data Base is connected!!!");
  } catch (error) {
    console.log(error);
  }
}
getConnect();
