// rfc
import React, { useEffect, useState } from 'react'

export default function DemoUseEffect() {

    //useEffect: didmound, didupdate, willunmount

    let [number, setNumber] = useState(0);
    let [like, setLike] = useState(0);

    //Lifecycle chạy sau khi UI đã load xong
    // didmound, didupdate
    // useEffect(() => { 
    //         console.log("didmound");
    //         console.log("didupdate");
    //  });

    // ?useEffect(hàm,mảng)
    // ? didmound: khi tham số thứ 2 là mảng rỗng
    // useEffect(() => { 
    //     console.log("didmound");
    //  }, []);

    //?Nếu like thay đổi thì chạy vào useEffect, ngược lại thì ko chạy
    // useEffect(() => {
    //     console.log("didupdate");
    // }, [like]);


    //?willunmount
    useEffect(() => { 
        //chạy lifecycle unmouting: sẽ được kích hoạt trước khi component bị gỡ khỏi UI
        return () => {
            console.log("cb rời đi nè - willunmount");
        }
     },[]);








    return (
        <div className='container'>
            {console.log("render")}
            <p>{number}</p>
            <button onClick={() => {
                setNumber(number + 1);
            }} className='btn btn-danger'>Click tăng</button>

            <p>{like}</p>
            <button onClick={() => {
                setLike(like + 1);
            }} className='btn btn-danger'>Click tăng</button>
        </div>
    )
}
