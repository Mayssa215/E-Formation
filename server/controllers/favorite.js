import Favorite from '../models/favorite.js';
import Training from '../models/training.js';
export const Favoritetraining = async (req, res) => {
    const {
      iduser,
      idtraining,
    }= req.body
    const newfavorite = new Favorite({
      iduser,
      idtraining,
    });
    try {
      await newfavorite.save();
      res.status(201).json(newfavorite);
     } 
    catch (err) {
      res.status(500).json({ message: err.message });
      console.log(err.message)
    }
  }
  export const Deletefavoritetraining = async (req, res) => {
    try {
      const id = req.query.iduser;
      const idt = req.query.idtraining;
      await Favorite.findOneAndRemove({iduser: id, idtraining:idt}) ;
      res.json({ message: " succés !" });     } 
    catch (err) {
      res.status(500).json({ message: err.message });
      console.log(err.message)
    }
  }

  export const Getfavoritebyid = async (req, res) => {
    let trainingsid=[];
    try {
      const id = req.query.iduser;
      const trainingsfav = await Favorite.find({iduser: id}).select({"idtraining":1, "_id":0});
      console.log('trainingfav',trainingsfav);
      trainingsfav.map((el)=> {
        trainingsid.push(el.idtraining);

        })

        res.status(200).json(
          trainingsid,
        )
    
    
    }
    catch (err) {
      res.status(500).json({ message: err.message });
  
    }
  
  }
  export const Getfavoritetrainings= async (req, res) => {

    let trainingsid=[];

    try {
      const id = req.query.iduser;

      const page = parseInt(req.query.page || "1");
      const PAGE_SIZE = 4;
      const trainingsfav = await Favorite.find({iduser: id}).select({"idtraining":1, "_id":0});
      console.log(trainingsfav);
      trainingsfav.map((el)=> {
        trainingsid.push(el.idtraining);

        })
        const trainings = await Training.find({ _id:{$in:trainingsid}}).limit(PAGE_SIZE).skip(PAGE_SIZE* (page - 1))
        console.log(trainings);
        res.status(200).json(
          trainings,
        )
    
    
    }
    catch (err) {
      res.status(500).json({ message: err.message });
      console.log(err)
  
    }
  
  }

export const getFavorite = async (req,res) => {
    try {
     
      const favorite = await Favorite.find();
     
      res.status(200).json(
        favorite
             );
    } catch (error) {
      res.status(404).json({ message: error.message });

    };
  };