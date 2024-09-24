import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://scoleaf:JdYRLTBTvb3cmkGm@cluster0.eps1f.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB successfully connected ✅..."))
    .catch((err) => {
      console.log(err);
    });
};
