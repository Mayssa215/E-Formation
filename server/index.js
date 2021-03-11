import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';
import Formerroutes from './routes/former.js';
import Categorieroutes from './routes/categorie.js';
import Gouvernoratroutes from './routes/gouvernorat.js'
import Trainingroutees from "./routes/training.js";
import centreRoutes from "./routes/centre.js";
import Pagingroutes from "./routes/paging.js";
import Citiesroutes from "./routes/cities.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/training', Trainingroutees);
app.use('/categorie', Categorieroutes);
app.use("/former", Formerroutes);
app.use("/centre", centreRoutes);
app.use("/paging", Pagingroutes);
app.use('/gouvernorat', Gouvernoratroutes);
app.use('/cities', Citiesroutes);



const CONNECTION_URL = 'mongodb+srv://maissa:maissa123@cluster0.ikcvk.mongodb.net/<dbname>?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5006;

mongoose.connect(CONNECTION_URL,  {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server runnig on port: ${PORT}`) ))
.catch((error) => console.log(error.message) );

mongoose.set('useFindAndModify', false);

