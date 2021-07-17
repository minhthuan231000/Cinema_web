/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import QueueIcon from '@material-ui/icons/Queue';
import ImageUpload from "./ImageUpload";
import Paper from '@material-ui/core/Paper';

import './admin.css'

export default function FeatureAdd() {

  const [type, setType] = React.useState('');
  const [tenRap, setTenRap] = React.useState('');
  const [tenPhim, setTenFilm] = React.useState('');

  const handleChangeType = (event) => {
    setType(event.target.value);
  }
  const handleChangeRap = (event) => {
    setTenRap(event.target.value);
  }
  const handleChangePhim = (event) => {
    setTenFilm(event.target.value);
  }
  const [countX, setCountX] = React.useState(10);
  const [countY, setCountY] = React.useState(10);
  let token = {};
  const handleChangeThemRap = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    token[name] = value;
    console.log(value)
  }
  const handleSubmit1 = () => {

  }
  const handleSubmit2 = () => {

  }
  const showCumRap = () => {
    let list_cumrap = JSON.parse(localStorage.getItem('cinema'));
    const showlist = list_cumrap.map((item, index) => {
      return <MenuItem key={index} value={index} onClick={handleClick}>{item.name}</MenuItem>
    })
    return showlist;
  }
  const showListItemPhim = () => {
    return <MenuItem value={1}>Phim 1</MenuItem>
  }
  const showListItemRap = () => {
    return <MenuItem value={1}>Rap 1</MenuItem>
  }
  const [date, setDate] = React.useState("2021-07-12T10:30"); // value date fomat with 2021-07-12T10:30
  // handles when user changes input in date inputfield
  const handleChangeDate = e => {
    setDate(e.target.value);
  };
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
              <TextField style={{ marginLeft: 10 }} id="standard-basic" label="Tên Cụm Rạp" onChange={(e) => handleChangeThemRap(e)} />
              <TextField style={{ margin: '8px 5px 5px 10px', width: '20em' }} id="standard-basic" label="Địa Chỉ" />
            </div>
            <p></p>
            <InputLabel id="demo-simple-select-label" onClick={handleSubmit1()}>&ensp;Submit</InputLabel>
            <Fab style={{ margin: '0 0 5px 5px' }} size="small" color="secondary" aria-label="submit" className="" onSubmit={handleSubmit1} >
              <QueueIcon />
            </Fab>
          </Paper>
        </form>
        <form autoComplete="auto" >
          <div className="groupAdd-rap">
            <Paper style={{ boxShadow: '1px 4px 3px 0px rgb(0,0,0,0.7)', marginTop: '20px' }}>
              <label><h4>Thêm rạp</h4></label>
              <div className="groupControl-rap">
                <TextField style={{ marginInlineEnd: '0.5em' }} id="textField-TenRap" label="Tên Rạp" onChange={handleChangeRap} value={tenRap} />
                <FormControl className="input-TypeRap" style={{ marginInlineEnd: '0.5em' }}>
                  <InputLabel id="demo-simple-select-label">Loại Rạp</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    onChange={handleChangeType}
                  >
                    <MenuItem value={'2D'}>2D</MenuItem>
                    <MenuItem value={'3D'}>3D</MenuItem>
                    <MenuItem value={'4DX'}>4DX</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className="input-TypeRap">
                  <InputLabel id="demo-simple-select-label">Cụm Rạp</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={3}
                  >
                    {showCumRap()}
                  </Select>
                </FormControl>
              </div>
              <div className="groupCauHinhGhe">
                <div><label><h6>Cấu hình ghế</h6></label></div>
                <div className="groupSize">
                  <InputLabel>Chiều ngang</InputLabel>
                  <Fab size="small" color="primary" aria-label="chieungang" onClick={() => {
                    setCountX(Math.max(countX - 1, 10));
                  }} className="">
                    <RemoveIcon fontSize="small" />
                  </Fab>
                  <TextField helperText="Max 20" className="textField-SizeRap" value={countX} />
                  <Fab size="small" color="primary" aria-label="chieungang" onClick={() => {
                    setCountX(Math.min(countX + 1, 20));
                  }} className="">
                    <AddIcon fontSize="small" />
                  </Fab>
                </div>
                <div className="groupSize">
                  <InputLabel>Chiều dọc</InputLabel>
                  <Fab size="small" color="primary" aria-label="chieudoc" onClick={() => {
                    setCountY(Math.max(countY - 1, 10));
                  }} className="">
                    <RemoveIcon fontSize="small" />
                  </Fab>
                  <TextField helperText="Max 20" className="textField-SizeRap" value={countY} />
                  <Fab size="small" color="primary" aria-label="chieudoc" onClick={() => {
                    setCountY(Math.min(countY + 1, 20));
                  }} className="">
                    <AddIcon fontSize="small" />
                  </Fab>
                </div>
              </div>
              <p></p>
              <InputLabel id="demo-simple-select-label" >&ensp;Submit</InputLabel>
              <Fab style={{ margin: '0 0 5px 5px' }} size="small" color="secondary" aria-label="submit" className="" onSubmit={handleSubmit1} >
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
                type="datetime-local"
                defaultValue={date}
                onChange={handleChangeDate}
                style={{ margin: '3px 8px 0 10px' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="datetime"
                label="Thời điểm kết thúc"
                type="datetime-local"
                defaultValue={date}
                onChange={handleChangeDate}
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
                >
                  {showListItemPhim()}
                </Select>
              </FormControl>
              <FormControl style={{ margin: '3px 8px 0 10px', width: '5.8em' }}>
                <InputLabel id="demo-simple-select-label">Rạp</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  {showListItemRap()}
                </Select>
              </FormControl>
              <p></p>
              <InputLabel id="demo-simple-select-label">&ensp;Submit</InputLabel>
              <Fab style={{ margin: '0 0 5px 5px' }} size="small" color="secondary" aria-label="submit" className="" onSubmit={handleSubmit1} >
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
              <TextField style={{ margin: 8 }} id="standard-basic" label="Tên Phim" onChange={handleChangePhim} value={tenPhim} />
              <TextField style={{ margin: 8 }} id="standard-basic" label="Thời lượng (phút)" />
              <TextField
                id="datetime"
                label="Them suat chieu"
                type="datetime-local"
                defaultValue={date}
                onChange={handleChangeDate}
                style={{ margin: '3px 8px 0 10px' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <ImageUpload cardName="Input Image" />
              <p></p>
              <InputLabel id="demo-simple-select-label">&ensp;Submit</InputLabel>
              <Fab style={{ margin: '0 0 5px 5px' }} size="small" color="secondary" aria-label="submit" className="" onSubmit={handleSubmit2} >
                <QueueIcon />
              </Fab>
            </div>
          </Paper>
        </form>
      </div>
    </div>
  );
}