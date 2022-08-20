import { Route } from "react-router-dom";
import { Fragment } from "react";
import Header from "../components/Header/Header";

export const UserTemplate = (props) => {
    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <Header />
            <section className="container">
                <div className="row">
                    <div className="col-6">
                        <img className="img-fluid" src="https://source.unsplash.com/random/?food" alt="" />
                    </div>
                    <div className="col-6">
                        <props.component {...propsRoute} />
                    </div>
                </div>
            </section>

        </Fragment>
    }} />
}