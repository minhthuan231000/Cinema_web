import React from 'react';
import './booking.css'
import { makeStyles } from '@material-ui/core/styles';
import img from '../../images/Poster/Avenger_Endgame.jpg'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
        border: '1px solid white'
    },
    inputLabel: {
        color: 'white',
        position: 'absolute'
    },
    select: {
        color: 'white',
    }
}));
export default function BookingForm() {
    const classes = useStyles();
    const [cine, setCine] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [open1, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [listSeats, setListSeats] = React.useState([]);
    const handleChangeCinema = (event) => {
        setCine(event.target.value);
    };
    const handleChangeDate = (event) => {
        setDate(event.target.value);
    };
    const handleChangeTime = (event) => {
        setTime(event.target.value);
    };
    // Handle Open - Close
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    // --
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleOpen2 = () => {
        setOpen2(true);
    };
    // --
    const handleClose3 = () => {
        setOpen3(false);
    };
    const handleOpen3 = () => {
        setOpen3(true);
    };
    const loggedInUser = localStorage.getItem('user');
    if (!loggedInUser) {
        window.location.href = "/Home";

    } else if (loggedInUser) {
        // const target = e.target;
        //xu li get Parameter
        //console.log(target.id)//get db from server
    }
    const createRow = (sizeRow) => {
        const Row = [];
        for (let index = 0; index < sizeRow; index++) {
            Row[index] = index + 1;
            Row[index].toString()
        }
        return Row;
    }
    const createCol = (sizeCol) => {
        const Col = [];
        let i = 97;
        for (let index = 0; index <= sizeCol; index++) {
            if (sizeCol / 2 === index) {
                Col[index] = ''
            }
            else {
                Col[index] = String.fromCharCode(i++);
            }
        }
        return Col;
    }
    /* need POST {
        "list_Seat": ["A1","A2"],
        "location_Seat": {"A1":[2,3],"A2":[2,4]},
        "movie_id":1,
        "user_id": 1,
        "showtime_id":1,
        "bookingtime": "13:30"
    } */
    const seatsColumns = createCol(6);
    const seatsRows = createRow(6);
    const priceSeat = 45000;
    const totalPrice = listSeats.length * priceSeat
    const changeSeats = (event) => {
        const target = event.target;
        const value = target.value;
        const check = target.checked;
        if (check) {
            const newList = listSeats.concat({ value });
            setListSeats(newList);
        } else if (!check) {
            const newList = listSeats.filter((item) => item.value !== value);
            setListSeats(newList);
        }
    }
    const seatsGenerator = () => {
        return (
            <div className="container">
                <h2>Movie Seat Selection</h2>
                <div className="matrix_table">
                    <table>
                        <tbody>
                            <tr>
                                <td></td>
                                {seatsColumns.map((column, index) => <td key={index}>{column}</td>)}
                            </tr>
                            {
                                seatsRows.map((row, index) => row === '' ? <tr key={index}></tr> :
                                    <tr key={index}>
                                        <td>
                                            {row}
                                        </td>
                                        {seatsColumns.map((column, index) => {
                                            return (
                                                column === '' ? <td key={index}>&nbsp;way&nbsp;</td> :
                                                    <td key={index}>
                                                        <input type="checkbox" onChange={(e) => changeSeats(e)} className="seat" id={`${row}${column}`} value={`${row}${column}`} />
                                                    </td>
                                            )
                                        })}
                                    </tr>)
                            }
                        </tbody>
                    </table>
                    <div className="note">
                        <div className="note-item">
                            <input type="checkbox" checked={true} readOnly={true} />
                            &nbsp;
                            <span>Selected Seat</span>
                        </div>
                        <div className="note-item">
                            <input type="checkbox" checked={false} />
                            &nbsp;
                            <span>Seat Availabel</span>
                        </div>
                        <div className="note-item">
                            <h6>Tickets: </h6>
                            &nbsp;
                            <span>{listSeats.length}</span>
                        </div>
                        <div className="note-item">
                            <h6>Price: </h6>
                            &nbsp;
                            <span>{totalPrice} VND</span>
                        </div>
                        <div className="note-item">
                            <button className="btn btn-info">Add to cart</button>
                        </div>
                    </div>
                </div>
                <h3>Screen this way</h3>
            </div>
        );
    };
    return (
        <div className="detail-booking">
            <div className="img_booking">
                <img src={img} alt="" />
                <div className="img_booking_content">
                    <h6>Director</h6>
                    <small>chris evans</small>
                    <h6>Cast</h6>
                    <small>joe russo, anthony russo</small>
                    <h6>Genre</h6>
                    <small>adventure</small>
                </div>
            </div>
            <div className="content_booking">
                <div className="booking_nav">
                    <FormControl className={classes.formControl}>
                        <InputLabel className={classes.inputLabel}>Select Cinema</InputLabel>
                        <Select
                            className={classes.select}
                            open={open1}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={cine}
                            onChange={handleChangeCinema}
                        >
                            <MenuItem value={1}>Item 1</MenuItem>
                            <MenuItem value={2}>Item 2</MenuItem>
                            <MenuItem value={3}>Item 3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel className={classes.inputLabel}>Start Date</InputLabel>
                        <Select
                            className={classes.select}
                            open={open2}
                            onClose={handleClose2}
                            onOpen={handleOpen2}
                            value={date}
                            onChange={handleChangeDate}
                        >
                            <MenuItem value={1}>Date 1</MenuItem>
                            <MenuItem value={2}>Date 2</MenuItem>
                            <MenuItem value={3}>Date 3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel className={classes.inputLabel}>Start Time</InputLabel>
                        <Select
                            className={classes.select}
                            open={open3}
                            onClose={handleClose3}
                            onOpen={handleOpen3}
                            value={time}
                            onChange={handleChangeTime}
                        >
                            <MenuItem value={1}>Time 1</MenuItem>
                            <MenuItem value={2}>Time 2</MenuItem>
                            <MenuItem value={3}>Time 3</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="seat_booking">
                    <div className="container seat_wrap">
                        {seatsGenerator()}
                    </div>
                </div>
            </div>
        </div>
    );
}