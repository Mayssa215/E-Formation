import { Card,Typography } from "@material-ui/core"


const Centre = ( {centres} ) => {

return (
    <Card>
        <Typography variant="h6"> {centres.nomcentre}  </Typography>
    </Card>
);


}
export default Centre;
