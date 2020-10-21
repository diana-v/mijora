import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CarouselsContext from "../contexts/CarouselsContext";

export default class Clients extends Component {
    render() {
        return (
                <div className={"block-grey bl"}>
                    <div className={"row h-100"}>
                        <div className={"col my-auto"}>
                            <div className={"container"}>
                                <div className={"row"}>
                                    <div className={"col-lg-6 col-12"}>
                                        <span className={"number"}>05.</span>
                                        <h2 className={"numerastic header-2"}>
                                            What client says about us?
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <CarouselsContext/>
                            <div className={"container"}>
                                <div className={"row"}>
                                    <div className={"col-12 text-center mt-2 pt-lg-0"}>
                                        <Link to={"/contacts"} className={"btn btn-success f-width-xs"}>Let us prove it</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
