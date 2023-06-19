const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://gofood:gofood123@cluster0.ldru09z.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected successfully!");
    const fetched_data = mongoose.connection.db.collection("food_items");
    let data = await fetched_data.find({}).toArray();
    const fetched_category = mongoose.connection.db.collection("foodCategory");
    let categoryData = await fetched_category.find({}).toArray();
    global.food_items = data;
    global.foodCategory = categoryData;
    // console.log(global.food_items);
    // console.log(global.foodCategory);
  } catch (error) {
    console.log("err: ", error);
  }
};

module.exports = mongoDB;
