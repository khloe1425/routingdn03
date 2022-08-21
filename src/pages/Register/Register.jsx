import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GROUP_ID } from '../../util/setting';
import { useDispatch } from 'react-redux';
import { dangKyAction } from '../../redux/action/QLNDAction';

export default function Register(props) {

  let dispatch = useDispatch();


  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau:'',
      mkNhapLai:'',
      email:'',
      soDt:'',
      hoTen: "",
      maNhom:GROUP_ID
    },
    validationSchema: Yup.object({
        //các hàm validation của từng trường dữ liệu
        taiKhoan: Yup.string().required("Tài khoản không để trống").min(6,"Tối thiểu 6 ký tự").max(10, "Tối đa 10 ký tự"),
        //ít nhất ký chữ, in hoa, số...
        matKhau: Yup.string().required("Mật khẩu không để trống").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/,"Mật khẩu không hợp lệ"),
        email: Yup.string().required("Mật khẩu không để trống").email("Email không đúng format"),
        soDt: Yup.string().required("Số điện thoại không để trống"),
        hoTen: Yup.string().required("Họ tên không để trống").matches(/^[A-Z a-z]+$/, "Họ tên không hợp lệ")
    }),
    onSubmit: values => {
      //dữ liệu hợp lệ
        console.log(values)//mkNhapLai

        let {mkNhapLai, ...restValue} = values;
        console.log(restValue)//các thuộc tính không có mkNhapLai
     
        //B1 tạo hàm action kết nối API
        //B2 gọi dispatch1 để đẩy data về API
        //nếu để dâu () khi gán giá trị thì sẽ chạy hàm khi load trang => để không hàm khi load thì hàm cần return về 1 hàm khác
        let action = dangKyAction(restValue);
        dispatch(action);

    }, 
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="taiKhoan">Tài Khoản</label>
        <input onChange={formik.handleChange} value={formik.values.taiKhoan} type="text" className="form-control" id="taiKhoan" name='taiKhoan'/>

        {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
         <div className='text-danger'>{formik.errors.taiKhoan}</div>
       ) : null}

      </div>
      <div className="form-group">
        <label htmlFor="matKhau">Password</label>
        <input onChange={formik.handleChange} value={formik.values.matKhau}  type="password" className="form-control" id="matKhau" name='matKhau'/>

        {formik.touched.matKhau && formik.errors.matKhau ? (
         <div className='text-danger'>{formik.errors.matKhau}</div>
       ) : null}

      </div>
      <div className="form-group">
        <label htmlFor="mkNhapLai">Nhập lại Password</label>
        <input  onChange={formik.handleChange} value={formik.values.mkNhapLai} type="password" className="form-control" id="mkNhapLai" name='mkNhapLai'/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input onChange={formik.handleChange} value={formik.values.email} type="email" className="form-control" id="email" name='email'/>

        {formik.touched.email && formik.errors.email ? (
         <div className='text-danger'>{formik.errors.email}</div>
       ) : null}

      </div>
      <div className="form-group">
        <label htmlFor="soDt">Số điện thoai</label>
        <input onChange={formik.handleChange} value={formik.values.soDt} type="text" className="form-control" id="soDt" name='soDt'/>

        {formik.touched.soDt && formik.errors.soDt ? (
         <div className='text-danger'>{formik.errors.soDt}</div>
       ) : null}


      </div>
      <div className="form-group">
        <label htmlFor="hoTen">Họ tên</label>
        <input onChange={formik.handleChange} value={formik.values.hoTen} type="text" className="form-control" id="hoTen" name='hoTen'/>

        {formik.touched.hoTen && formik.errors.hoTen ? (
         <div className='text-danger'>{formik.errors.hoTen}</div>
       ) : null}

      </div>

      <button type="submit" className="btn btn-primary">Đăng ký</button>
      <button onClick={() => { 
        //thêm đường dẫn lưu trong history của trình duyệt
        //=> vừa chuyển trang sang login vừa lưu lịch sử duyệt web
        //gần giống thao click vào menu login
           props.history.push('/login')
       }} type="button" className="btn btn-primary">Đăng nhập</button>
    </form>

  )
}
