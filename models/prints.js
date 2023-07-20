const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
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
    picture: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    endDate: {
      type: Date,
      default: Date.now,
      required: true,
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

const Print = mongoose.model("Print", printSchema);
module.exports = Print;
