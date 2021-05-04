import React, { useEffect, useState } from "react";
import {
  Button,
  
} from "@material-ui/core";
import useStyles from "./styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { getcategorie } from "../../actions/categorie";
import { useDispatch } from "react-redux";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CloseIcon from "@material-ui/icons/Close";
import Checkbox from "@material-ui/core/Checkbox";

const Categorie = ( {onFilterCategoriesAplly } ) => {
  const dispatch = useDispatch();
  const [Categories, setCategories] = useState([]);
  const [CategoriesIds, setCategoriesIds] = useState([]);

  useEffect(() => {
    dispatch(getcategorie()).then((res) => {
      setCategories(res);
});
  }, [dispatch]);

  const [showcateg, setShowcateg] = useState(true);
  const classes = useStyles();

  const onChangeCategories = (event, value) => {
      if(value)
      {
          CategoriesIds.push( event.target.value);
        setCategoriesIds(CategoriesIds);

      }
      else 
      {
          CategoriesIds.splice(CategoriesIds.indexOf(event.target.value),1);
          setCategoriesIds(CategoriesIds);

      }
      onFilterCategoriesAplly(CategoriesIds);
  };

  return (
    <div>
      <div className={classes.categopen}>
        <FormLabel component="legend" className={classes.categlabel}>
          Catégorie
        </FormLabel>
        <Button
          className={classes.openicon}
          onClick={() => {
            setShowcateg(!showcateg);
          }}
        >
          {showcateg ? (
            <CloseIcon className={classes.iconopenclose} />
          ) : (
            <KeyboardArrowDownIcon className={classes.iconopenclose} />
          )}
        </Button>
      </div>
      {!showcateg || Categories.length === 0 ? null : (
        <FormGroup className={classes.check}>
          {Categories.map((c) => (
            <FormControlLabel
              key={c._id}
              control={
                <Checkbox
                  size="medium"
                  onChange={onChangeCategories}
                  value={c._id}
                               />
              }
              label={<span className={classes.categnom}>{c.nom} </span>}
            />
          ))}
        </FormGroup>
      )}
    </div>
  );
};
export default Categorie;