import Formateur from "../models/formateur.js";

export const getFormateur = async (req, res) => {
  try {
    console.log("params", req.query.InputSearch);
    const wordsearched = req.query.InputSearch.replace( /\s\s+/g, ' ' );

    const formateurs = await Formateur.aggregate([
      {
        $lookup: {
          from: "formations",
          localField: "formations",
          foreignField: "_id",
          as: "formations",
        },
      },

      {
        $unwind: "$formations",
      },
      {
        $addFields: {
          fullName: {
            $concat: ["$formations.nom"," ", "$formations.description"],
          },
          fullNameInverse: {
            $concat: ["$formations.nom"," ", "$formations.description"],
          },
        },
      },

      {
        $match: {
          $or: [
            { nom: { $regex: wordsearched } },
            { prenom: { $regex: wordsearched } },
            { "formations.nomformation": { $regex: wordsearched } },
            { "formations.description": { $regex: wordsearched } },
            { fullName: { $regex: wordsearched } },
            { fullNameInverse: { $regex: wordsearched } },
          ],
        },
      },
    ]);

    console.log("Formateurs", formateurs);
    res.status(200).json(formateurs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};