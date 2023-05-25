const { Schema, model, default: mongoose, SchemaTypes } = require('mongoose');
const productSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    decription: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    countInTock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
