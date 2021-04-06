import Former from "../models/former.js";
import Center from "../models/centre.js";
import User from '../models/user.js';import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 
import Gouvernorat from '../models/gouvernorat.js';
import Categorie from '../models/categorie.js';
import City from '../models/cities.js';
import Training from '../models/training.js';
export const getCentre = async (req, res) => {
  try {
    console.log("params", req.query.InputSearch);
    const wordsearched = req.query.InputSearch.replace( /\s\s+/g, ' ' );

    const center= await Center.aggregate([
      {
        $lookup: {
          from: "trainings",
          localField: "trainingcenter",
          foreignField: "_id",
          as: "trainingcenter",
        },
      },

   /*    {
        $unwind: "$formationdecentre",
      },
       {
        $addFields: {
          fullName: {
            $concat: ["$formationdecentre.nomformation"," ", "$formationdecentre.description"],
          },
          fullNameInverse: {
            $concat: ["$formationdecentre.nomformation"," ", "$formationdecentre.description"],
          },
        },
      }, 
 */
      {
        $match: {
          $or: [
            { lastname: { $regex: wordsearched } },
            { "trainingcenter.name": { $regex: wordsearched } },
            { "trainingcenter.description": { $regex: wordsearched } },

            { fullName: { $regex: wordsearched } },
            { fullNameInverse: { $regex: wordsearched } },
          ],
        },
      },
    ]);

    console.log("Centres", center);
    res.status(200).json(center);
    console.log('houni');
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const  signupcentre = async (req, res) => {
  const {  lastname,namespeciality,idspeciality, phone, adressexact, namecities, namegouvernorate,idcity, description, idgouvernorate, email, password, confirmerMotdepasse, selectedimage} = req.body;
   try {
     const userexist = await User.findOne({ email });
      const formerexist = await Former.findOne({email});
      const centreexist = await Center.findOne({email});
      if (userexist || formerexist || centreexist) return res.status(400).json({ message: 'Email exist déjà' });
      if (password !== confirmerMotdepasse ) return res.status(400).json({message:'confimer votre mot de passe'});
      const hashedpassword = await bcrypt.hash(password, 12);
      const result = await Center.create({lastname,namespeciality,idspeciality, phone, adressexact, namecities, namegouvernorate,idcity, description, idgouvernorate, email, password: hashedpassword, confirmerMotdepasse, selectedimage});
      const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn:"1d"});
      res.status(200).json({result, token});
   }
   catch (error) {
       res.status(500).json({message:"erreur "});
       console.log(error);
  
   }
  }
  export const getAllCenters = async (req, res) => {
    try {
      const page = parseInt(req.query.page || "1");
      console.log("page numéro", req.query.page);
  
      const PAGE_SIZE = 3;
    
      const inputsearched = req.query.InputSearch.replace(/\s\s+/g, " ");
      console.log(inputsearched);
      let idsspecialitys = [];

      if (req.query.SpecialityIds && req.query.SpecialityIds.length > 0) {
        console.log("in if ", req.query.SpecialityIds);
  
        idsspecialitys = req.query.SpecialityIds;
      } else {
  
        const specialty = await Categorie.find({}, { _id: 1 });
      

        specialty.map((el) => {
          idsspecialitys.push(el._id);
        });
      }
  
  
      let idsgouvernorat = [];
      if (req.query.gouvernoratid && req.query.gouvernoratid.length > 0) {
        idsgouvernorat = req.query.gouvernoratid;
     
      } else {        

        const gouver = await Gouvernorat.find({}, { _id: 1 });
        gouver.map((el) => {
          idsgouvernorat.push(el._id);
        
        });

      }
  
  
      let idscity = [];
      if (req.query.cityid && req.query.cityid.length > 0) {
        idscity = req.query.cityid;
        
      } else {
        const cities = await City.find({}, { _id: 1 });
        cities.map((el) => {
          idscity.push(el._id);
        });
      }

  
  
  
      const AllCentres = await Center.find({
        $and: [
        { idspeciality: { $in: idsspecialitys } },

      
       // {lastname:{$regex : inputsearched}},
  
  
        ],
      }).limit(PAGE_SIZE).skip(PAGE_SIZE * (page - 1));
  
      console.log("houni1");
      console.log(AllCentres)
      res.status(200).json({
        AllCentres,
        
      });
    } catch (error) {
  
      res.status(404).json({ message: error.message });
    }
  };
  
  
  
  export const getnotshowcentre = async (req, res) => {
    try {
      const page = parseInt(req.query.page || "1");
      console.log("page numéro", req.query.page);
  
      const PAGE_SIZE = 3;
     
  
    
      const AllCentres = await Center.find({}
      ).limit(PAGE_SIZE).skip(PAGE_SIZE * (page - 1));
  
      console.log("filter masqué");
      const total = await Center.countDocuments();
    
      //console.log("AllCentres", AllCentres);
  
      res.status(200).json({
        AllCentres,
        totalPages: Math.ceil(total / PAGE_SIZE),
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  
  export const getrecentCentre = async (req, res) => {
    try {
      const page = parseInt(req.query.page || "1");
      console.log("page numéro", req.query.page);
  
      const PAGE_SIZE = 3;
      
      const AllCentres = await Center.find().sort({ createdAt: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * (page - 1));
  
      const total = await Center.countDocuments();
      console.log("AllCentres", AllCentres);

      res.status(200).json({
        AllCentres,
        totalPages: Math.ceil(total / PAGE_SIZE),
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  
  
  export const getOneCenter = async (req, res) => {
    try {
      
      const  ids  = req.query.idcenter;
    
      console.log("id centre",ids);
      const OneCenter = await Center.find({_id:ids});
  
     
      console.log("OneCenter", OneCenter);
     
      res.status(200).json({
        OneCenter,
       
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    };
  };
  export const getTrainingcenter = async (req,res) => {
    try {
     
   let ids = "";
      const trainingdids = await Center.find({}, {trainingcenter : 1} );
      trainingdids.map((e)=>{
        ids=(e.trainingcenter);
      });
      console.log("ids",ids);
      const page = parseInt(req.query.page || "1");
  
      console.log("page numéro", req.query.page);
      const PAGE_SIZE = 3;
        const Trainingcenter= await Training.find({_id :{$in: ids}}).limit(PAGE_SIZE).skip(PAGE_SIZE* (page - 1));
  console.log(("trainingcenter", Trainingcenter));
      res.status(200).json({
        Trainingcenter,
       
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    };
  };