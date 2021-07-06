import React from 'react';
import DeleteRap from './DeleteRap'
import DeleteCumRap from './DeleteCumRap'
import DeletePhim from './DeletePhim'
import DeleteSuatChieu from './DeleteSuatChieu'
export default function EnhancedTable() {
  return (
    <div className="row">
      <div className="col-5" >
        <DeleteRap />
        <DeletePhim />
      </div>
      <div className="col-5" >
        <DeleteSuatChieu />
        <DeleteCumRap />
      </div>

    </div>
  );
}




