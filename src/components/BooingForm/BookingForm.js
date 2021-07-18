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
    let item = JSON.parse(sessionStorage.getItem('user'));
    const loggedInUser = sessionStorage.getItem('user');
    if (!loggedInUser) {
        window.location.href = "/Home";
    } 



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

    const [cine, setCine] = React.useState('');
    const [time, setTime] = React.useState('');

    const [listSeats, setListSeats] = React.useState([]);
    const [listTime, setListTime] = React.useState([]);
    const [locationSeat, setLocationSeat] = React.useState([]);
    const [user_id, setUserId] = React.useState(item.id);
    const [price, setPrice] = React.useState(0);
    const [showtime_id, setShowtimeId] = React.useState();
    const [listShowtimes, setListShowtimes] = React.useState([]);
    const DOMAIN = process.env.REACT_APP_DOMAIN;
    
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get('id'); // movie_id
    const [movie_id, setMovieId] = React.useState(foo); // set dữ liệu cho movie_id thành công

    const handleChangeCinema = async(event) => {
        setCine(event.target.value);
        // setListTime([]);
        const request = new Request(`${DOMAIN}/api/showtime/movie?movie=`+foo+'&theater='+event.target.value, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        });

        await fetch(request)
            .then(res => res.json())
            .then((result) => {
                if (result) {
                    setListShowtimes(result.data);
                    console.log(result.data)
                }
            },
                (error) => {
                    if (error) {
                        console.log(error);
                    }
                }
            )
        let list =await listShowtimes.map((time) => ([time.id,time.start_time,time.price]) );
        await setListTime(list);
    };
    const handleChangeTime = (event) => {
        setTime(event.target.value);
        setShowtimeId(event.target.value[0])
        setPrice(event.target.value[2])
    };

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
            return <MenuItem key={index} value={item.id} >{item.name}</MenuItem>
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
        const show_list = listTime.map((item) => {
            return <MenuItem key={item[0]} value={[item[0],item[1],item[2]]}>{item[1]}</MenuItem>
        })
        return show_list;
    }
    const ArrConvert = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13,
        'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
    }
    const AddToCartClick = async() => {
        var dic = {}
        let listSeatConvert = listSeats.map(o => { return o.value })
        for (let index = 0; index < listSeats.length; index++) {
            var temp = listSeats[index].value.charAt(1);
            let seat = listSeats[index].value;
            let address_x = listSeats[index].value.charAt(0)  ;
            let address_y =ArrConvert[temp];
            dic[seat] =  [parseInt(address_x), address_y];

        }
        const data = {
            list_Seat: listSeatConvert,
            location_Seat: dic,
            user_id: user_id,
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
                    if(result.status==="200"){
                        alert("Đặt vé thành công!")
                        window.location.href = "/Payment"
                    }else{
                        alert("Đặt vé thất bại !!!");
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
    
    const seatsColumns = createCol(10);
    const seatsRows = createRow(6);
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