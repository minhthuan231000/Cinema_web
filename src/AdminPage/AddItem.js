/* eslint-disable no-use-before-define */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    flexWrap: 'wrap',
    color: 'black'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  addButton: {
    height: 10,
    width: 30,
  },
  reduceButton: {
    height: 10,
    width: 30,
  },
  size: {
    margin: 8,
    width: '1em',
  },
  resizeGroup: {
    display: 'inline',
  }
}));


export default function FeatureAdd() {
  const classes = useStyles();

  const [type, setType] = React.useState('');
  const handleChangeType = (event) => {
    setType(event.target.value);
  }

  const [countX, setCountX] = React.useState(1);
  const [countY, setCountY] = React.useState(1);
  const handleSubmit = () => {

  }
  return (
    <div>
      <form className={classes.root} autoComplete="auto" >
        <div>
          <label><h4>Thêm rạp</h4></label>
        </div>
        <TextField style={{ margin: 8 }} id="standard-basic" label="Tên Rạp"/>
        <FormControl className={classes.formControl}>
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
        <div>
          <label><h6>Cấu hình ghế</h6></label>
        </div>
        <InputLabel id="demo-simple-select-label">Chiều ngang</InputLabel>
        <Fab size="small" color="primary" aria-label="chieungang" onClick={() => {
          setCountX(Math.max(countX - 1, 10));
        }} className={classes.addButton}>
          <RemoveIcon fontSize="small" />
        </Fab>
        <TextField className={classes.size} value={countX} />
        <Fab size="small" color="primary" aria-label="chieungang" onClick={() => {
          setCountX(Math.min(countX + 1, 20));
        }} className={classes.reduceButton} >
          <AddIcon fontSize="small" />
        </Fab>
        <InputLabel id="demo-simple-select-label">Chiều dọc</InputLabel>
          <Fab size="small" color="primary" aria-label="chieudoc" onClick={() => {
            setCountY(Math.max(countY - 1, 10));
          }} className={classes.addButton}>
            <RemoveIcon fontSize="small" />
          </Fab>
        <TextField className={classes.size} value={countY} />
        <Fab size="small" color="primary" aria-label="chieudoc" onClick={() => {
          setCountY(Math.min(countY + 1, 20));
        }} className={classes.reduceButton} >
          <AddIcon fontSize="small" />
        </Fab>
        <hr />
        <div>
          <label><h4>Thêm cụm rạp</h4></label>
        </div>
        <TextField style={{ margin: 8 }} id="standard-basic" label="Tên Cụm Rạp" />
        <TextField style={{ margin: 8 }} id="standard-basic" label="Địa Chỉ" />

        <hr />
        <div>
          <label><h4>Thêm Phim</h4></label>
        </div>
        <TextField style={{ margin: 8 }} id="standard-basic" label="Tên Phim" />
        <TextField style={{ margin: 8 }} id="standard-basic" label="Thời lượng (phút)" />
        <TextField style={{ margin: 8 }} id="standard-basic" label="Ngày công chiếu" />

        <ImageUpload cardName="Input Image" />
        <hr />
        <div>
          <label><h4>Thêm Suất Chiếu</h4></label>
        </div>
        <TextField style={{ margin: 8 }} id="standard-basic" label="Thời điểm bắt đầu" />
        <TextField style={{ margin: 8 }} id="standard-basic" label="Thời điểm kết thúc" />
        <InputLabel id="demo-simple-select-label">Submit</InputLabel>
        <Fab size="small" color="secondary" aria-label="submit" className={classes.reduceButton} onSubmit={handleSubmit} >
          <QueueIcon />
        </Fab>
      </form>
    </div>
  );
}