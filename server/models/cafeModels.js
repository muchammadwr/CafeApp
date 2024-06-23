import mongoose from "mongoose";

const cafeSchema = mongoose.Schema({
  product: {
    type: "string",
    requred: true,
  },
  price: {
    type: "number",
    require: true,
  },
  quantity: {
    type: "number",
    require: true,
  },
  timestamps: true,
});

export const Cafe = mongoose.model("Cat", cafeSchema);
