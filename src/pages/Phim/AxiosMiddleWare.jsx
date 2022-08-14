import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import axios from 'axios';
import { TOKEN_CYBER, URL_API } from '../../util/setting';
import { PhimAction } from '../../redux/action/PhimAction';

export default function AxiosMiddleWare() {
  //B1: Tạo UI
  //B2: kết nối reducer lấy dữ liệu mặc định và hiển thi lên UI

  let {mangPhim} =  useSelector((state) => state.PhimReducer);

  let dispatch = useDispatch();

  useEffect(() => { 
    // callAPI();

    /**
     * action có 2 loại
     * action loại 1: kiểu đối tượng 
     * action loại 2: kiểu hàm => sử dụng các thư viên MiddleWare (redux-thunk, saga)
     *? thunk => sẽ có 2 dispatch
     * dispatch 1: gọi hàm action
     * dispatch 2: đẩy dữ liệu trong hàm action lên reducer
     */


    let action = PhimAction;
    dispatch(action);


   },[])
  






  let callAPI = async () => {
    try {
        let result = await axios({
          method: 'get',
          url: `${URL_API}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
          headers: {
            "TokenCybersoft": TOKEN_CYBER
          }
        });
        // console.log(result.data.content);
        let action = {
          type: "LAY_DS_PHIM",
          mangPhim: result.data.content
        }
        dispatch(action);


    } catch (error) {
      console.log(error);
    }
  }

  let renderList = () => {
    return mangPhim.map((phim) => {
      return <div className="col-4" key={phim.maPhim}>
        <div className="card">
          <img src={phim.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{phim.tenPhim}</h5>
            <p className="card-text">{phim.moTa}</p>

          </div>
        </div>

      </div>
    })
  }

  return (
    <div className='container'>
      <button className='btn btn-danger'>Call API</button>
      <div className="row">
        {renderList()}
      </div>
    </div>
  )
}
