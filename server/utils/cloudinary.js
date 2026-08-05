import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config({});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadMedia = async (file) => {
  try {
    return await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw error;
  }
};

export const deleteMediaFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Failed to delete image:", error);
  }
};

export const deleteVideoFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: "video" });
  } catch (error) {
    console.error("Failed to delete video:", error);
  }
};
