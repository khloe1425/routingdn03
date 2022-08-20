import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header/Header";

export const HomeTemplate = (props) => {
    //props (path, component) (truyền từ component cha (App) xuống con)
    return <Route exact path={props.path} render={(propsRoute) => {
        // Xử lý hạn chế dư thừa thẻ div
        //vẫn giữ đúng cú pháp của reactjs
        //=> Fragment (không tạo thẻ trên html)
        return <Fragment>
            {/* Header sẽ xuất hiện theo trang được quy định */}
            <Header />
            <props.component {...propsRoute} />
        </Fragment>
    }} />
}