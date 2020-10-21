import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NextIcon from '../assets/icons/next.svg';
import BlogImage from '../assets/blog_image.jpg';

export default class Blog extends Component {
    render() {
        return (
            <div className={"block-grey bl"}>
                <div className={"row h-100"}>
                    <div className={"col my-auto"}>
                        <div className={"container"}>
                            <div className={"row"}>
                                <div className={"col-lg-6 col-12"}>
                                    <span className={"number"}>04.</span>
                                    <h2 className={"numerastic header-2"}>
                                        What the world is talking about
                                    </h2>
                                    <h3 className={"header-3"}>
                                        NOW?
                                        <Link to={"/blog-inside"} className={"more d-lg-none d-block"}>See more <img src={NextIcon} width="20"
                                                                             alt={"Next icon"}/></Link>
                                    </h3>
                                </div>
                                <div className={"col-lg-6 col-12 text-right pt-3 d-lg-block d-none"}>
                                    <Link to={"/blog-inside"} className={"more"}>See more <img
                                        src={NextIcon} width="20" alt={"Next icon"}/></Link>
                                </div>
                                <div className={"col-12"}>
                                    <div className={"row"}>
                                        <div className={"col-lg-4 col-12 my-lg-2 mb-2"}>
                                            <Link className={"blog"} to={"/blog-inside"}>
                                                <img src={BlogImage} className={"img-fluid w-100"} alt={"Blog"}/>
                                                <span className={"blog-title d-block pt-3"}>
                                                        Global pandemic strikes again
                                                    </span>
                                                <span className={"blog-duration"}>4 min of reading</span>
                                                <p className={"f-basker text-justify  d-lg-none paragraph"}>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                    standard dummy text ever since the 1500s, when an unknown
                                                    printer...
                                                </p>
                                            </Link>
                                        </div>
                                        <div className={"col-lg-4 d-none d-lg-block col-12 my-lg-2 mb-2"}>
                                            <Link className={"blog"} to={"/blog-inside"}>
                                                <img src={BlogImage} className={"img-fluid w-100"} alt={"Blog"}/>
                                                <span className={"blog-title d-block pt-3"}>
                                                            Global pandemic strikes again
                                                        </span>
                                                <span className={"blog-duration"}>4 min of reading</span>
                                            </Link>
                                        </div>
                                        <div className={"col-lg-4 d-lg-block d-none col-12 my-lg-2 mb-2"}>
                                            <Link className={"blog"} to={"/blog-inside"}>
                                                <img src={BlogImage} className={"img-fluid w-100"} alt={"Blog"}/>
                                                <span className={"blog-title d-block pt-3"}>
                                                            Global pandemic strikes again
                                                        </span>
                                                <span className={"blog-duration"}>4 min of reading</span>
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
