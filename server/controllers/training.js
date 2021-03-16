import Training from "../models/training.js";
import Categorie from "../models/categorie.js";
export const getSearchedTraining = async (req, res) => {
  try {
    console.log("params", req.query.InputSearch);
    const wordsearched = req.query.InputSearch
      .toLowerCase()
      .replace(/\s\s+/g, " ");

    const trainings = await Training.aggregate([
      {
        $lookup: {
          from: "formers",
          localField: "id_formateur",
          foreignField: "_id",
          as: "formateurs",
        },
      },

      /*   {
        $unwind: "$formateurs",
      },  */
      {
        $lookup: {
          from: "centres",
          localField: "id_formateur",
          foreignField: "_id",
          as: "centres",
        },
      },

      /*  {
        $unwind: "$centres",
      },  */
      /* {
        $addFields: {
          fullName: { $concat: ["$formateurs.nom", " ", "$formateurs.prenom"] },
          fullNameInverse: {
            $concat: ["$formateurs.prenom", " ", "$formateurs.nom"],
          },
        },
      },  */
      /* {
        $lookup: {
          from: "centres",
          localField: "id_centre",
          foreignField: "_id",
          as: "centres",
        },
      },
      {
        $unwind: "$centres",
      },
     
      */
      /*  {   
        $project:{
          fullName: { $concat: ["$formateurs.nom", " ", "$formateurs.prenom"] },
          fullNameInverse: {
            $concat: ["$formateurs.prenom", " ", "$formateurs.nom"],
          },
          "centres._id":0,
          "formateurs._id":0
        } 
    }, */
      {
        $match: {
          $or: [
            { nomformation: { $regex: wordsearched } },
            { description: { $regex: wordsearched } },
            { "formateurs.nomformateur": { $regex: wordsearched } },
            { "centres.nomcentre": { $regex: wordsearched } },

            { "formateurs.prenom": { $regex: wordsearched } },
            { fullName: { $regex: wordsearched } },
            { fullNameInverse: { $regex: wordsearched } },
          ],
        },
      },
    ]);

    console.log("Training", trainings);

    res.status(200).json(trainings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTrainings = async (req, res) => {
  try {
    const page = parseInt(req.query.page || "1");
    console.log("page numéro", req.query.page);

    const PAGE_SIZE = 3;
     const minPrice= req.query.value[0];
     const maxPrice=req.query.value[1];
     console.log(minPrice,maxPrice);  

    const minHeure= req.query.heures[0];
    const maxHeure=req.query.heures[1];
      console.log(minHeure,maxHeure); 

  let idscategories= [];
  console.log('before if ');
  if(req.query.categoriesids && req.query.categoriesids.length>0)
  {
    console.log('in if ',req.query.categoriesids);

    idscategories=req.query.categoriesids;

  }
  else
  {
    console.log('in else ');

  const cats=  await Categorie.find({},{'_id':1});

  console.log(cats);
   cats.map(el=>{
    console.log(el._id);
    idscategories.push(el._id);
  });
  console.log(idscategories);
  }
  console.log('after if ');
  const idcity = await Training.find( {}, {'idcities':1}    );
  console.log('idcity',idcity);
  const idcities = [];
idcity.map((el)=> {
idcities.push(el.idcities);
});

console.log('tabidcities', idcities);
const Alltraining = await Training.aggregate([
  {
    $lookup: {
      from: "cities",
      localField: "idcities",
      foreignField: "_id",
      as: "city",
    },
  },
  
  {
    $unwind: "$city",
  }, 
  {
    $addFields: {
      citynom:  "$city.nom" , 
    },},
    {
      $match:{
        /* $and:[
          {prix: { $gte: minPrice,$lte: maxPrice } },    {idcategorie: {$in :idscategories}}, 
          {duree: { $gte: minHeure,$lte: maxHeure } }, 
       ], */

       $or:[ 

         {$and:[

        {prix: { $gte: minPrice,$lte: maxPrice } },    {idcategorie: {$in :idscategories}}, 
        {duree: { $gte: minHeure,$lte: maxHeure } }, ]},

       {'city._id' :{ $in: idcities},}

     ], 
       
       
      
      
      }
    },
    {
      $limit:PAGE_SIZE
    },
    {
      $skip:PAGE_SIZE * (page-1)
    },
]);




 

    const total = await Training.countDocuments();
   // console.log("total", total);
    console.log("Alltraining", Alltraining);
    let totalPages= Math.ceil(total / PAGE_SIZE);
    //console.log("totalpages", totalPages);
    res.status(200).json({     
      Alltraining,totalPages:  Math.ceil(total / PAGE_SIZE)
    });
 
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const creatTraining= async (req, res) => {
  const { nomformation, coach, idcategorie, date, horaire, duree,  idgouvernorat, idcities, prix, Nombredeplace, description, selectedFile,createdAt } = req.body;
  
  const newTraining= new Training({ nomformation, coach,  idcategorie, date, horaire, duree,  idgouvernorat, idcities, prix, Nombredeplace, description, selectedFile,createdAt })
  try {
      await newTraining.save();
      res.status(201).json(newTraining );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}

export const updateTraining = async (req, res) => {
  const { id : _id } = req.params;
  const training = req.body;

 if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Aucune formation avec cet id');

  const updatedTraining = await Training.findByIdAndUpdate(_id, {...training, _id}, { new: true });
  res.json(updatedTraining);
};

export const deleteTraining = async (req, res) => {
  const { id } = req.params;

 if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Aucune formation avec cet id ');
   await Training.findByIdAndRemove(id);
  res.json({message : 'la formation a ete supprimer avec succés !'} );
}