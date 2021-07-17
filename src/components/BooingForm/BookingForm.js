import React from 'react';
import './booking.css'
import { makeStyles } from '@material-ui/core/styles';
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

    const [open1, setOpen] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    // Handle Open - Close
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    // --
    const handleClose3 = () => {
        setOpen3(false);
    };
    const handleOpen3 = () => {
        setOpen3(true);
    };
    /* need POST 
    {
        "list_Seat": ["D1","F8"],
        "location_Seat": {"D1":[4,1],"F8":[7,8]},
        "cinema_id": 1,
        "user_id": 2,
        "showtime_id":1,
    } */

    let item = JSON.parse(sessionStorage.getItem('user'));
    const [cine, setCine] = React.useState('');
    const [time, setTime] = React.useState('');

    const [listSeats, setListSeats] = React.useState([]);
    const [locationSeat, setLocationSeat] = React.useState([]);
    const [user_id, setUserId] = React.useState(item.id);
    const [cinema_id, setCinemaId] = React.useState();
    const [showtime_id, setShowtimeId] = React.useState();
    const handleChangeCinema = (event) => {
        setCine(event.target.value);
        setCinemaId(event.target.value);
    };
    const handleChangeTime = (event) => {
        setTime(event.target.value);
        setShowtimeId(event.target.value)
    };

    const loggedInUser = sessionStorage.getItem('user');
    if (!loggedInUser) {
        window.location.href = "/Home";
    } else if (loggedInUser) {
        // const target = e.target;
        //xu li get Parameter
        //console.log(target.id)//get db from server

    }
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get('id'); // movie_id
    const [movie_id, setMovieId] = React.useState(foo); // set dữ liệu cho movie_id thành công

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
    const seatsColumns = createCol(10);
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
            setLocationSeat(newList);
        } else if (!check) {
            const newList = listSeats.filter((item) => item.value !== value);
            setListSeats(newList);
            setLocationSeat(newList);
        }
    }
    const ShowSelectCinema = () => {
        let list_cinema = JSON.parse(localStorage.getItem('cinema'));
        const show_list = list_cinema.map((item, index) => {
            return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
        })
        return show_list;
    }
    const ShowImage = () => {
        let list_movie = JSON.parse(localStorage.getItem('movie'));
        const movies = list_movie.map((item, index) => {
            let img = new Buffer.from(item.image.data).toString("ascii")
            if (item.id == movie_id) {
                return <img key={index} src={`data:image/png;base64,${img}`} alt="" />
            } 
        })
        return movies
    }
    const ShowContentImage = () => {
        let list_movie = JSON.parse(localStorage.getItem('movie'));
        const movies = list_movie.map((item, index) => {
            if (item.id == movie_id) {
                return (
                    <div key={index} className="img_booking_content">
                        <h6>Tên Phim</h6>
                        <small>{item.name}</small>
                        <h6>Ngày Công Chiếu</h6>
                        <small>{item.opening_day}</small>
                        <h6>Tóm Tắt</h6>
                        <small>{item.introduce}</small>
                    </div>
                )
            }
        })
        return movies
    }
    const ShowSelectStartTime = () => {
        let list_STime = JSON.parse(localStorage.getItem('showtime'));
        const show_list = list_STime.map((item, index) => {
            return <MenuItem key={index} value={item.id}>{item.start_time}</MenuItem>
        })
        return show_list;
    }
    const ArrConvert = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13,
        'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
    }
    const AddToCartClick = () => {
        var dic = [{}]
        let listSeatConvert = listSeats.map(o => { return o.value })
        for (let index = 0; index < listSeats.length; index++) {
            var temp = listSeats[index].value.charAt(1);
            dic.push({
                key: listSeats[index].value,
                value: listSeats[index].value.charAt(0) + ArrConvert[temp]
            })

        }
        const obj = {
            list_Seat: listSeatConvert,
            location_Seat: dic,
            user_id: user_id,
            showtime_id: showtime_id,
        }
        console.log(obj)
        /* console.log('listSeatConvert: ' + listSeatConvert)
        console.log('dic: key:' + dic.map(o => { return o.key }) + " value: " + dic.map(o => { return o.value }))
        console.log('user_id:' + user_id);
        console.log('cinema_id:' + cinema_id);
        console.log('showtime_id:' + showtime_id); */
    }
    const seatsGenerator = () => {
        return (
            <div className="container">
                <div className="matrix_table">
                    <h2>Movie Seat Selection</h2>
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
                                                column === '' ? <td key={index}>&emsp;&emsp;</td> :
                                                    <td key={index}>
                                                        <input type="checkbox" onChange={(e) => changeSeats(e)} className="seat" id={`${row}${column}`} value={`${row}${column}`} />
                                                    </td>
                                            )
                                        })}
                                    </tr>)
                            }
                        </tbody>
                    </table>
                    <h3>Screen this way</h3>
                </div>
                <div className="note">
                    <div className="note-item">
                        <input type="checkbox" checked={true} readOnly={true} />
                        &nbsp;
                        <span>Selected Seat</span>
                    </div>
                    <div className="note-item">
                        <input type="checkbox" checked={false} readOnly={true} />
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
                        <button className="btn btn-info" onClick={AddToCartClick}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="detail-booking">
            <div className="img_booking">
                {ShowImage()}
                {ShowContentImage()}
            </div>
            <div className="content_booking">
                <div className="booking_nav">
                    <FormControl className={classes.formControl}>
                        <InputLabel className={classes.inputLabel}>Chọn Rạp</InputLabel>
                        <Select
                            className={classes.select}
                            open={open1}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={cine}
                            onChange={handleChangeCinema}
                        >
                            {ShowSelectCinema()}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel className={classes.inputLabel}>Chọn Suất chiếu</InputLabel>
                        <Select
                            className={classes.select}
                            open={open3}
                            onClose={handleClose3}
                            onOpen={handleOpen3}
                            value={time}
                            onChange={handleChangeTime}
                        >
                            {ShowSelectStartTime()}
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