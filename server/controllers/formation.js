import Formation from "../models/formation.js";


export const getSearchedFormation = async (req, res) => {
  try {
    console.log("params", req.query.InputSearch);
    const wordsearched = req.query.InputSearch
      .toLowerCase()
      .replace(/\s\s+/g, " ");

    const formations = await Formation.aggregate([
      {
        $lookup: {
          from: "formateurs",
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
            { "formateurs.nom": { $regex: wordsearched } },
            { "centres.nom": { $regex: wordsearched } },

            { "formateurs.prenom": { $regex: wordsearched } },
            { fullName: { $regex: wordsearched } },
            { fullNameInverse: { $regex: wordsearched } },
          ],
        },
      },
    ]);

    console.log("Formation", formations);

    res.status(200).json(formations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getFormations = async (req, res) => {
  try {
    const page = parseInt(req.query.page || "1");
    console.log("page numéro", req.query.page);

    const PAGE_SIZE = 2;
    const Alltraining = await Formation.find()
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * (page-1));

    const total = await Formation.countDocuments();
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

export const creatformation= async (req, res) => {
  const { nom, formateur,  categorie, date, horaire, lieu, prix, Nombredeplace, description, selectedFile } = req.body;
  
  const newFormation = new Formation({ nom, formateur,  categorie, date, horaire, lieu, prix, Nombredeplace, description, selectedFile })
  try {
      await newFormation.save();
      res.status(201).json(newFormation );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}

export const updateFormation = async (req, res) => {
  const { id : _id } = req.params;
  const formation = req.body;

 if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Aucune formation avec cet id');

  const updatedFormation = await Formation.findByIdAndUpdate(_id, {...formation, _id}, { new: true });
  res.json(updatedFormation);
}

export const deleteFormation = async (req, res) => {
  const { id } = req.params;

 if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Aucune formation avec cet id ');
   await Formation.findByIdAndRemove(id);
  res.json({message : 'la formation a ete supprimer avec succés !'} );
}
