import axios from 'axios';
import { TOKEN_CYBER, URL_API, USER_LOGIN } from '../../util/setting';
import { history } from '../../App';

export const dangKyAction = (thongTinND) => {
    console.log(thongTinND);
    return async (dispatch2) => {
        try {
            //xử lý thành công
            let result = await axios({
                method: "post",
                url: `${URL_API}/api/QuanLyNguoiDung/DangKy`,
                data: thongTinND,
                headers:{
                    "TokenCybersoft": TOKEN_CYBER
                }
            });
            //nếu cần đẩy result trả về của API lên redux thì gọi dispatch2 
            //ở chức năng đăng ký không cần đẩy result lên redux nên không gọi dispatch2
            console.log(result.data);

            //thông thành công cho User
            //chuyển người dùng sang trang login
            //dangKyAction là hàm thông thường không phải RFC => sẽ không có props
            //=> ko dùng được history
            alert("Đăng ký thành công");
            history.push("/login");

        } catch (error) {
            //thất bại
            console.log(error);
        }
    }

}


export const dangnhapAction = (thongTinND) => {
    console.log(thongTinND);
    return async (dispatch2) => {
        try {
            //xử lý thành công
            let result = await axios({
                method: "post",
                url: `${URL_API}/api/QuanLyNguoiDung/DangNhap`,
                data: thongTinND,
                headers:{
                    "TokenCybersoft": TOKEN_CYBER
                }
            });
          
            console.log(result.data);

            const userLogin = JSON.stringify(result.data.content);

            // USER_LOGIN: tên local Storage
            localStorage.setItem(USER_LOGIN,userLogin )

            let action ={
                type:"LOGIN",
                userLogin: result.data.content
            }

            dispatch2(action)


        } catch (error) {
            //thất bại
            console.log(error);
        }
    }

}