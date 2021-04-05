import Former from "../models/former.js";
import Centre from "../models/centre.js";
import User from '../models/user.js';import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 
export const getCentre = async (req, res) => {
  try {
    console.log("params", req.query.InputSearch);
    const wordsearched = req.query.InputSearch.replace( /\s\s+/g, ' ' );

    const centres = await Centre.aggregate([
      {
        $lookup: {
          from: "trainings",
          localField: "formationdecentre",
          foreignField: "_id",
          as: "formationdecentre",
        },
      },

      {
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

      {
        $match: {
          $or: [
            { nomcentre: { $regex: wordsearched } },
            { "formationdecentre.nomformation": { $regex: wordsearched } },
            { "formationdecentre.description": { $regex: wordsearched } },

            { fullName: { $regex: wordsearched } },
            { fullNameInverse: { $regex: wordsearched } },
          ],
        },
      },
    ]);

    console.log("Centres", centres);
    res.status(200).json(centres);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const  signupcentre = async (req, res) => {
  const {  name,namespeciality,idspeciality, phonenumber, adresseexact, nomcities, nomgouvernorat,idcities, description, idgouvernorat, email, motdepasse, confirmerMotdepasse, selectedFileimage} = req.body;
   try {
     const userexist = await User.findOne({ email });
      const formerexist = await Former.findOne({email});
      const centreexist = await Centre.findOne({email});
      if (userexist || formerexist || centreexist) return res.status(400).json({ message: 'Email exist déjà' });
      if (motdepasse !== confirmerMotdepasse ) return res.status(400).json({message:'confimer votre mot de passe'});
      const hashedpassword = await bcrypt.hash(motdepasse, 12);
      const result = await Centre.create({name,namespeciality,idspeciality, phonenumber, adresseexact,  nomcities, nomgouvernorat,idcities,description, idgouvernorat, email,  selectedFileimage, motdepasse: hashedpassword});
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
  
  
      let idsgouvernorat = [];
      if (req.query.gouvernoratid && req.query.gouvernoratid.length > 0) {
        // console.log("in if2", req.query.gouvernoratid);
        idsgouvernorat = req.query.gouvernoratid;
      } else {
        // console.log("in else gouvernorat");
        const gouver = await Gouvernorat.find({}, { _id: 1 });
        //console.log(gouver);
        gouver.map((el) => {
          //console.log(el._id);
          idsgouvernorat.push(el._id);
        });
        //console.log(idsgouvernorat);
      }
      //console.log("after else gouvernorat");
  
  
      let idscity = [];
      if (req.query.cityid && req.query.cityid.length > 0) {
        //console.log("in if3", req.query.cityid);
        idscity = req.query.cityid;
        
      } else {
        //console.log("in else cities");
        const cities = await City.find({}, { _id: 1 });
        //console.log(cities);
        cities.map((el) => {
          //console.log(el._id);
          idscity.push(el._id);
        });
        //console.log(idscity);
      }
      //console.log("after else cities");
  
  
  
      const AllCentres = await Centre.find({
        $and: [
        { idspeciality: { $in: idsspecialitys } },
        //{ idgouvernorat: { $in: idsgouvernorat } }, 
        //{ idcities: { $in: idscity } },
        {name:{$regex : inputsearched}},
  
  
        ],
      }).limit(PAGE_SIZE).skip(PAGE_SIZE * (page - 1));
  
      console.log("houni1");
      const total = await Centre.countDocuments();
      // console.log("total", total);
      //console.log("AllCentres", AllCentres);
      //let totalPages = Math.ceil(total / PAGE_SIZE);
      //console.log("totalpages", totalPages);
      res.status(200).json({
        AllCentres,
        totalPages: Math.ceil(total / PAGE_SIZE),
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
     
  
    
      const AllCentres = await Centre.find({}
      ).limit(PAGE_SIZE).skip(PAGE_SIZE * (page - 1));
  
      console.log("filter masqué");
      const total = await Centre.countDocuments();
    
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
      
      const AllCentres = await Centre.find().sort({ createdAt: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * (page - 1));
  
      const total = await Centre.countDocuments();
      // console.log("total", total);
      console.log("AllCentres", AllCentres);
      //let totalPages = Math.ceil(total / PAGE_SIZE);
      //console.log("totalpages", totalPages);
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
      const OneCenter = await Centre.find({_id:ids});
  
     
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
      const trainingdids = await Centre.find({}, {formationdecentre : 1} );
      trainingdids.map((e)=>{
        ids=(e.formationdecentre);
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