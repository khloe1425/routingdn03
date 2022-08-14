import React, { Component } from 'react';
import axios from 'axios';
import { TOKEN_CYBER } from '../../util/setting';

export default class AxiosRCC extends Component {

    //Khi lấy data từ API => render lại UI để hiển thi kết quả lên UI
    //=> lưu data vào state (setState)

    constructor(props){
        super(props)
        this.state = {
            mangPhim: []
        }
    }

    
    //Tạo hàm call API
    callAPI = () => {
        let promise = axios({
            method: 'get',
            url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            headers: {
                "TokenCybersoft":TOKEN_CYBER 
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


    //Khi load trang cần load sẵn danh sách phim
    //=> gọi hàm callAPI() khi load trang

    render() {
        // {this.callAPI()}
        return (
            <div className='container'>
                <button onClick={this.callAPI} className='btn btn-danger'>Call API</button>
                <div className="row">
                    {this.renderList()}
                </div>
            </div>
        )
    }


    //Chỉ chạy 1 lần khi mới load ứng dụng
    // nếu state thay đổi thì sẽ không chạy và không bị call API liên tục
    componentDidMount(){
        this.callAPI();
    }

}
