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
import EditIcon from '@material-ui/icons/Edit';
import { getcategorie } from "../../actions/categorie";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Recherche from '../Search/search';
import {getSearchCategorie} from '../../actions/categorie';
import AddIcon from "@material-ui/icons/Add";
import Modals from './AjouterCatégorie';
import Modals1 from './updateCategorie';
import useStyles1 from "./styles";

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
  { id: 'name', numeric: false, disablePadding: true, label: 'Nom' }
  
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
            inputProps={{ 'aria-label': 'selectionner tous les formateurs' }}
            className={classes1.icon1}
            color="default"  
          />
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


const  EnhancedTableToolbar = ({numSelected, categ}) => {
  const classes1 = useStyles1();

  const classes = useToolbarStyles();
    const history= useHistory();
    const dispatch = useDispatch();

const [open, setOpen] = React.useState(false);
const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
}

 
  return (
    
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected === 1 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} catégorie selectionnée
        </Typography>
      ) : (
      numSelected > 1 ? (  <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
      {numSelected} catégories selectionnés
    </Typography>) : (null)
      )}
      

      {numSelected > 0 ? (
        <div className={classes1.divicons}>
 
        <Tooltip title="Modifier">
          <IconButton aria-label="update" className={classes1.icon} onClick={handleOpen}  >
        
            <EditIcon/>

          </IconButton>

        </Tooltip>
        <Modals1 idcateg={categ}  open={open} handleClose={handleClose} setOpen={setOpen} />

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
    width: '70%',
    marginLeft:330,
  },
  paper: {
    width: '100%',
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
   dispatch(getcategorie()).then((res) => {
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

  const handleClick = (event, _id,nom) => {
    const selectedIndex = selected.indexOf(_id,);
    let newSelected = [];
let allcatégories= '';
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected,_id);
        allcatégories = newSelected.concat(selected,nom)
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
   
    localStorage.setItem('catégories', JSON.stringify({allcatégories }))

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
      dispatch(getSearchCategorie(InputSearch)).then((res) => {
        setRows(res);
    
      })
    }
    else{
      dispatch(getcategorie()).then((res) => {
        setRows(res);
    
      })
    }
  
   
  }; 
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  }
  const classes1 = useStyles1();

  return (
    <div className={classes.root}>
     <Recherche handlechangeRecherche={handlechangeRecherche}/>

      <Paper className={classes.paper}>
      <IconButton onClick={handleOpen1}  >
        <AddIcon   className={classes1.icon}/>
        </IconButton>
        <Modals  open={open1} handleClose={handleClose1} setOpen={setOpen1} />
        <EnhancedTableToolbar numSelected={selected.length} categ={selected}  />
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
                      onClick={(event) => handleClick(event, row._id,row.nom)}
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
                      <TableCell  className={classes1.cell} component="th" id={labelId}  padding="none">
                      {row.nom}
                      </TableCell>
                     

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