import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 
import Former from "../models/former.js";
import Centre from "../models/centre.js";
import User from '../models/user.js';
import Categorie from "../models/categorie.js";


export const getFormer = async (req, res) => {
  try {
    console.log("params", req.query.InputSearch);
    const wordsearched = req.query.InputSearch.replace(/\s\s+/g, " ");

    const formers = await Former.aggregate([
      {
        $lookup: {
          from: "trainings",
          localField: "training",
          foreignField: "_id",
          as: "training",
        },
      },

    /*  {
        $unwind: "$formations",
      }, */
       
     /*  {
        $addFields: {
          fullName: {
            $concat: [
              "$formations.nomformation",
              " ",
              "$formations.description",
            ],
          },
        },
          fullNameInverse: {
            $concat: [
              "$formations.nomformation",
              " ",
              "$formations.description",
            ],
          }, 
        }, */
    

      {
        $match: {
          $or: [
            { lastname: { $regex: wordsearched } },
            { firstname: { $regex: wordsearched } },
            { "training.name": { $regex: wordsearched } },
            { "training.description": { $regex: wordsearched } },
            { fullName: { $regex: wordsearched } },
            { fullNameInverse: { $regex: wordsearched } },  
          ],
        },
      },
    ]);

    console.log("Formers", formers);
    res.status(200).json(formers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const  signupformer = async (req, res) => {
  const { 
     firstname,
    lastname,
     gender,
    Numbreofexperience,
    idspeciality,
    phone,
    namespeciality,
   
    description,
    cin,
    selectedimage,
    selectedFile,

     email, 
     password, 
     confirmerMotdepasse } = req.body;
   try {
    const userexist = await User.findOne({ email });
    const formerexist = await Former.findOne({email});
    const centreexist = await Centre.findOne({email});
    if (userexist || formerexist || centreexist) return res.status(400).json({ message: 'Email exist déjà' });
      if (password !== confirmerMotdepasse ) return res.status(400).json({message:'confimer votre mot de passe'});
      const hashedpassword = await bcrypt.hashSync(password, 12);
      const result = await Former.create({firstname,
        lastname,
        gender,
        phone,
        Numbreofexperience,
        idspeciality,
        namespeciality,
        description,
        cin,
        selectedimage,
        selectedFile,
         email, 
         password: hashedpassword,});
      const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn:"1d"});
      res.status(200).json({result, token});
   }
   catch (error) {
       res.status(500).json({message:"erreur "});
       console.log(error);
   }
  };
  export const getAllFormers = async (req, res) => {
    try {
      const page = parseInt(req.query.page || "1");
      console.log("page numéro", req.query.page);
  
      const PAGE_SIZE = 3;
      const minAge = req.query.age[0];
      const maxAge = req.query.age[1];
      console.log(minAge, maxAge);
      const inputsearched = req.query.InputSearch.replace(/\s\s+/g, " ");
      console.log(inputsearched);
      let idsspecialitys = [];
      //console.log("before if ");
      if (req.query.SpecialityIds && req.query.SpecialityIds.length > 0) {
        console.log("in if ", req.query.SpecialityIds);
  
        idsspecialitys = req.query.SpecialityIds;
      } else {
        //console.log("in else ");
  
        const specialty = await Categorie.find({}, { _id: 1 });
  
        //console.log(cats);
        specialty.map((el) => {
          //console.log(el._id);
          idsspecialitys.push(el._id);
        });
        //console.log(idscategories);
      }
      //console.log("after if ");
  
  
     
  let selectsexe = [];
  if(req.query.sexe && req.query.sexe.length>0) {
    selectsexe=req.query.sexe;
  }
  else {
    selectsexe.push("Femme, Homme");
  }
  console.log(selectsexe);
      const AllFormer = await Former.find({
        $and: [
          {idspeciality: { $in: idsspecialitys } },
  
          
    
        //{Numbreofexperience:{ $gte: minAge, $lte: maxAge } },
        //{sexe:selectsexe},
        //{firstname:{$regex : inputsearched}},
        //{lastname:{$regex : inputsearched}},
  
        ],
      }).limit(PAGE_SIZE).skip(PAGE_SIZE * (page - 1));
      console.log("houni1");
      const total = await Former.countDocuments();
      // console.log("total", total);
      console.log("AllFormer", AllFormer);
      //let totalPages = Math.ceil(total / PAGE_SIZE);
      //console.log("totalpages", totalPages);
      res.status(200).json({
        AllFormer,
        totalPages: Math.ceil(total / PAGE_SIZE),
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
   
  
  
  
  export const getnotshowformer = async (req, res) => {
    try {
      const page = parseInt(req.query.page || "1");
      console.log("page numéro", req.query.page);
  
      const PAGE_SIZE = 3;
     
  
    
      const AllFormer = await Former.find({}
      ).limit(PAGE_SIZE).skip(PAGE_SIZE * (page - 1));
  
      console.log("filter masqué");
      const total = await Former.countDocuments();
    
      //console.log("AllFormer", AllFormer);
  
      res.status(200).json({
        AllFormer,
        totalPages: Math.ceil(total / PAGE_SIZE),
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  export const getrecentFormer = async (req, res) => {
    try {
      const page = parseInt(req.query.page || "1");
      console.log("page numéro", req.query.page);
  
      const PAGE_SIZE = 3;
      
      const AllFormer = await Former.find().sort({ createdAt: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * (page - 1));
  
      const total = await Former.countDocuments();
      // console.log("total", total);
      console.log("AllFormer", AllFormer);
      //let totalPages = Math.ceil(total / PAGE_SIZE);
      //console.log("totalpages", totalPages);
      res.status(200).json({
        AllFormer,
        totalPages: Math.ceil(total / PAGE_SIZE),
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  
  export const getOneFormer = async (req, res) => {
    try {
      
      const  ids  = req.query.idformer;
    
      console.log(ids);
      const OneFormer = await Former.find({_id:ids});
  
     
      console.log("OneFormer", OneFormer);
     
      res.status(200).json({
        OneFormer,
       
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    };
  };