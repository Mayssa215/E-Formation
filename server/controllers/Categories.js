import express from 'express';
import mongoose from 'mongoose';
import CategMod from '../models/categorie.js';

const router = express.Router();



export const getcategorie = async (req, res) => {
    try {
      const categ = await CategMod.find();
      res.status(200).json(categ);
    }catch(error) {
       res.status(404).json({message: error.message});
    }
}