import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Modal from './modal';
import ModalA from './modal2';

import Tab from '@material-ui/core/Tab';
import { getBookingsformer, Reservationvalidated,Annulation ,getBookingscenter} from "../../actions/booking";
import { useDispatch } from 'react-redux';
import moment from "moment";
import useStyles from './styles';
import Checkbox from '@material-ui/core/Checkbox';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import RestoreIcon from '@material-ui/icons/Restore';
import Badge from '@material-ui/core/Badge';

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
  { id: 'firstname', numeric: true, disablePadding: false, label: 'Nom' },
  { id: 'lastname', numeric: true, disablePadding: false, label: 'Prénom' },
  { id: 'name trainings', numeric: true, disablePadding: false, label: 'Nom de formation' },
  { id: 'phone', numeric: true, disablePadding: false, label: 'Numéro de téléphone' },
  { id: 'cin', numeric: true, disablePadding: false, label: 'Cin' },
  { id: 'firstdate', numeric: true, disablePadding: false, label: 'Date début' },
  { id: 'lastdate', numeric: true, disablePadding: false, label: 'Date fin' },
  { id:  'Action', numeric: true, disablePadding: false, label: 'Validation' }

];

function EnhancedTableHead(props) {

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
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'left'}
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









export default function EnhancedTable() {

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('nom');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows , setRows] =useState([]);
  const [infos, setinfos]= useState(JSON.parse(localStorage.getItem('profile')));
  const [Data, setData] = useState(infos);
  const [iduser,setiduser]= useState(Data._id);
  const [id, setid]=useState([])
  const[count,setcount]=useState(0);
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
const classess = useStyles();
const [numberdemande,setnumberdemande] = useState();
  const dispatch = useDispatch([]);
  const handleOpen = () => {
    setid(selected);
    console.log(selected);

    setOpen(true);
  };
  const handleOpen2 = () => {
    setid(selected);

    setOpen2(true);
  };
  const handleClose = () => {
    setOpen(false);
  }
  const handleClose2 = () => {
    setOpen2(false);
  }
 useEffect(() => {

  if(Data.Role === 'formateur'){
   dispatch(getBookingsformer(iduser)).then((res) => {
     setRows(res.bookings);
     setnumberdemande(res.number);
     setcount(res.number);

   });
  
}
else if (Data.Role === 'centre'){
  dispatch(getBookingscenter(iduser)).then((res) => {
    setRows(res.bookings);
    setnumberdemande(res.number);
    setcount(res.number2);

  });
} 
  } ,[dispatch]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(Data.Role === 'formateur'){
    if (newValue===0){
      dispatch( getBookingsformer(iduser)).then((res) => {
    setRows(res.bookings);
    setnumberdemande(res.number);

      });
    }
    else {
      dispatch( getBookingsformer(iduser)).then((res) => {
        setRows(res.bookingsvalider);
        setcount(res.number2);
    });
    
  }
  }
  else if (Data.Role === 'centre'){
    if (newValue===0){
      dispatch( getBookingscenter(iduser)).then((res) => {
    setRows(res.bookings);
    setnumberdemande(res.number);
      });
    }
    else {
      dispatch( getBookingscenter(iduser)).then((res) => {
        setRows(res.bookingsvalider);
        console.log(rows);
        setcount(res.number2);
    });
  }
  }
}

const Valider = () =>  {
dispatch(Reservationvalidated(id));
window.location.reload(false);
setOpen(!open);
}

const Annuler = () => {
  dispatch(Annulation(id));
window.location.reload(false);
setOpen(!open2);

}
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) =>( n._id ));
      localStorage.setItem('booking', JSON.stringify(newSelecteds));

      setSelected(newSelecteds);

      return;

    }
    setSelected([]);
  };
 


  const handleClick = (event, _id,) => {
    const selectedIndex = selected.indexOf(_id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected,_id);
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
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 
  
  const isSelected = (_id) => selected.indexOf(_id) !== -1;


  return (
    <div className={classess.rootr}>
    <div>
    <Paper square className={classess.scrolbar} >
      <Tabs
      className={classess.indicator}
              value={value}
              onChange={handleChange}
        textColor="primary"
        aria-label="disabled tabs example"
      >
        <Tab label="Demande" icon={<Badge badgeContent={numberdemande} color="error">
  <RestoreIcon />
</Badge>}value={0} />
        <Tab label="Validée" icon={<Badge badgeContent={count} color="primary">
  <EventAvailableIcon />
</Badge>} value={1}/>
      </Tabs>
    </Paper>
    </div>
      <Paper className={classess.paperreserv}>
        <TableContainer>
          <Table
            className={classess.table}
            /* aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table" */
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
                      hover
                      onClick={(event) => handleClick(event, row._id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                    >
                       <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                     
                      <TableCell align="left">{row.users.firstname}</TableCell>
                      <TableCell align="left">{row.users.lastname}</TableCell>
                      <TableCell align="left">{row.trainings.name}</TableCell>
                      <TableCell align="left">{row.phone}</TableCell>
                      <TableCell align="left">{row.users.cin}</TableCell>
                      <TableCell align="left">{ moment(row.trainings.firstdate).format("yyyy-MM-DD")}</TableCell>
                      <TableCell align="left">{ moment(row.trainings.lastdate).format("yyyy-MM-DD")}</TableCell>
                    { value === 0 ?   <TableCell align="left">  <IconButton aria-label="valider" onClick={handleOpen} className={classes.margin}>
                      <CheckCircleIcon fontSize="large" className={classes.icons1}/></IconButton>
                      <IconButton aria-label="anuuler"  onClick={handleOpen2} className={classes.margin}>
          <CancelIcon fontSize="large"  className={classes.icons1}/> </IconButton>  
        </TableCell>:<TableCell align="left">  
                      <IconButton aria-label="anuuler"  onClick={handleOpen2} className={classes.margin}>
          <CancelIcon fontSize="large"  className={classes.icons1}/> </IconButton>  
        </TableCell> }
                    
             

                     

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
          labelRowsPerPage='lignes par page'
        />
       

      </Paper>
      <Modal handleClose={handleClose} open={open} setOpen={setOpen} Valider={Valider} />
      <ModalA handleClose={handleClose2} open={open2} setOpen={setOpen2} Annuler={Annuler} />
    </div>
  );
}