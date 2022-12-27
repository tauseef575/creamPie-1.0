import express from "express";
const router = express.Router();
import {
  getCustoms,
  getCustomById,
  //   deleteCustom,
  createCustom,
  updateCustom,
  //   createCustomReview,
  //   getTopCustoms,
} from "../controllers/customController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(getCustoms).post(protect, createCustom);
// router.route("/:id/reviews").post(protect, createProductReview);
// router.get("/top", getTopProducts);
router.route("/:id").get(getCustomById).put(updateCustom);
// .delete(protect, admin, deleteProduct)

export default router;
