import Centre from "../models/centre.js";

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