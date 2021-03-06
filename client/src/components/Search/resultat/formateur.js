import { Card,Typography } from "@material-ui/core"


const Formateur = ( {formt} ) => {

return (
    <Card>
        <Typography variant="h6">{formt.nomformateur} {formt.prenom } </Typography>
    </Card>
);


}
export default Formateur;