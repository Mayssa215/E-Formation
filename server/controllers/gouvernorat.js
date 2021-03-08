import express from 'express';
import mongoose from 'mongoose';
import gouvernorat from '../models/gouvernorat.js';

const router = express.Router();

export const getgouvernorat = async (req, res) => {
    try {
      const gouvernorats = await gouvernorat.find();
      res.status(200).json(gouvernorats);
    }catch(error) {
       res.status(404).json({message: error.message});
    }
}