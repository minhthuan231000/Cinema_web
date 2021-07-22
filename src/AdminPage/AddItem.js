/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import QueueIcon from '@material-ui/icons/Queue';
import ImageUpload from "./ImageUpload";
import Paper from '@material-ui/core/Paper';

import './admin.css'
// import imageToBase64 from 'image-to-base64/browser';
// const fs = require('fs');

const DOMAIN = process.env.REACT_APP_DOMAIN;
export default function FeatureAdd() {

  // const [type, setType] = React.useState('');
  // const [tenRap, setTenRap] = React.useState('');
  // const [tenPhim, setTenFilm] = React.useState('');
  // const [countX, setCountX] = React.useState(10);
  // const [countY, setCountY] = React.useState(10);


  let formCinemas = {};
  const handleChangeThemCumRap = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    formCinemas[name]= value;
  }

  const handleSubmit1 = () => {
    let data = {
      name: formCinemas.name,
      address: formCinemas.address
    };
    console.log(data) 
    let request = new Request(`${DOMAIN}/api/cinema`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    });
    fetch(request)
        .then(res => res.json())
        .then((result) => {
            if (result) {
                if(result.status === '200'){
                  alert('Success');
                }else if(result.status === '400'){
                  alert(result.message)
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

  let formShowtimes = {};
  const handleChangeShowtimes = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    formShowtimes[name] = value;
  }

  let formTheater = {};
  const handleChangeTheater = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    formTheater[name] = value;
  }

  let formMovie = {};
  const handleChangeMovie = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    formMovie[name] = value;
  }

  const handleFileSelect = (event) => {

  }

  const handleSubmit3 = () => {
    let data = {
      theater_id: formShowtimes.cbRap,
      movie_id: formShowtimes.cbPhim,
      start_time: formShowtimes.start_time,
      end_time: formShowtimes.end_time,
      price: 80001
    };
    let request = new Request(`${DOMAIN}/api/showtime`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    });
    fetch(request)
      .then(res => res.json())
      .then((result) => {
        if (result) {
          if (result.status === '200') {
            alert('Success');
          } else if (result.status === '400') {
            console.log('Del showtime error');
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

  // const handleSubmit5 = () => {
  // }

  const handleSubmit4 = () => {
    let data = {
      name: formMovie.name,
      image: 'test1',
      trailer: 'test1',
      introduce: 'introduce',
      minute_time: formMovie.minute_time,
      opening_day: formMovie.opening_day,
      view: 0
    };
    let request = new Request(`${DOMAIN}/api/movie`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    });
    fetch(request)
      .then(res => res.json())
      .then((result) => {
        if (result) {
          if (result.status === '200') {
            alert('Success');
          } else if (result.status === '400') {
            console.log('Del showtime error');
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

  const handleSubmit2 = () => {
    let data = {
      name: formTheater.tenrap,
      cinema_id: formTheater.cumrap,
      type: formTheater.loairap,
      number_row: formTheater.cn,
      number_column: formTheater.cd
    };
    console.log(data)
    let request = new Request(`${DOMAIN}/api/theater`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    });
    fetch(request)
      .then(res => res.json())
      .then((result) => {
        if (result) {
          if (result.status === '200') {
            alert('Success');
          } else if (result.status === '400') {
            console.log('Del showtime error');
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

  const showLoaiRap = () => {
    let list_loairap = [{ "name": '2d' }, { "name": '3d' }, { "name": '4dx' }];
    const showlist = list_loairap.map((item, index) => {
      return <MenuItem key={index} value={item.name} onClick={handleClick}>{item.name}</MenuItem>
    })
    return showlist;
  }

  const showCumRap = () => {
    let list_cumrap = JSON.parse(localStorage.getItem('cinema')||0);
    const showlist = list_cumrap.map((item, index) => {
      return <MenuItem key={index} value={item.id} onClick={handleClick}>{item.name}</MenuItem>
    })
    return showlist;
  }

  const showListItemPhim = () => {
    let list_movie = JSON.parse(localStorage.getItem('movie')||0);
    const showlist = list_movie.map((item, index) => {
      return <MenuItem key={index} value={item.id} onClick={handleClick}>{item.name}</MenuItem>
    })
    return showlist;
  }
  const showListItemRap = () => {
    let list_rap = JSON.parse(localStorage.getItem('theater')||0);
    const showlist = list_rap.map((item, index) => {
      return <MenuItem key={index} value={item.id} onClick={handleClick}>{item.name}</MenuItem>
    })
    return showlist;
  }
  const [date] = React.useState("2021-07-12T10:30"); // value date fomat with 2021-07-12T10:30
  // handles when user changes input in date inputfield
  // const handleChangeDate = e => {
  //   setDate(e.target.value);
  // };
  const handleClick = event => {
    const { myValue } = event.target.value;
    console.log(myValue) // --> 123
  }
  return (
    <div className="addFeature-root">
      <div className="col-5" >
        <form autoComplete="auto" >
          <Paper style={{ boxShadow: '1px 4px 3px 0px rgb(0,0,0,0.7)' }}>
            <div className="groupCumRap">
              <div><label><h4>Thêm cụm rạp</h4></label></div>
              <TextField style={{ marginLeft: 10 }} id="standard-basic" name="name" label="Tên Cụm Rạp" onChange={(e) => handleChangeThemCumRap(e)} />
              <TextField style={{ margin: '8px 5px 5px 10px', width: '20em' }} id="standard-basic" name="address" label="Địa Chỉ" onChange={(e) => handleChangeThemCumRap(e)} />
            </div>
            <p></p>
            <InputLabel id="demo-simple-select-label" >&ensp;Submit</InputLabel>
            <Fab style={{ margin: '0 0 5px 5px' }} size="small" color="secondary" onClick={() => handleSubmit1()} aria-label="submit" className="" >
              <QueueIcon />
            </Fab>
          </Paper>
        </form>
        <form autoComplete="auto" >
          <div className="groupAdd-rap">
            <Paper style={{ boxShadow: '1px 4px 3px 0px rgb(0,0,0,0.7)', marginTop: '20px' }}>
              <label><h4>Thêm rạp</h4></label>
              <div className="groupControl-rap">
                <TextField style={{ marginInlineEnd: '0.5em' }} id="textField-TenRap" name="tenrap" label="Tên Rạp" onChange={(e) => handleChangeTheater(e)} />
                <FormControl className="input-TypeRap" style={{ marginInlineEnd: '0.5em' }}>
                  <InputLabel id="demo-simple-select-label">Loại Rạp</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="loairap"
                    onChange={(e) => handleChangeTheater(e)}
                  >
                    {showLoaiRap()}
                  </Select>
                </FormControl>
                <FormControl className="input-TypeRap">
                  <InputLabel id="demo-simple-select-label">Cụm Rạp</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="cumrap"
                    onChange={(e) => handleChangeTheater(e)}
                  >
                    {showCumRap()}
                  </Select>
                </FormControl>
              </div>
              <div className="groupCauHinhGhe">
                <div><label><h6>Cấu hình ghế</h6></label></div>
                <div className="groupSize">
                  <InputLabel>Chiều ngang</InputLabel>
                  <TextField name="cn" className="textField-SizeRap" onChange={(e) => handleChangeTheater(e)} />
                </div>
                <div className="groupSize">
                  <InputLabel>Chiều dọc</InputLabel>
                  <TextField className="textField-SizeRap" name="cd" onChange={(e) => handleChangeTheater(e)} />
                </div>
              </div>
              <p></p>
              <InputLabel id="demo-simple-select-label" >&ensp;Submit</InputLabel>
              <Fab style={{ margin: '0 0 5px 5px' }} size="small" color="secondary" aria-label="submit" className="" onClick={handleSubmit2} >
                <QueueIcon />
              </Fab>
            </Paper>
          </div>
        </form>
        <form autoComplete="auto" >
          <Paper style={{ boxShadow: '1px 4px 3px 0px rgb(0,0,0,0.7)', marginTop: '20px' }}>
            <div className="groupSuatChieu">
              <div>
                <label><h4>Thêm Suất Chiếu</h4></label>
              </div>
              <TextField
                id="datetime"
                label="Thời điểm bắt đầu"
                name="start_time"
                type="datetime-local"
                defaultValue={date}
                onChange={(e) => handleChangeShowtimes(e)}
                style={{ margin: '3px 8px 0 10px' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="datetime"
                label="Thời điểm kết thúc"
                type="datetime-local"
                name="end_time"
                defaultValue={date}
                onChange={(e) => handleChangeShowtimes(e)}
                style={{ marginTop: 3 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControl style={{ margin: '3px 8px 0 10px', width: '10em' }}>
                <InputLabel id="demo-simple-select-label">Phim</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="cbPhim"
                  onChange={(e) => handleChangeShowtimes(e)}
                >
                  {showListItemPhim()}
                </Select>
              </FormControl>
              <FormControl style={{ margin: '3px 8px 0 10px', width: '5.8em' }}>
                <InputLabel id="demo-simple-select-label">Rạp</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="cbRap"
                  onChange={(e) => handleChangeShowtimes(e)}
                >
                  {showListItemRap()}
                </Select>
              </FormControl>
              <p></p>
              <InputLabel id="demo-simple-select-label">&ensp;Submit</InputLabel>
              <Fab style={{ margin: '0 0 5px 5px' }} size="small" color="secondary" aria-label="submit" className="" onClick={() => handleSubmit3()} >
                <QueueIcon />
              </Fab>
            </div>
          </Paper>
        </form>
      </div>
      <div className="col-5" >
        <form autoComplete="auto">
          <Paper style={{ boxShadow: '1px 4px 3px 0px rgb(0,0,0,0.7)' }}>
            <div className="groupAdd-phim">
              <div>
                <label><h4>Thêm Phim</h4></label>
              </div>
              <TextField style={{ margin: 8 }} id="standard-basic" label="Tên Phim" name="name" onChange={(e) => handleChangeMovie(e)} />
              <TextField style={{ margin: 8 }} id="standard-basic" label="Thời lượng (phút)" name="minute_time" onChange={(e) => handleChangeMovie(e)} />
              <TextField
                id="datetime"
                label="Them suat chieu"
                type="datetime-local"
                name="opening_day"
                onChange={(e) => handleChangeMovie(e)}
                defaultValue={date}
                style={{ margin: '3px 8px 0 10px' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <ImageUpload cardName="Input Image" onChange={(e) => handleFileSelect(e)} />
              <p></p>
              <InputLabel id="demo-simple-select-label">&ensp;Submit</InputLabel>
              <Fab style={{ margin: '0 0 5px 5px' }} size="small" color="secondary" aria-label="submit" className="" onClick={handleSubmit4} >
                <QueueIcon />
              </Fab>
            </div>
          </Paper>
        </form>
      </div>
    </div>
  );
}
