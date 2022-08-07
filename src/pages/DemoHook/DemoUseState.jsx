// rfc
import React from 'react'
import { useState } from 'react'

export default function DemoUseState() {
    //tạo ứng dụng bình chọn

    /**
     * B1: tạo UI
     * B2: xác định state => dữ liệu cần thay đổi khi người dùng click button
     * =>  số lương voted => lưu trong state
     * B3: Gọi setState ở đâu => button Voted
     */

    //this chỉ dùng trong class, this.state là thuộc tính được kế thừa từ class Component
    // this.state = {
    //     vote: 0
    // }

    // useState => trả về 1 mảng chứa 2 phần tử => [state,setState]
    // let [state,setState] = useState({vote:0});

    let [vote,setVote] = useState(0); // nên dùng khi cần lưu trữ giá trị đơn lẻ

    let [model, setInfoModel ] = useState({
        avarta: "https://i.pravatar.cc/?u=77",
        name:"Diệu Nhi"
    })

    return (
        <div className='container'>
            <div className="row py-5">
                <div className="col-4">
                    <div className="card">
                        <img src="https://i.pravatar.cc/?u=77" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{model.name}</h5>
                            {/* <p>Voted:  {state.vote}</p> */}
                            <p>Voted:  {vote}</p>
                            <button className='btn btn-success' onClick={() => { 
                                // setState({
                                //     vote: state.vote + 1
                                // })
                                setVote(vote + 1)
                             }}>Voted</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
