import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ChartData from './ChartData'

import moment from 'moment';
import './admin.css'
import { useEffect } from 'react';
import Cookies from 'universal-cookie'
const cookies = new Cookies();

const DOMAIN = process.env.REACT_APP_DOMAIN;
const TAX_RATE = 0.1;
const loggedInUser = cookies.get('user'); //Ko can doi

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


//Convert array cinema
function createRow(cinemas) {
    let name = cinemas.showtime.theater.cinema.name;
    let total = cinemas.total;
    let count = cinemas.count;
    let address = cinemas.showtime.theater.cinema.address;
    let id = cinemas.showtime.theater.cinema.id;
    return [name, count, address, total, id];
}
function createListRow(cinema_obj) {
    let rows = [];
    if (cinema_obj) {
        cinema_obj.map((c) => (rows.push(createRow(c))));
    }
    return rows;
}

//Convert array movie
function createRowMovie(movies) {
    let name = movies.showtime.movie.name;
    let total = movies.total;
    let count = movies.count;
    let view = movies.showtime.movie.view;
    let id = movies.showtime.movie.id;
    return [name, count, view, total, id];
}
function createListRowMovie(movie_obj) {
    let rows = [];
    if (movie_obj) {
        movie_obj.map((m) => (rows.push(createRowMovie(m))));
    }
    return rows;
}

export default function Revenue() {
    const classes = useStyles();
    const [date] = React.useState(moment(new Date()).format("YYYY-MM-DD"));
    // handles when user changes input in date input field
    const [revenue, setRevenue] = React.useState([]); //Thong ke theo cum rap
    const [revenueMovie, setRevenueMovie] = React.useState([]); //Thong ke theo phim
    let rows = [];
    let rowsMovie = [];
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page2, setPage2] = React.useState(0);
    const [rowsPerPage2, setRowsPerPage2] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleChangePage2 = (event, newPage) => {
        setPage2(newPage);
    };

    const handleChangeRowsPerPage2 = (event) => {
        setRowsPerPage2(+event.target.value);
        setPage2(0);
    };
    useEffect(function effectFunction() {
        const dataSetup = {
            dateStart: '2021-01-01',
            dateEnd: '2099-01-01'
        }
        const request = new Request(`${DOMAIN}/api/booking/cinema`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(dataSetup)
        });
        async function fetchRevenue() {
            const response = await fetch(request);
            const json = await response.json();
            await setRevenue(json.data);
        }
        fetchRevenue();
    }, []);
    useEffect(function effectFunction() {
        const dataSetup = {
            dateStart: '2021-01-01',
            dateEnd: '2099-01-01'
        }
        const request = new Request(`${DOMAIN}/api/booking/movie`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(dataSetup)
        });
        async function fetchRevenueMovie() {
            const response = await fetch(request);
            const json = await response.json();
            await setRevenueMovie(json.data);
        }
        fetchRevenueMovie();
    }, []);

    rows = createListRow(revenue);
    rowsMovie = createListRowMovie(revenueMovie);
    let Subtotal = rows.map((item) => item[3]).reduce((a, b) => Number.parseInt(a) + Number.parseInt(b), 0);
    let Tax = Subtotal * TAX_RATE;
    let Total = Subtotal - Tax;
    if (!loggedInUser) {
        window.location.href = "/";
        return;
    }
    const ThongKeCumRap = async () => {
        const dateStart = document.getElementById('from').value;
        const dateEnd = document.getElementById('to').value;
        const data = {
            dateStart: dateStart,
            dateEnd: dateEnd
        }

        const request = new Request(`${DOMAIN}/api/booking/cinema`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });
        await fetch(request)
            .then(res => res.json())
            .then((result) => {
                if (result) {
                    setRevenue(result.data);
                }
            },
                (error) => {
                    if (error) {
                        console.log(error);
                    }
                }
            )
    }
    const ThongKePhim = async () => {
        const dateStart = document.getElementById('from').value;
        const dateEnd = document.getElementById('to').value;
        const data = {
            dateStart: dateStart,
            dateEnd: dateEnd
        }

        const request = new Request(`${DOMAIN}/api/booking/movie`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });
        await fetch(request)
            .then(res => res.json())
            .then((result) => {
                if (result) {
                    setRevenueMovie(result.data);
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
        <div className="revenue_main">
            <div className="revenue_content">
                <h2>Thống kê doanh thu theo cụm rạp</h2>
            </div>
            <TableContainer component={Paper}>
                <TextField
                    id="from"
                    label="From"
                    type="date"
                    defaultValue={date}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="to"
                    label="To"
                    type="date"
                    defaultValue={date}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <button type="submit" onClick={() => ThongKeCumRap()} className="btn btn-info">Load</button>
                <Table aria-label="sticky table">
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
                            <TableCell align="right">Địa chỉ</TableCell>
                            <TableCell align="right">Doanh Thu</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row[0]}</TableCell>
                                <TableCell align="right">{row[1]}</TableCell>
                                <TableCell align="right">{row[2]}</TableCell>
                                <TableCell align="right">{row[3]}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Tổng phụ</TableCell>
                            <TableCell align="right">{Subtotal}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Thuế</TableCell>
                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                            <TableCell align="right">{Tax}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Tổng</TableCell>
                            <TableCell align="right">{Total}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>

            <div className="revenue_content">
                <h2>Thống kê doanh thu theo phim</h2>
            </div>
            <TableContainer component={Paper}>
                <TextField
                    id="date"
                    label="From"
                    type="date"
                    defaultValue={date}
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
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <button type="submit" onClick={() => ThongKePhim()} className="btn btn-info">Load</button>
                <Table aria-label="sticky table">
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
                            <TableCell align="right">View</TableCell>
                            <TableCell align="right">Doanh Thu</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsMovie.slice(page2 * rowsPerPage2, page2 * rowsPerPage2 + rowsPerPage2).map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row[0]}</TableCell>
                                <TableCell align="right">{row[1]}</TableCell>
                                <TableCell align="right">{row[2]}</TableCell>
                                <TableCell align="right">{row[3]}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Tổng phụ</TableCell>
                            <TableCell align="right">{Subtotal}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Thuế</TableCell>
                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                            <TableCell align="right">{Tax}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Tổng</TableCell>
                            <TableCell align="right">{Total}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                    component="div"
                    count={rowsMovie.length}
                    rowsPerPage={rowsPerPage2}
                    page={page2}
                    onPageChange={handleChangePage2}
                    onRowsPerPageChange={handleChangeRowsPerPage2}
                />
            </TableContainer>
            <div><p></p></div>
            <ChartData />
        </div>
    );

}
