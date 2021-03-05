import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';
import Formroutes from './routes/formations.js';
import Categroutes from './routes/categories.js';
import formateurRoutes from "./routes/formateur.js";
import centreRoutes from "./routes/centre.js";
import paginationRoutes from "./routes/pagination.js";
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/formation', Formroutes);
app.use('/categories', Categroutes);
app.use("/formateur", formateurRoutes);
app.use("/centre", centreRoutes);
app.use("/pagination", paginationRoutes);

const CONNECTION_URL = 'mongodb+srv://maissa:maissa123@cluster0.ikcvk.mongodb.net/<dbname>?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,  {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server runnig on port: ${PORT}`) ))
.catch((error) => console.log(error.message) );

mongoose.set('useFindAndModify', false);

