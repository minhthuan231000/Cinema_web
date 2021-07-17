import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const DOMAIN = process.env.REACT_APP_DOMAIN;

const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
const movie = JSON.parse(localStorage.getItem('movie'));
const booking = JSON.parse(localStorage.getItem('history_booking'));
const theater = JSON.parse(localStorage.getItem('theater'));
const cinema = JSON.parse(localStorage.getItem('cinema'));


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function search(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].id === nameKey) {
          return myArray[i];
      }
  }
}
//Name Movie
function getNameMovie(id) {
  return search(id, movie).name;
}
//Name Theater 
function getNameTheater(id) {
  return search(id, theater).name;
}//Name Cinema 
function getNameCinema(id) {
  return search(id, cinema).name;
}
//Get chair_id
function getListChair(list_tickets) {
  let count = 0;
  let total = 0;
  let chair = '';
  let price = 0;
  count = list_tickets.length;
  list_tickets.map((p) => (price = p.price));
  list_tickets.map((ticket) => (total+=ticket.price));
  list_tickets.map((str) => (
      chair += str.chair_id+ ' '
  ));
  return [count,chair,price,total];
}
function createRow(bookings) {
  let name =  getNameMovie(bookings.showtime.movie_id);
  let theater =  getNameTheater(bookings.showtime.theater_id);
  let quantity =  getListChair(bookings.tickets)[0];
  let seat = getListChair(bookings.tickets)[1];
  let price = getListChair(bookings.tickets)[2];
  let date_book = bookings.bookingtime;
  let cinema = getNameCinema(bookings.showtime.theater.cinema_id);
    return {
      name,
      theater,
      cinema,
      seat,
      history: [
        { date: date_book, price: price, amount: quantity }
      ],
  }
}
function createListRow(booking_obj){
  let rows = [];
  if(booking_obj){
      booking_obj.map((b) => (rows.push(createRow(b))));
  }
  return rows;
}
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.theater}</TableCell>
          <TableCell align="right">{row.cinema}</TableCell>
          <TableCell align="right">{row.seat}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Lịch Sử Đặt Vé
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Ngày</TableCell>
                      <TableCell>Giá Vé</TableCell>
                      <TableCell align="right">Số Lượng</TableCell>
                      <TableCell align="right">Tổng Giá (VND))</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">{historyRow.date}</TableCell>
                        <TableCell>{historyRow.price}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <TableCell align="right">{Math.round(historyRow.amount * historyRow.price * 100) / 100}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
export default function HistoryBooking() {
  if(!loggedInUser) {
    window.location.href = "/";
    return;
  }
    if(loggedInUser){
        const request = new Request(`${DOMAIN}/api/booking/history/${loggedInUser.id}`, {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json' })
            });
        fetch(request)
        .then(res => res.json())
        .then((result) => {
            if (result) {
                localStorage.removeItem('history_booking');
                localStorage.setItem('history_booking',JSON.stringify(result.data));
            }
        },
            (error) => {
                if (error) {
                    console.log(error);
                }
            }
        )
      const rows = createListRow(booking);
    return (
      <div className="container">
        <TableContainer component={Paper} style={{background: 'rgba(247, 247, 247, 0.8)'}}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Tên Phim</TableCell>
                <TableCell align="right">Rạp</TableCell>
                <TableCell align="right">Cụm Rạp</TableCell>
                <TableCell align="right">Ghế</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}