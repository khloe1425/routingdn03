import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TOKEN_CYBER, URL_API } from '../../util/setting';


export default function AxiosRFC() {

  let [mangPhim, setMangPhim] = useState([]);

  //didmount
  useEffect(() => { 
    callAPI();
   }, []);


  let callAPI = async () => {
    //ES6: Promise => Axios then(thành công) ,  catch(thất bại); fetch() => then 2 lần
    // async/await
    try {
      //thành công
         
        let result = await axios({
          method: 'get',
          url: `${URL_API}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
          headers: {
            "TokenCybersoft": TOKEN_CYBER
          }
        });
        await setMangPhim(result.data.content);
        console.log(mangPhim);

    } catch (error) {
      //thất bại
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
      <button onClick={callAPI} className='btn btn-danger'>Call API</button>
      <div className="row">
        {renderList()}
      </div>
    </div>
  )
}
