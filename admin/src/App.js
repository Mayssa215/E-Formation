import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./component/Dashboard/Sidebar";
import Signin from "./component/authentification/Signin";
import Forgetpassword from "./component/authentification/forgetpass";
import Resetpassword from "./component/authentification/resetpass";
import Logout from './component/pages/Logout';
import Statistique from "./component/pages/statistique";
import Formations from "./component/pages/Formations";
import UpdateTraining from "./component/pages/form";
import PrivateRoute from "./component/PrivateRoutes/privateroute";
import Form from "./component/pages/Ajoutformationformer";
import Formulaire from "./component/pages/Ajoutformationcenter";
import Formateurs from "./component/pages/Formateurs";
import UpdateFormer from "./component/pages/updateformer";
import Former from "./component/pages/Ajouterformer";
import Centres from "./component/pages/Centres";
import UpdateCenter from "./component/pages/updatecenter";
import AjouterCentre from './component/pages/Ajoutercentre';
import Clients from './component/pages/Clients';
import Updateuser from './component/pages/updateuser';
import AjouterClient from './component/pages/Ajouterclient';
import Bookings from './component/pages/Bookings';
import Catégories from './component/pages/Catégories';
import Profiladmin from "./component/pages/profile";
import Avis from "./component/pages/avis";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/forget">
        
          <Forgetpassword />
        </Route>
        <Route path="/déconnexion">   
        <Logout />
      </Route>
        <Route
          path="/user/resetpassword/:token"
          exact
          component={Resetpassword}
        />
        <>
          <Sidebar />
          <Route path="/dash" component={Statistique} />
          <Route path="/Formations" exact component={Formations} />
          <Route path="/Formateurs" exact component={Formateurs} />

          <PrivateRoute
            path="/trainingupdate/:id"
            component={UpdateTraining}
          ></PrivateRoute>
          <PrivateRoute
            path="/formerupdate/:id"
            component={UpdateFormer}
          ></PrivateRoute>
          <Route path="/FormationFormateur" component={Form} />
          <Route path="/FormationCentre" component={Formulaire} />
          <Route path="/AjouterFormateur" component={Former} />
          <Route path="/centresdeformation" exact component={Centres} />
          <Route path="/centerupdate" component={UpdateCenter} />
          <Route path= '/AjouterCentre' component={ AjouterCentre} />
          <Route path='/clients' component={Clients} />
          <Route path='/userupdate' component={Updateuser} />
          <Route path ="/AjouterClient" component={AjouterClient} />
          <Route path="/réservations" component={Bookings} />
          <Route path="/catégories" component={Catégories} />
          <Route path="/monprofil" component={Profiladmin} />
          <Route path="/avis" component={Avis} />

        </>
      </Switch>
    </Router>
  );
};

export default App;
