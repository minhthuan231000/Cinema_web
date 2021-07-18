import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import './admin.css'

const DOMAIN = process.env.REACT_APP_DOMAIN;
const TAX_RATE = 0.1;
const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
const theater = JSON.parse(localStorage.getItem('theater') || '0');
const booking = JSON.parse(localStorage.getItem('booking') || '0');
const movie = JSON.parse(localStorage.getItem('movie') || '0');
console.log(booking)
const rows = createListRow(booking);
console.log(rows)
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
function getNameTheater(id) {
    return search(id, theater).name;
}
//Get chair_id
function getListChair(list_tickets) {
    let count = 0;
    let total = 0;
    let chair = '';
    let price = 0;
    count = list_tickets.length;
    list_tickets.map((p) => (price = p.price));
    list_tickets.map((ticket) => (total += ticket.price));
    list_tickets.map((str) => (
        chair += str.chair_id + ' '
    ));
    return [count, chair, price, total];
}
function createRow(bookings) {
    let name = getNameMovie(bookings.showtime.movie_id);
    let seat = getListChair(bookings.tickets)[1];
    let quantity = getListChair(bookings.tickets)[0];
    let unit = "Ticket";
    let total_price = getListChair(bookings.tickets)[3];;
    return [name, seat, quantity, unit, total_price];
}
function createRow2(bookings) {
    let name = getNameTheater(bookings.showtime.thea_id);
    let seat = getListChair(bookings.tickets)[1];
    let quantity = getListChair(bookings.tickets)[0];
    let unit = "Ticket";
    let total_price = getListChair(bookings.tickets)[3];;
    return [name, seat, quantity, unit, total_price];
}
function createListRow(booking_obj) {
    let rows = [];
    if (booking_obj) {
        booking_obj.map((b) => (rows.push(createRow(b))));
    }
    return rows;
}
function subtotal(items) {
    return items.map((total_price) => total_price).reduce((sum, i) => sum + i, 0);
}

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        float: 'left',
    },
    textField: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));
export default function Revenue() {
    const classes = useStyles();
    const [date, setDate] = React.useState( // define variable date
        moment(new Date()).format("YYYY-MM-DD") // fomat YYYY-MM-DD get Date.Now()
    );
    // handles when user changes input in date inputfield
    const handleChangeDate = e => {
        setDate(e.target.value);
    };
    if (!loggedInUser) {
        window.location.href = "/";
        return;
    }
    if (loggedInUser) {

        const invoiceSubtotal = subtotal(rows.map(row => row[4]));
        const invoiceTaxes = TAX_RATE * invoiceSubtotal;
        const invoiceTotal = invoiceSubtotal - invoiceTaxes;
        return (
            <div className="revenue_main">
                <div className="revenue_content">
                    <h2>Thống kê doanh thu theo cụm rạp</h2>
                </div>
                <TableContainer component={Paper}>
                    <form className={classes.container} noValidate method="POST" >
                        <TextField
                            id="date"
                            label="From"
                            type="date"
                            defaultValue={date}
                            onChange={handleChangeDate}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="date"
                            label="To"
                            type="date"
                            defaultValue={date}
                            onChange={handleChangeDate}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <button type="submit" className="btn btn-info">Load</button>
                    </form>
                    <Table aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={3}>
                                    Details
                                </TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tên Cụm Rạp</TableCell>
                                <TableCell align="right">Số Lượng</TableCell>
                                <TableCell align="right">Giá Vé</TableCell>
                                <TableCell align="right">Doanh Thu</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row[0]}>
                                    <TableCell>{row[0]}</TableCell>
                                    <TableCell align="right">{row[2]}</TableCell>
                                    <TableCell align="right">{row[4]}</TableCell>
                                    <TableCell align="right">{row[4]}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Tổng phụ</TableCell>
                                <TableCell align="right">{invoiceSubtotal}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Thuế</TableCell>
                                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                <TableCell align="right">{invoiceTaxes}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Tổng</TableCell>
                                <TableCell align="right">{invoiceTotal}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="revenue_content">
                    <h2>Thống kê doanh thu theo phim</h2>
                </div>
                <TableContainer component={Paper}>
                    <form className={classes.container} noValidate method="POST" >
                        <TextField
                            id="date"
                            label="From"
                            type="date"
                            defaultValue={date}
                            onChange={handleChangeDate}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="date"
                            label="To"
                            type="date"
                            defaultValue={date}
                            onChange={handleChangeDate}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <button type="submit" className="btn btn-info">Load</button>
                    </form>
                    <Table aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={3}>
                                    Details
                                </TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tên Phim</TableCell>
                                <TableCell align="right">Số Lượng</TableCell>
                                <TableCell align="right">Giá Vé</TableCell>
                                <TableCell align="right">Doanh Thu</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row[0]}>
                                    <TableCell>{row[0]}</TableCell>
                                    <TableCell align="right">{row[2]}</TableCell>
                                    <TableCell align="right">{row[3]}</TableCell>
                                    <TableCell align="right">{row[4]}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Tổng phụ</TableCell>
                                <TableCell align="right">{invoiceSubtotal}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Thuế</TableCell>
                                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                <TableCell align="right">{invoiceTaxes}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Tổng</TableCell>
                                <TableCell align="right">{invoiceTotal}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}
