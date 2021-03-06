import Former from "../models/former.js";

export const getFormer = async (req, res) => {
  try {
    console.log("params", req.query.InputSearch);
    const wordsearched = req.query.InputSearch.replace( /\s\s+/g, ' ' );

    const formers = await Former.aggregate([
      {
        $lookup: {
          from: "trainings",
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
            $concat: ["$formations.nomformation"," ", "$formations.description"],
          },
          fullNameInverse: {
            $concat: ["$formations.nomformation"," ", "$formations.description"],
          },
        },
      },

      {
        $match: {
          $or: [
            { nomformateur: { $regex: wordsearched } },
            { prenom: { $regex: wordsearched } },
            { "formations.nomformation": { $regex: wordsearched } },
            { "formations.description": { $regex: wordsearched } },
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