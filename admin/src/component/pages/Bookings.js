import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import useStyles1 from "./styles";

import Paper from '@material-ui/core/Paper';

import { getBookings } from "../../actions/bookings";
import { useDispatch } from 'react-redux';
import Recherche from '../Search/search';
import {getSearchBooking} from '../../actions/bookings';
import moment from "moment";

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
  { id: 'firstname', numeric: false, disablePadding: false, label: 'Nom' },
  { id: 'lastname', numeric: false, disablePadding: true, label: 'Prénom' },
  { id: 'name trainings', numeric: false, disablePadding: false, label: 'Nom de formation' },

  { id: 'cin', numeric: false, disablePadding: true, label: 'Cin' },

  { id: 'phone', numeric: false, disablePadding: true, label: 'Numéro de téléphone' },
  { id: 'satus', numeric: false, disablePadding: true, label: 'Etat' },

   { id: 'firstdate', numeric: false, disablePadding: true, label: 'Date début' },
  { id: 'lastdate', numeric: false, disablePadding: true, label: 'Date fin' },

];

function EnhancedTableHead(props) {

  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
       
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


const useStyles = makeStyles((theme) => ({
  root: {
    width: '75%',
    marginLeft:320,
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
const [users,setusers] = useState();
  const dispatch = useDispatch([]);
 useEffect(() => {
   dispatch(getBookings()).then((res) => {
     console.log(res);
     setRows(res);
   });
   
  } ,[dispatch]);

 

   
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
 


  const handleClick = (event, _id) => {
    const selectedIndex = selected.indexOf(_id);
    let newSelected = [];
let allusers= '';
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected,_id);
        allusers = newSelected.concat(selected)
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
    localStorage.setItem('client', JSON.stringify({allusers }))

  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 
  const handlechangeRecherche = (e, value) => {
    
    setInputSearch(e.target.value);
    if(InputSearch.length > 0) {
      dispatch(getSearchBooking(InputSearch)).then((res) => {
        setRows(res);
    
      })
    }
    else{
      dispatch(getBookings()).then((res) => {
        setRows(res);
    
      })
    }
  
   
  }; 

  const isSelected = (_id) => selected.indexOf(_id) !== -1;
  const classes1 = useStyles1();


  return (
    <div className={classes.root}>
      <Recherche handlechangeRecherche={handlechangeRecherche}/>


      <Paper className={classes.paper}>
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
                      onClick={(event) => handleClick(event, row._id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                    >
                     
                      <TableCell className={classes1.cell} >{row.users.firstname}</TableCell>
                      <TableCell className={classes1.cell} padding="none">{row.users.lastname}</TableCell>
                      <TableCell className={classes1.cell} >{row.trainings.name}</TableCell>

                      <TableCell className={classes1.cell} padding="none">{row.users.cin}</TableCell>
                      <TableCell className={classes1.cell} >{row.phone}</TableCell>
                      <TableCell className={classes1.cell}  padding="none">{row.status ===""? 'En attente ': row.status}</TableCell>

                     <TableCell className={classes1.cell} padding="none">{ moment(row.trainings.firstdate).format("yyyy-MM-DD")}</TableCell>
                      <TableCell className={classes1.cell} >{ moment(row.trainings.lastdate).format("yyyy-MM-DD")}</TableCell>

                     

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