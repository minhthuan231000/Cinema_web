import React from 'react';
import './booking.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Cookies from 'universal-cookie'
const cookies = new Cookies();
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
    const loggedInUser = cookies.get('user');
    const [open1, setOpen] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    const [cine, setCine] = React.useState('');
    const [time, setTime] = React.useState('');

    const [listSeats, setListSeats] = React.useState([]);
    const [listTime, setListTime] = React.useState([]);
    const [listTheater, setListTheater] = React.useState([]);
    const [listTicket, setListTicket] = React.useState([]);
    //const [checkSeat, setCheckSeat] = React.useState(false);
    const [price, setPrice] = React.useState(0);
    const [showtime_id, setShowtimeId] = React.useState();
    const DOMAIN = process.env.REACT_APP_DOMAIN;
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get('id'); // movie_id
    const [movie_id] = React.useState(foo); // set dữ liệu cho movie_id thành công

    const [seatsRows, setRow] = React.useState([]);
    const [seatsColumns, setCol] = React.useState([]);
    React.useEffect(function effectFunction() {
        const DOMAIN = process.env.REACT_APP_DOMAIN;
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const foo = params.get('id'); // movie_id

        const request = new Request(`${DOMAIN}/api/movie/foundTheater/` + foo, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        async function fetchListTheater() {
            const response = await fetch(request);
            const json = await response.json();
            await setListTheater(json.data);
        }
        fetchListTheater();
    }, []);

    if (!loggedInUser) {
        window.location.href = "/Home";
    }
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

    const handleChangeCinema = async (event) => {
        setCine(event.target.value);
        let listShowtimes = {};
        const request = new Request(`${DOMAIN}/api/showtime/movie?movie=` + movie_id + '&theater=' + event.target.value, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        // fetch data from ../../randomuser/api
        // show avatar and name of user
        await fetch(request)
            .then(res => res.json())
            .then((result) => {
                if (result) {
                    listShowtimes = result.data;
                }
            },
                (error) => {
                    if (error) {
                        console.log(error);
                    }
                }
            )
        let list = listShowtimes.map((time) => ([time.id, time.start_time, time.price, time.theater.number_row, time.theater.number_column]));
        setListTime(list);
        setListTicket([]);
        setRow([]);
        setCol([]);
    };

    const searchPrice = (nameKey) => {
        for (var i = 0; i < listTime.length; i++) {
            if (listTime[i][0] === nameKey) {
                return listTime[i][2];
            }
        }
    }
    const handleChangeTime = async (event) => {
        let temp = event.target.value;
        var listTickets = [];
        await setTime('');
        await setTime(temp);
        await setShowtimeId(event.target.value);
        await setPrice(searchPrice(temp));
        const request = new Request(`${DOMAIN}/api/showtime/showtime/` + event.target.value, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        });

        await fetch(request)
            .then(res => res.json())
            .then((result) => {
                if (result) {
                    if (result.data[0].bookings[0] == null) {
                        return
                    }
                    else {
                        const Tickets_Booked = result.data[0].bookings;
                        for (let index = 0; index < Tickets_Booked.length; index++) {
                            const element = result.data[0].bookings[index].tickets.map(item => ({ 'X': item.address_x, 'Y': item.address_y }))
                            listTickets.push(element);
                        }
                    }
                } else {
                    return
                }
            })
        setListTicket(listTickets);
        let row = 0;
        let column = 0;
        if (listTime.length !== 0) {
            row = listTime[0][4];
            column = listTime[0][3];
        }
        setRow(createRow(row));
        setCol(createCol(column));
    };
    const createRow = (sizeRow) => {
        const Row = [];
        for (let index = 0; index < sizeRow; index++) {
            if(sizeRow % 2 !== 0){
                Row[index] = '';
            }
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

    const changeSeats = (event) => {
        if (time === '') {
            alert("Please select showtime !!!")
        }
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

    const ShowSelectCinema = () => {
        const show_list = listTheater.map((item, index) => {
            return <MenuItem key={index} value={item.theater.id} >{item.theater.name}</MenuItem>
        })
        return show_list;
    }

    const ShowImage = () => {
        let list_movie = JSON.parse(localStorage.getItem('movie') || 0);
        const movies = list_movie.map((item, index) => {
            let img = new Buffer.from(item.image.data).toString("ascii")
            if (item.id.toString() === movie_id) {
                return <img key={index} src={`data:image/png;base64,${img}`} alt="" />
            }
            return ' ';
        })
        return movies;
    }
    const ShowContentImage = () => {
        let list_movie = JSON.parse(localStorage.getItem('movie' || 0));
        const movies = list_movie.map((item, index) => {
            if (item.id.toString() === movie_id) {
                item.opening_day = item.opening_day.substr(0, item.opening_day.indexOf('T'))
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
            return ' ';
        })
        return movies
    }
    const ShowSelectStartTime = () => {
        const show_list = listTime.map((item, index) => {
            return <MenuItem key={index} value={item[0]}>{item[1]}</MenuItem>
        })
        return show_list;
    }
    const ArrConvert = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13,
        'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
    }
    const AddToCartClick = async () => {
        var dic = {}
        let listSeatConvert = listSeats.map(o => { return o.value })
        for (let index = 0; index < listSeats.length; index++) {
            let seat = listSeats[index].value;
            let address_x;
            let address_y;
            if (seat.length === 3) {
                let temp = listSeats[index].value.charAt(2);
                address_x = listSeats[index].value.charAt(0) + listSeats[index].value.charAt(1);
                address_y = ArrConvert[temp];
            } else if (seat.length === 2) {
                let temp = listSeats[index].value.charAt(1);
                address_x = listSeats[index].value.charAt(0);
                address_y = ArrConvert[temp];
            }
            dic[seat] = [parseInt(address_x), address_y];
        }

        const data = {
            list_Seat: listSeatConvert,
            location_Seat: dic,
            user_id: loggedInUser.id,
            showtime_id: showtime_id,
        }
        const request = new Request(`${DOMAIN}/api/booking`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });

        await fetch(request)
            .then(res => res.json())
            .then((result) => {
                if (result) {
                    if (result.status === "200") {
                        alert("Thêm vào giỏ hàng thành công!")
                        window.location.href = "/Payment"
                    } else {
                        alert("Thêm vào giỏ hàng thất bại !!!");
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

    const totalPrice = listSeats.length * price;

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
                                            if (listTicket[0] !== undefined) {
                                                for (let inx = 0; inx < listTicket.length; inx++) {
                                                    for (let inx2 = 0; inx2 < listTicket[inx].length; inx2++) {
                                                        if ((listTicket[inx][inx2]['X']) === row.toString() && listTicket[inx][inx2]['Y'] === ArrConvert[column].toString()) {
                                                            return (
                                                                <td key={index}>
                                                                    <input checked={true} type="checkbox" onChange={(e) => changeSeats(e)} className="seat" id={`${row}${column}`} value={`${row}${column}`} />
                                                                </td>
                                                            )
                                                        }
                                                    }
                                                }
                                            }
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
                            onChange={(e) => handleChangeCinema(e)}
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
                            value={time || ''}
                            onChange={(e) => handleChangeTime(e)}
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