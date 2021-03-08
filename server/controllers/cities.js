import Cities from "../models/cities.js";


/* export const getCity = async (req, res) => {
  try {
    console.log("params", req.query.gouvId);
    const wordsearched = req.query.gouvId;
    const cities = await Cities.aggregate([
      {
        $lookup: {
          from: "gouvernorats",
          localField: "id_gouvernorat",
          foreignField: "_id",
          as: "id_gouvernorat",
        },
      },
      {
        $match: {
        
            { nomformation: { $regex: wordsearched } },  
      },
    },
    ]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}; */