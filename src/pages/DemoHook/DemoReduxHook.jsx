// rfc
import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { fakebookAction } from '../../redux/action/FakeBookAction';
// import { ADD_COMMENT } from '../../redux/type/FakeBookType';



export default function DemoReduxHook() {
    /**
     * B1: tạo UI
     * B2: xác định state => lưu đối tượng userComment vào state
     * B3: Khai báo reducer => lưu trữ nội dung của mảng các đối tượng comment ()
     * B4: Lấy giá trị từ reducer về component => hiển thi UI 
     */

    //giúp lưu trữ các nội dung comment của người dùng khi gõ trên form
    let [userComment, setUserComment] = useState({
        name: "",
        content: ""
    });

    //useSelector: kết nối , lấy state từ reducer redux
    //state: đại diện cho rootReducer
    // let {arrComment} = useSelector((state) => { 
    //     return state.FakeBookReducer
    //  })

    let { arrComment } = useSelector(state => state.FakeBookReducer)
    console.log(arrComment);
    // useDispatch đẩy action lên redux
    let dispatch = useDispatch();


    //Khai báo hàm trong function component
    const renderComment = () => {
        return arrComment.map((comment) => {
            return <div className="row" key={comment.name}>
                <div className="col-2">
                    <img className='img-fluid' src={comment.avatar} alt="" />
                </div>
                <div className="col-10">
                    <p className='text-danger'>{comment.name}</p>
                    <p>{comment.content}</p>
                </div>
            </div>
        })
    }


    const handleInput = (event) => {
        let {value,name} = event.target;
        console.log(value, name);

        // name:"Diệu Nhi",
        // content:"Ahihihi"
        //object literal
        setUserComment({
            ...userComment,
            [name]:value
        })
        
    }

    const handleSubmit= (event) => {
        event.preventDefault();
        console.log(userComment);

        //? Spread Operator
        //copy thuộc tính hoặc phần tử cũ và đồng thời có thể bổ sung thuộc tính hoặc phần tử mới
        //Nếu thuộc tính đã có trong đối tượng => gán đè giá trị mới của thuộc tính
        
        // Action Creator
        let action = fakebookAction(userComment);
        dispatch(action);
    }
    return (
        <div className='container'>
            <div className='bg-light p-3'>
                    {renderComment()}
            </div>
            <div className='bg-dark text-white p-3'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        {/* onChange={(event) => { 
                            handleInput(event)
                         }} */}
                        <input onChange={handleInput} type="text" className="form-control" id="name" name="name" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input onChange={handleInput} type="text" className="form-control" id="content" name="content" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}


// const mapStateToProps = (rootReducer)=>{
//     //lưu vào props của component
//     return{
//         FakeBookReducer: rootReducer.FakeBookReducer
//     }
// }

// export connect(mapStateToProps)(DemoReduxHook)