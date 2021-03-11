import express from 'express';
import mongoose from 'mongoose';
import Cities from "../models/cities.js";
const router = express.Router();

 export const getCity = async (req, res) => {
  try {
    const city = await Cities.find();
    res.status(200).json(city);
  }catch(error) {
     res.status(404).json({message: error.message});
  }
}
