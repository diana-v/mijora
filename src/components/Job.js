import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NextIcon from '../assets/icons/next.svg';
import ArrowRightIcon from '../assets/icons/right.svg';

export default class Job extends Component {
    render() {
        return (
            <div className={"block-grey bl"}>
                <div className={"row h-100"}>
                    <div className={"col my-auto"}>
                        <div className={"container"}>
                            <div className={"row"}>
                                <div className={"col-lg-6 col-12"}>
                                    <span className={"number"}>02.</span>
                                    <h2 className={"numerastic header-2"}>
                                        Maybe now we are looking for
                                    </h2>
                                    <h3 className={"header-3"}>
                                        you?
                                        <Link to={"/career"} className={"more d-lg-none d-block"}><span
                                            className={"more"}>See more <img src={NextIcon}
                                                                             width="17" alt={"Next icon"}/></span></Link>
                                    </h3>
                                </div>
                                <div className={"col-lg-6 col-12 text-right pt-3 d-lg-block d-none"}>
                                    <Link to={"/career"} className={"more"}><span className={"more"}>See more <img
                                        src={NextIcon} width="20" alt={"Next icon"}/></span></Link>
                                </div>
                                <div className={"col-12"}>
                                    <div className={"row"}>
                                        <div className={"col-lg-6 col-md-6 col-12 my-2"}>
                                            <Link className={"job"} to={"/job-inside"}>
                                                <div className={"job-card employer-card"}>
                                                    <div className={"card-body px-0"}>
                                                        <div className={"row"}>
                                                            <div className={"col-lg-6 col-9"}>
                                                                <h5 className={"mb-0 header-5"}>React developer</h5>
                                                                <span className={"f-basker d-block"}>Apps • Websites • Services</span>
                                                                <span className={"location d-block"}>Kaunas</span>
                                                            </div>
                                                            <div className={"col-lg-6 col-3 my-auto text-right"}>
                                                                <img src={ArrowRightIcon}
                                                                     className={"img-fluid arrow-right"} width="40"
                                                                     alt={"Arrow right icon"}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={"col-lg-6 col-md-6 col-12 my-2"}>
                                            <Link className={"job"} to={"/job-inside"}>
                                                <div className={"job-card employer-card"}>
                                                    <div className={"card-body px-0"}>
                                                        <div className={"row"}>
                                                            <div className={"col-lg-6 col-9"}>
                                                                <h5 className={"mb-0 header-5"}>React developer</h5>
                                                                <span className={"f-basker d-block"}>Apps • Websites • Services</span>
                                                                <span className={"location d-block"}>Kaunas</span>
                                                            </div>
                                                            <div className={"col-lg-6 col-3 my-auto text-right"}>
                                                                <img src={ArrowRightIcon}
                                                                     className={"img-fluid arrow-right"} width="40"
                                                                     alt={"Arrow right icon"}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={"col-lg-6 col-md-6 col-12 my-2"}>
                                            <Link className={"job"} to={"/job-inside"}>
                                                <div className={"job-card employer-card"}>
                                                    <div className={"card-body px-0"}>
                                                        <div className={"row"}>
                                                            <div className={"col-lg-6 col-9"}>
                                                                <h5 className={"mb-0 header-5"}>React developer</h5>
                                                                <span className={"f-basker d-block"}>Apps • Websites • Services</span>
                                                                <span className={"location d-block"}>Kaunas</span>
                                                            </div>
                                                            <div className={"col-lg-6 col-3 my-auto text-right"}>
                                                                <img src={ArrowRightIcon}
                                                                     className={"img-fluid arrow-right"} width="40"
                                                                     alt={"Arrow right icon"}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={"col-lg-6 col-md-6 col-12 my-2"}>
                                            <Link className={"job"} to={"/job-inside"}>
                                                <div className={"job-card employer-card"}>
                                                    <div className={"card-body px-0"}>
                                                        <div className={"row"}>
                                                            <div className={"col-lg-6 col-9"}>
                                                                <h5 className={"mb-0 header-5"}>React developer</h5>
                                                                <span className={"f-basker d-block"}>Apps • Websites • Services</span>
                                                                <span className={"location d-block"}>Kaunas</span>
                                                            </div>
                                                            <div className={"col-lg-6 col-3 my-auto text-right"}>
                                                                <img src={ArrowRightIcon}
                                                                     className={"img-fluid arrow-right"} width="40"
                                                                     alt={"Arrow right icon"}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
