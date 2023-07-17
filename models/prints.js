// model/prints.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 10,
      default: 8,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

const printSchema = new Schema(
  {
    title: { type: String, required: true },
    startDate: {
      type: Date,
      default: function () {
        return new Date().getDate();
      },
    },
    endDate: {
      type: Date,
      default: function () {
        return new Date().getDate();
      },
    },
    comments: {
         type: String, 
    },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Print", printSchema);