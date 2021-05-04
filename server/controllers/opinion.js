import express from 'express';
import mongoose from 'mongoose';
import Opinion from '../models/opinion.js';
const router = express.Router();


export const Opiniontraining = async (req, res) => {
    const ratingvalue = req.body.ratingvalue
    const iduser = req.body.idu;
    const comment= req.body.comment;
    const idtraining= req.body.id
    console.log(iduser);
    console.log(idtraining);
    console.log(comment);
    const newopinion = new Opinion({
       
      
        idtraining,
        comment,
        iduser,
        ratingvalue
    });
    try {
      await newopinion.save();
    } 
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
