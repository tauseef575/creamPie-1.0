import asyncHandler from "express-async-handler";
import Custom from "../models/customModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getCustoms = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Custom.countDocuments({ ...keyword });
  const customs = await Custom.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ customs, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getCustomById = asyncHandler(async (req, res) => {
  const custom = await custom.findById(req.params.id);

  if (custom) {
    res.json(custom);
  } else {
    res.status(404);
    throw new Error("Custom Product not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
// const deleteProduct = asyncHandler(async (req, res) => {
//   const product = await Product.findById(req.params.id);

//   if (product) {
//     await product.remove();
//     res.json({ message: "Product removed" });
//   } else {
//     res.status(404);
//     throw new Error("Product not found");
//   }
// });
////////////////////////////////////////////
// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createCustom = asyncHandler(async (req, res) => {
  // console.log(req.user);
  const { description, number, image } = req.body;
  console.log(req.body);
  const custom = new Custom({
    // name: "Sample name",
    user: req.user._id,
    description: description,
    number: number,
    image: image,
    // brand: "Sample brand",
    // category: "Sample category",
    // countInStock: 0,
    // numReviews: 0,
  });

  const createdCustom = await custom.save();
  res.status(201).json(createdCustom);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateCustom = asyncHandler(async (req, res) => {
  const { description, number, image } = req.body;

  const custom = await Custom.findById(req.params.id);

  if (custom) {
    // product.name = name;
    custom.description = description;
    custom.number = number;
    custom.image = image;
    // product.brand = brand;
    // product.category = category;
    // product.countInStock = countInStock;

    const updatedCustom = await custom.save();
    res.json(updatedCustom);
  } else {
    res.status(404);
    throw new Error("Custom Order not found");
  }
});
////////////////////////////////////////////////
// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
// const createProductReview = asyncHandler(async (req, res) => {
//   const { rating, comment } = req.body;

//   const product = await Product.findById(req.params.id);

//   if (product) {
//     const alreadyReviewed = product.reviews.find(
//       (r) => r.user.toString() === req.user._id.toString()
//     );

//     if (alreadyReviewed) {
//       res.status(400);
//       throw new Error("Product already reviewed");
//     }

//     const review = {
//       name: req.user.name,
//       rating: Number(rating),
//       comment,
//       user: req.user._id,
//     };

//     product.reviews.push(review);

//     product.numReviews = product.reviews.length;

//     product.rating =
//       product.reviews.reduce((acc, item) => item.rating + acc, 0) /
//       product.reviews.length;

//     await product.save();
//     res.status(201).json({ message: "Review added" });
//   } else {
//     res.status(404);
//     throw new Error("Product not found");
//   }
// });
//////////////////////////////////////////
// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
// const getTopProducts = asyncHandler(async (req, res) => {
//   const products = await Product.find({}).sort({ rating: -1 }).limit(3);

//   res.json(products);
// });
////////////////////////////////////////
export {
  getCustoms,
  getCustomById,
  //   deleteProduct,
  createCustom,
  updateCustom,
  //   createProductReview,
  //   getTopProducts,
};
