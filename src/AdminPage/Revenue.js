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

const TAX_RATE = 0.1;

/* function format_curency(a) {
    a.value = a.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
} */

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(name, qty, unit) {
    const price = priceRow(qty, unit);
    return { name, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('Cụm 1', 100, 45000),
    createRow('Cụm 2', 10, 65000),
    createRow('Cụm 3', 2, 55000),
];

const rows2 = [
    createRow('Avenger:	Endgame', 100, 45000),
    createRow('Spiderman 3', 120, 65000),
    createRow('Flash 3', 50, 55000),
];

// Tính toán thống kê theo cụm rạp
const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceSubtotal - invoiceTaxes;

// Tính toán thống kê theo phim
const invoiceSubtotal2 = subtotal(rows2);
const invoiceTaxes2 = TAX_RATE * invoiceSubtotal2;
const invoiceTotal2 = invoiceSubtotal2 - invoiceTaxes2;

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
    console.log(date)
    return (
        <div>
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
                </form>
                <Table className="revenue_table" aria-label="spanning table">
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
                            <TableRow key={row.name}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="right">{row.qty}</TableCell>
                                <TableCell align="right">{row.unit}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
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
                </form>
                <Table className="revenue_table" aria-label="spanning table">
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
                        {rows2.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="right">{row.qty}</TableCell>
                                <TableCell align="right">{row.unit}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Tổng phụ</TableCell>
                            <TableCell align="right">{invoiceSubtotal2}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Thuế</TableCell>
                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                            <TableCell align="right">{invoiceTaxes2}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Tổng</TableCell>
                            <TableCell align="right">{invoiceTotal2}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
