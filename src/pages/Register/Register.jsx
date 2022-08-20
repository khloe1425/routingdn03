import React from 'react';
import { useFormik } from 'formik';

export default function Register() {

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau:'',
      mkNhapLai:'',
      email:'',
      soDt:'',
      hoTen: "",
    },
    onSubmit: values => {
        console.log(values)
    }, 
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="taiKhoan">Tài Khoản</label>
        <input onChange={formik.handleChange} value={formik.values.taiKhoan} type="text" className="form-control" id="taiKhoan" name='taiKhoan'/>
      </div>
      <div className="form-group">
        <label htmlFor="matKhau">Password</label>
        <input onChange={formik.handleChange} value={formik.values.matKhau}  type="password" className="form-control" id="matKhau" name='matKhau'/>
      </div>
      <div className="form-group">
        <label htmlFor="mkNhapLai">Nhập lại Password</label>
        <input  onChange={formik.handleChange} value={formik.values.mkNhapLai} type="password" className="form-control" id="mkNhapLai" name='mkNhapLai'/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input onChange={formik.handleChange} value={formik.values.email} type="email" className="form-control" id="email" name='email'/>
      </div>
      <div className="form-group">
        <label htmlFor="soDt">Số điện thoai</label>
        <input onChange={formik.handleChange} value={formik.values.soDt} type="text" className="form-control" id="soDt" name='soDt'/>
      </div>
      <div className="form-group">
        <label htmlFor="hoTen">Họ tên</label>
        <input onChange={formik.handleChange} value={formik.values.hoTen} type="text" className="form-control" id="hoTen" name='hoTen'/>
      </div>

      <button type="submit" className="btn btn-primary">Đăng ký</button>
      <button type="button" className="btn btn-primary">Đăng nhập</button>
    </form>

  )
}
