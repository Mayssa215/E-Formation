import { Card,Typography } from "@material-ui/core"


const Formateur = ( {formt} ) => {

return (
    <Card>
        <Typography variant="h6">{formt.nom} {formt.prenom } </Typography>
    </Card>
);


}
export default Formateur;