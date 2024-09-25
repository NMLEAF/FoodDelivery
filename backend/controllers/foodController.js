import foodModel from "../models/foodModel.js";
import fs from "fs";

export const getAllFoods = async (req, res) => {
  try {
    const foods = await foodModel.find({});

    res.json({
      success: true,
      data: { foods },
      message: "Food added",
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};

export const getFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.params.id);

    res.json({
      success: true,
      data: { food },
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};

export const createFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    ...req.body,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({
      success: true,
      data: { food },
      message: "Food added",
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};

// DELETE A FOOD
export const deleteFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.params.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      data: null,
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};

// DELETE ALL FOODS
export const deleteAllFoods = async (req, res) => {
  try {
    const food = await foodModel.deleteMany();

    res.json({
      success: true,
      message: `All foods deleted successfully`,
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};
