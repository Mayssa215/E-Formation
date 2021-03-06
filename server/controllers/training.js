import Training from "../models/training.js";


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

    const PAGE_SIZE = 2;
    const Alltraining = await Training.find()
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * (page-1));

    const total = await Training.countDocuments();
    console.log("total", total);
    console.log("Alltraining", Alltraining);
    let totalPages= Math.ceil(total / PAGE_SIZE);
    console.log(totalPages);
    res.status(200).json({     
      Alltraining, totalPages:  Math.ceil(total / PAGE_SIZE)
    });
 
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const creatTraining= async (req, res) => {
  const { nomformation, coach,  categorie, date, horaire, lieu, prix, Nombredeplace, description, selectedFile } = req.body;
  
  const newTraining= new Training({ nomformation, coach,  categorie, date, horaire, lieu, prix, Nombredeplace, description, selectedFile })
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
}

export const deleteTraining = async (req, res) => {
  const { id } = req.params;

 if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Aucune formation avec cet id ');
   await Training.findByIdAndRemove(id);
  res.json({message : 'la formation a ete supprimer avec succés !'} );
}
