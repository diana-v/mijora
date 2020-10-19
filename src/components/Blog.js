import React, {Component} from 'react'
import NextIcon from '../assets/next.svg'
import BlogImage from '../assets/blog_image.jpg'

export default class Blog extends Component {
    render() {
        return (
            <div id={'blog'}>
                <div className={"block-grey bl"}>
                    <div className={"row h-100"}>
                        <div className={"col my-auto"}>
                            <div className={"container"}>
                                <div className={"row"}>
                                    <div className={"col-lg-6 col-12"}>
                                        <span className={"number"}>04.</span>
                                        <h2 className={"numerastic"}>
                                            What the world is talking about
                                        </h2>
                                        <h3>
                                            NOW?
                                            <a href={"#"} className={"more d-lg-none d-block"}><span
                                                className={"more"}>See more <img src={NextIcon} width="20"/></span></a>
                                        </h3>
                                    </div>
                                    <div className={"col-lg-6 col-12 text-right pt-3 d-lg-block d-none"}>
                                        <a href={"#"} className={"more"}><span className={"more"}>See more <img
                                            src={NextIcon} width="20"/></span></a>
                                    </div>
                                    <div className={"col-12"}>
                                        <div className={"row"}>
                                            <div className={"col-lg-4 col-12 my-lg-2 mb-2"}>
                                                <a className={"blog"} href={"#"}>
                                                    <img src={BlogImage} className={"img-fluid w-100"}/>
                                                    <span className={"blog-title d-block pt-3"}>
                                                        Global pandemic strikes again
                                                    </span>
                                                    <span className={"blog-duration"}>4 min of reading</span>
                                                    <p className={"f-basker text-justify  d-lg-none"}>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown
                                                        printer...
                                                    </p>
                                                </a>
                                            </div>
                                            <div className={"col-lg-4 d-none d-lg-block col-12 my-lg-2 mb-2"}>
                                                <a className={"blog"} href={"#"}>
                                                    <img src={BlogImage} className={"img-fluid w-100"}/>
                                                        <span className={"blog-title d-block pt-3"}>
                                                            Global pandemic strikes again
                                                        </span>
                                                        <span className={"blog-duration"}>4 min of reading</span>
                                                </a>
                                            </div>
                                            <div className={"col-lg-4 d-lg-block d-none col-12 my-lg-2 mb-2"}>
                                                <a className={"blog"} href={"#"}>
                                                    <img src={BlogImage} className={"img-fluid w-100"}/>
                                                        <span className={"blog-title d-block pt-3"}>
                                                            Global pandemic strikes again
                                                        </span>
                                                        <span className={"blog-duration"}>4 min of reading</span>
                                                </a>
                                            </div>
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