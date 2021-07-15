import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import { SelectionState } from '@devexpress/dx-react-chart';
const DOMAIN = process.env.REACT_APP_DOMAIN;
const TAX_RATE = 0.1;
const loggedInUser = JSON.parse(sessionStorage.getItem('user'));

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

function ccyFormat(num) {
    return `${num.toFixed(3)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(name, seat, qty, unit) {
    const price = priceRow(qty, unit);
    return { name, seat, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('Avenger', 'F4', 3, 45000),
    createRow('Spiderman 3', 'G5', 2, 55000),
    createRow('Flash 3', 'H3', 1, 65000),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceSubtotal - invoiceTaxes;
export default  function Payment() {
    const classes = useStyles();

    const [data,setData] = React.useState([]);

    React.useEffect(()=> {
        if (loggedInUser) {
            requestData();
        }
        console.log(data.length);
        console.log(data);
    }, []);

    async function requestData() {
        let request = new Request(`${DOMAIN}/api/booking/${loggedInUser.id}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        });

        await fetch(request)
        .then(res => res.json())
        .then((result) => {
            if (result) {
                setData([result.data])
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
                                    <TableCell align="right">Price</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Seat</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Unit</TableCell>
                                    <TableCell align="right">Time order</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell align="right">{row.seat}</TableCell>
                                        <TableCell align="right">{row.qty}</TableCell>
                                        <TableCell align="right">{row.unit}</TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                    </TableRow>
                                ))}

                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={3}>Subtotal</TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>Discount</TableCell>
                                    <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
    );
}