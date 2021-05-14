import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { getAllCenters } from "../../actions/center";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Recherche from '../Search/search';
import {getSearchCenter} from '../../actions/center';
import {deleteCenter} from '../../actions/center';
import AddIcon from "@material-ui/icons/Add";
import useStyles1 from "./styles";
import Popup from './popup2';
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'firstname', numeric: false, disablePadding: true, label: 'Nom' },
  { id: 'namespeciality', numeric: false, disablePadding: true, label: 'Spécialité' },
  { id: 'namegouvernorate', numeric: false, disablePadding: true, label: 'Gouvernorat' },

  { id: 'namecities', numeric: false, disablePadding: true, label: 'ville' },
  { id: 'email', numeric: false, disablePadding: true, label: 'email' },

  { id: 'phone', numeric: false, disablePadding: true, label: 'numéro de téléphone' },
];

function EnhancedTableHead(props) {
  const classes1 = useStyles1();

  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            className={classes1.icon1}
            color="default"          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
  theme.palette.type === "light"
    ? {
        color: "#56367a",
      }
    : {
        color: "#ffffff",
      },
title: {
  flex: "1 1 100%",
},
}));


const  EnhancedTableToolbar = ({numSelected, Centre}) => {
  const classes1 = useStyles1();

  const classes = useToolbarStyles();
    const history= useHistory();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const Opening =()=>{
     setIsOpen(true);
   
    }
    const Closing =()=>{
      setIsOpen(false);
    
     }
const Delete =() => { dispatch(deleteCenter(Centre))
  alert('ce centre a été supprimé avec succès');

  window.location.reload(false);
};
  const Update = () => {

      history.push(`/centerupdate/${Centre}`);
    };

 
  return (
    
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected === 1 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} centre selectionné
        </Typography>
      ) : (
      numSelected > 1 ? (  <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
      {numSelected} centres selectionnés
    </Typography>) : (null)
      )}
      

      {numSelected > 0 ? (
        <div className={classes1.divicons}>
  <Tooltip title="Supprimer">
          <IconButton aria-label="delete" onClick={Opening }  >
            <DeleteIcon className={classes1.icon} />
         
          </IconButton>
        </Tooltip>
        <Popup open={isOpen}
           handleClose={Closing}
           setOpen={setIsOpen} 
           Delete={Delete}
           />
        <Tooltip title="Modifier">
          <IconButton aria-label="update" className={classes1.icon} onClick={Update}  >
        
            <EditIcon/>
          </IconButton>
        </Tooltip>
        </div>
      
        
      ) : (
       null
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    marginLeft:310,
  },
  paper: {
    width: '98%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('nom');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows , setRows] =useState([]);
  const [InputSearch,setInputSearch ] = useState("");

  const dispatch = useDispatch();
 useEffect(() => {
   dispatch(getAllCenters()).then((res) => {
     setRows(res);
 
   })} ,[dispatch]);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) =>( n._id ));
      setSelected(newSelecteds);
      console.log('all',newSelecteds);

      return;

    }
    
    setSelected([]);
  };

  const handleClick = (event, _id,lastname,namespeciality,namegouvernorate,namecities,phone,email,selectedimage,description,adressexact) => {
    const selectedIndex = selected.indexOf(_id);
    let newSelected = [];
let allcenter= '';
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected,_id);
        allcenter = newSelected.concat(selected,lastname,namespeciality,namegouvernorate,namecities,phone,email,selectedimage,description,adressexact)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
    //console.log('one',newSelected);
    console.log(allcenter);
    localStorage.setItem('center', JSON.stringify({allcenter }))

  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


 

  const isSelected = (_id) => selected.indexOf(_id) !== -1;

  const handlechangeRecherche = (e, value) => {
    
    setInputSearch(e.target.value);
    if(InputSearch.length > 0) {
      dispatch(getSearchCenter(InputSearch)).then((res) => {
        setRows(res);
    
      })
    }
    else{
      dispatch(getAllCenters()).then((res) => {
        setRows(res);
    
      })
    }
  
   
  }; 
  const classes1 = useStyles1();

  return (
    <div className={classes.root}>
            <Recherche handlechangeRecherche={handlechangeRecherche}/>

      <Paper className={classes.paper}>
      <IconButton  href='/AjouterCentre'  >
        <AddIcon  className={classes1.icon}/>
        </IconButton>
        <EnhancedTableToolbar numSelected={selected.length} Centre={selected}  />
        <TableContainer>
          <Table
            className={classes.table}
          
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow      
                     className={classes1.head}

                      hover
                      onClick={(event) => handleClick(event, row._id,row.lastname,row.namespeciality,row.namegouvernorate,row.namecities,row.email,row.phone,row.selectedimage,row.description,row.adressexact)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox" className={classes1.cell}>
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          className={classes1.icon1}
                          color="default"
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} className={classes1.cell} padding="none">
                        {row.lastname}
                      </TableCell>
                      <TableCell  className={classes1.cell} padding="none">{row.namespeciality}</TableCell>
                      <TableCell  className={classes1.cell} padding="none">{row.namegouvernorate}</TableCell>
                      <TableCell  className={classes1.cell}padding="none">{row.namecities}</TableCell>

                      <TableCell  padding="none" className={classes1.cell}>{row.email}</TableCell>
                      <TableCell  padding="none" className={classes1.cell}>{row.phone}</TableCell>

                    </TableRow>
                  );
                })}
           
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage="Lignes par page"

        />
       

      </Paper>
     
    </div>
  );
}