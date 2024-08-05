/**
 * @desc Database
 * @createdBy Midas
 * @createdAt 08/04/2024
 * @updatedAt 08/04/2024
 */

import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://nextjs-blog-2023:mc34cWhmFFV3Rdzp@cluster0.qhkyx8k.mongodb.net/"
    );

    console.log("database connectd successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
