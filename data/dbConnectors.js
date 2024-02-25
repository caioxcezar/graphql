import casual from "casual";
import mongoose from "mongoose";
import { DataTypes, Sequelize } from "sequelize";

//#region Mongo Connection

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://graphql:123@localhost:27017/widgets");

const widgetSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  soldout: { type: String },
  stores: { type: Array },
  inventory: { type: String },
});

const Widgets = mongoose.model("widgets", widgetSchema);

//#endregion
//#region SQLite Connection
const sequelize = new Sequelize("sqlite::memory:");
const Categories = sequelize.define("categories", {
  category: DataTypes.STRING,
  description: DataTypes.STRING,
});
Categories.sync({ force: true }).then(() => {
  for (let i = 0; i < 4; i++) {
    Categories.create({
      category: casual.word,
      description: casual.sentence,
    });
  }
});
//#endregion

export { Widgets, Categories };
