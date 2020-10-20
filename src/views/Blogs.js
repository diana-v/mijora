import Icon from '../assets/logos/mijora_icon.svg'
import BlogImage from '../assets/blog_image.jpg'
import React from "react";

export default function Blogs() {
    return (
        <div>
            <div className={"other logo-wrapper"}>
                <a href="/"><img src={Icon} width="70" alt={"Mijora icon"}/></a>
            </div>
            <div className={"block-default pt-lg-5 pt-0"}>
                <div className={"row pt-5 pb-5"}>
                    <div className={"col"}>
                        <div className={"container"}>
                            <div className={"row"}>
                                <div className={"col-lg-6 col-12"}>
                                    <h2 className={"header-2"}>
                                        What the world is talking about
                                    </h2>
                                    <h3 className={'header-3'}>
                                        NOW?
                                    </h3>
                                </div>
                                <div className={"col-12"}>
                                    <div className={"row"}>
                                        <div className={"col-lg-4 col-12 my-2"}>
                                            <a className={"blog"} href={"/blog-inside"}>
                                                <img src={BlogImage} className={"img-fluid w-100"} alt={"Blog"}/>
                                                <span
                                                    className={"blog-title d-block pt-3"}>Global pandemic strikes again</span>
                                                <span className={"blog-duration"}>4 min of reading</span>
                                            </a>
                                        </div>
                                        <div className={"col-lg-4 col-12 my-2"}>
                                            <a className={"blog"} href={"/blog-inside"}>
                                                <img src={BlogImage} className={"img-fluid w-100"} alt={"Blog"}/>
                                                <span
                                                    className={"blog-title d-block pt-3"}>Global pandemic strikes again</span>
                                                <span className={"blog-duration"}>4 min of reading</span>
                                            </a>
                                        </div>
                                        <div className={"col-lg-4 col-12 my-2"}>
                                            <a className={"blog"} href={"/blog-inside"}>
                                                <img src={BlogImage} className={"img-fluid w-100"} alt={"Blog"}/>
                                                <span
                                                    className={"blog-title d-block pt-3"}>Global pandemic strikes again</span>
                                                <span className={"blog-duration"}>4 min of reading</span>
                                            </a>
                                        </div>
                                        <div className={"col-lg-4 col-12 my-2"}>
                                            <a className={"blog"} href={"/blog-inside"}>
                                                <img src={BlogImage} className={"img-fluid w-100"} alt={"Blog"}/>
                                                <span
                                                    className={"blog-title d-block pt-3"}>Global pandemic strikes again</span>
                                                <span className={"blog-duration"}>4 min of reading</span>
                                            </a>
                                        </div>
                                        <div className={"col-lg-4 col-12 my-2"}>
                                            <a className={"blog"} href={"/blog-inside"}>
                                                <img src={BlogImage} className={"img-fluid w-100"} alt={"Blog"}/>
                                                    <span className={"blog-title d-block pt-3"}>Global pandemic strikes again</span>
                                                    <span className={"blog-duration"}>4 min of reading</span>
                                            </a>
                                        </div>
                                        <div className={"col-lg-4 col-12 my-2"}>
                                            <a className={"blog"} href={"/blog-inside"}>
                                                <img src={BlogImage} className={"img-fluid w-100"} alt={"Blog"}/>
                                                <span
                                                    className={"blog-title d-block pt-3"}>Global pandemic strikes again</span>
                                                <span className={"blog-duration"}>4 min of reading</span>
                                            </a>
                                        </div>
                                        <div className={"col-lg-4 col-12 my-2"}>
                                            <a className={"blog"} href={"/blog-inside"}>
                                                <img src={BlogImage} className={"img-fluid w-100"} alt={"Blog"}/>
                                                <span
                                                    className={"blog-title d-block pt-3"}>Global pandemic strikes again</span>
                                                <span className={"blog-duration"}>4 min of reading</span>
                                            </a>
                                        </div>
                                        <div className={"col-lg-4 col-12 my-2"}>
                                            <a className={"blog"} href={"/blog-inside"}>
                                                <img src={BlogImage} className={"img-fluid w-100"} alt={"Blog"}/>
                                                <span
                                                    className={"blog-title d-block pt-3"}>Global pandemic strikes again</span>
                                                <span className={"blog-duration"}>4 min of reading</span>
                                            </a>
                                        </div>
                                        <div className={"col-lg-4 col-12 my-2"}>
                                            <a className={"blog"} href={"/blog-inside"}>
                                                <img src={BlogImage} className={"img-fluid w-100"} alt={"Blog"}/>
                                                <span
                                                    className={"blog-title d-block pt-3"}>Global pandemic strikes again</span>
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
