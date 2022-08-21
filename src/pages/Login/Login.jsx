import React from 'react'
import { useFormik } from 'formik';
import { GROUP_ID } from '../../util/setting';
import { useDispatch } from 'react-redux';
import {dangnhapAction } from '../../redux/action/QLNDAction';

export default function Login() {

  let dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: ''
    },
    onSubmit: values => {
      console.log(values)

      let action = dangnhapAction(values);
      dispatch(action);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Tài khoản</label>
        <input onChange={formik.handleChange} value={formik.values.taiKhoan} type="text" className="form-control" id="taiKhoan" name='taiKhoan'/>
      </div>
      <div className="form-group">
        <label htmlFor="">Password</label>
        <input onChange={formik.handleChange} value={formik.values.matKhau}  type="password" className="form-control" id="matKhau" name='matKhau'/>
      </div>
      <button type="submit" className="btn btn-primary">Đăng Nhập</button>
    </form>

  )
}
