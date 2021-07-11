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
  const handleChangeType = (event) => {
    setType(event.target.value);
  }

  const [countX, setCountX] = React.useState(10);
  const [countY, setCountY] = React.useState(10);
  const handleSubmit1 = () => {

  }
  const handleSubmit2 = () => {

  }
  return (
    <div className="addFeature-root">
      <div className="col-5" >
        <form autoComplete="auto" >
          <div className="groupAdd-rap">
            <Paper style={{ boxShadow: '1px 4px 3px 0px rgb(0,0,0,0.7)' }}>
              <label><h4>Thêm rạp</h4></label>
              <div className="groupControl-rap">
                <TextField style={{ marginInlineEnd: '0.5em' }} id="textField-TenRap" label="Tên Rạp" />
                <FormControl className="input-TypeRap">
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
              <InputLabel id="demo-simple-select-label">&ensp;Submit</InputLabel>
              <Fab style={{ margin: '0 0 5px 5px' }} size="small" color="secondary" aria-label="submit" className="" onSubmit={handleSubmit1} >
                <QueueIcon />
              </Fab>
            </Paper>
          </div>
        </form>
        <form autoComplete="auto" >
          <Paper style={{ boxShadow: '1px 4px 3px 0px rgb(0,0,0,0.7)', marginTop: '20px' }}>
            <div className="groupCumRap">
              <div><label><h4>Thêm cụm rạp</h4></label></div>
              <TextField style={{ marginLeft: 10 }} id="standard-basic" label="Tên Cụm Rạp" />
              <TextField style={{ margin: '8px 5px 5px 10px', paddingInlineEnd: 15 }} fullWidth={true} id="standard-basic" label="Địa Chỉ" />
            </div>
            <p></p>
            <InputLabel id="demo-simple-select-label">&ensp;Submit</InputLabel>
            <Fab style={{ margin: '0 0 5px 5px' }} size="small" color="secondary" aria-label="submit" className="" onSubmit={handleSubmit1} >
              <QueueIcon />
            </Fab>
          </Paper>
        </form>
        <form autoComplete="auto" >
          <Paper style={{ boxShadow: '1px 4px 3px 0px rgb(0,0,0,0.7)', marginTop: '20px' }}>
            <div className="groupSuatChieu">
              <div>
                <label><h4>Thêm Suất Chiếu</h4></label>
              </div>
              <TextField style={{ margin: '3px 8px 0 10px' }} id="standard-basic" label="Thời điểm bắt đầu" />
              <TextField style={{ marginTop: 3 }} id="standard-basic" label="Thời điểm kết thúc" />
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
              <TextField style={{ margin: 8 }} id="standard-basic" label="Tên Phim" />
              <TextField style={{ margin: 8 }} id="standard-basic" label="Thời lượng (phút)" />
              <TextField style={{ margin: 8 }} id="standard-basic" label="Ngày công chiếu" placeholder="(MM/DD/YYYY)" />

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