import axios from 'axios';
import { TOKEN_CYBER, URL_API,GROUP_ID } from '../../util/setting';

export const PhimAction = async (dispatch2) => {
    try {
        let result = await axios({
          method: 'get',
          url: `${URL_API}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`,
          headers: {
            "TokenCybersoft": TOKEN_CYBER
          }
        });
        
        let action = {
          type: "LAY_DS_PHIM",
          mangPhim: result.data.content
        }
        dispatch2(action);


    } catch (error) {
      console.log(error);
    }
}