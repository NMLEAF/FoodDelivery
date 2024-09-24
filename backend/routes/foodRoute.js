import express from "express";
import {
  createFood,
  deleteAllFoods,
  deleteFood,
  getAllFoods,
  getFood,
} from "../controllers/foodController.js";
import multer from "multer";

const router = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router
  .route("/")
  .get(getAllFoods)
  .post(upload.single("image"), createFood)
  .delete(deleteAllFoods);

router.route("/:id").get(getFood).delete(deleteFood);

export default router;
