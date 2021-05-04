import express from 'express';
import mongoose from 'mongoose';
import Categorie from '../models/categorie.js';

const router = express.Router();

export const getcategorie = async (req, res) => {
    try {
      const categories = await Categorie.find();
      res.status(200).json(categories);
    }catch(error) {
       res.status(404).json({message: error.message});
    }
};
export const categorie = async (req, res) => {
  const {
nom,
    
  } = req.body;
  const newCatégorie = new Categorie({
   
nom,
  });
  try {
    await newCatégorie.save();
    res.status(201).json(newCatégorie);
  } catch (error) {
    res.status(409).json({ message: error.message });
    console.log(error.message)
  };
};

export const updateCategorie = async (req, res) => {
  try {
  const id = req.query.id;
  const _id = id;

  const categorie = req.body;

  const updatecategorie = await Categorie.findByIdAndUpdate(
    _id,
    { ...categorie, _id },
    { new: true }
  );
  res.json(updatecategorie);
  }
  catch(error) {
    res.status(404).json({message: error.message});
    console.log(error.message)
  }
};
export const getSearchCategorie = async (req, res) => {
  try {
    console.log(req.query.InputSearch);
    const wordsearched = req.query.InputSearch.toUpperCase().replace(
      /\s\s+/g,
      " "
    );
   

    const categ = await Categorie.find( 
      {nom:{$regex: wordsearched}}
      
);

    res.status(200).json(categ);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const getCategories = async(req, res) => {

try{
const iduser = req.query.userid;
const centercateg = await Categorie.find({idscentre : iduser});
const formercateg = await Categorie.find({idsformer : iduser});


  res.status(200).json({centercateg, formercateg});

}catch(error) {
  res.status(404).json({ message: error.message });

}


}