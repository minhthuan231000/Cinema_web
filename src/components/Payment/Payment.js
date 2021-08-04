import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import PaymentIcon from '@material-ui/icons/Payment';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const DOMAIN = process.env.REACT_APP_DOMAIN;
const TAX_RATE = 0.1;
const loggedInUser = cookies.get('user');
const movie = JSON.parse(localStorage.getItem('movie')||0);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
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

    let total_price =  getListChair(bookings.tickets)[3];;
    return [name,seat,quantity,unit,total_price] ;
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

export default function Payment() {
        const classes = useStyles();
        const [booking,setBooking] = React.useState([]);
        React.useEffect(function effectFunction() {
            const request = new Request(`${DOMAIN}/api/booking/`+loggedInUser.id, {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json' })
            });
            async function fetchBooks() {
                const response = await fetch(request);
                const json = await response.json();
                await setBooking(json.data);
            }
            fetchBooks();
        }, []);
        const rows = createListRow(booking);
        if (!loggedInUser) {
            window.location.href = "/";
            return;
        }
        function getCountBooking(booking) {
            let count_booking = [];
            booking.map((p) => (
                count_booking.push(p.id)
            ));
            return count_booking;
        
        }
        const invoiceSubtotal = subtotal(rows.map(row => row[4]));
        const invoiceTaxes = TAX_RATE * invoiceSubtotal;
        const invoiceTotal = invoiceSubtotal - invoiceTaxes;
        const DelPaymentClick = () => {
            alert("Hủy vé thành công")
        }
        const PaymentClick = async() => {
            let listId = getCountBooking(booking);
            let data = {
                listId: listId,
                user_id: loggedInUser.id
            }

            const request = new Request(`${DOMAIN}/api/booking/buy`, {
                method: 'POST',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(data)
            });
    
            await fetch(request)
                .then(res => res.json())
                .then((result) => {
                    if (result) {
                        if(result.status === '200'){
                            alert("Đặt vé thành công");
                            setBooking([]);
                            window.location.href = "/";
                        }
                    }
                },
                    (error) => {
                        if (error) {
                            console.log(error);
                        }
                    }
                )
        }
        return (
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="spanning table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" colSpan={3}>
                                        Details
                                    </TableCell>
                                    <TableCell align="right" colSpan={2} >Price</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Seat</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Unit</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row[0]}>
                                        <TableCell>{row[0]}</TableCell>
                                        <TableCell align="right">{row[1]}</TableCell>
                                        <TableCell align="right">{row[2]}</TableCell>
                                        <TableCell align="right">{row[3]}</TableCell>
                                        <TableCell align="right">{row[4]}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={3}>Subtotal</TableCell>
                                    <TableCell align="right">{invoiceSubtotal}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>Discount</TableCell>
                                    <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                    <TableCell align="right">{invoiceTaxes}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell align="right">{invoiceTotal}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={1} />
                                    <TableCell colSpan={4} align="right">
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            size="small"
                                            startIcon={<DeleteIcon />}
                                            onClick={DelPaymentClick}
                                            style={{ marginInlineEnd: 10 }}
                                        >
                                            Hủy Vé
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            startIcon={<PaymentIcon />}
                                            onClick={PaymentClick}
                                        >
                                            Thanh Toán
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                    </TableContainer>
                </div>
            </div>
        );
    }
