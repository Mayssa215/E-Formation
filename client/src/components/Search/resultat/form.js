import { Card,Typography } from "@material-ui/core"


const Form = ( {form} ) => {

return (
    <Card>
        <Typography variant="h6">{form.nomformation} {form.description } </Typography>
    </Card>
);


}
export default Form;