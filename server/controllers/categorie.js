import express from 'express';
import mongoose from 'mongoose';
import categorie from '../models/categorie.js';

const router = express.Router();

export const getcategorie = async (req, res) => {
    try {
      const categories = await categorie.find();
      res.status(200).json(categories);
    }catch(error) {
       res.status(404).json({message: error.message});
    }
}
