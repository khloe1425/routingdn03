import React, { Component } from 'react';
import axios from 'axios';

export default class AxiosRCC extends Component {

    //Khi lấy data từ API => render lại UI để hiển thi kết quả lên UI
    //=> lưu data vào state (setState)

    state = {
        mangPhim: []
    }
    //Tạo hàm call API
    callAPI = () => {
        let promise = axios({
            method: 'get',
            url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            headers: {
                "TokenCybersoft": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMyIsIkhldEhhblN0cmluZyI6IjIwLzAxLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NDE3MjgwMDAwMCIsIm5iZiI6MTY0NTgwODQwMCwiZXhwIjoxNjc0MzIwNDAwfQ.8_aCoaa6rU0qnQpITJH8MZSFEBfvbj11eFJWuFsTYL8"
            }
        });

        promise.then((result) => {
            console.log(result.data);
            this.setState({
                mangPhim: result.data.content
            });

        });
        promise.catch((error) => {
            console.log(error);
        })

    }

    renderList = () => {
        return this.state.mangPhim.map((phim) => {
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



    render() {
        return (
            <div className='container'>
                <button onClick={this.callAPI} className='btn btn-danger'>Call API</button>
                <div className="row">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}
