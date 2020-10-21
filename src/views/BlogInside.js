import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../assets/logos/mijora_icon.svg';
import BlogImage from '../assets/blog_image.jpg';
import ArrowRightIcon from '../assets/icons/right.svg';

export default function BlogInside() {
    return (
            <div>
                <div className={"other logo-wrapper"}>
                    <Link to={"/"}><img src={Icon} width="70" alt={"Mijora icon"}/></Link>
                </div>
                <div className={"block-default pt-lg-5 pt-0"}>
                    <div className={"container career"}>
                        <div className={"row pt-5 pb-5"}>
                            <div className={"col-lg-7 col-12"}>
                                <h1 className={"pb-0 mb-0"}>
                                    <b>Global pandemic strikes again</b>
                                </h1>
                                <span className={"d-block author-details pb-2"}>Ignas Jurjonas • CEO • 2020-09-07</span>
                                <img src={BlogImage} className={"img-fluid w-100"} alt={"Blog"}/>
                                    <p className={"f-basker text-justify pt-4 paragraph"}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                        recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                    </p>
                                    <ul className={"f-basker"}>
                                        <li> Design and maintain clean, reliable, and testable code in alignment with
                                            best practices and internal standards
                                        </li>
                                        <li>Analyze, enhance, and collaborate on the scale and design of our front-end
                                            infrastructure and software development lifecycle of Caspio Bridge.
                                        </li>
                                        <li>Understand business requirements, functionality, and customer needs to
                                            create intuitive, feature-rich, and user-friendly experience with new
                                            applications and updating existing code
                                        </li>
                                        <li>Optimize and push the boundaries of performance, quality, and responsiveness
                                            of applications and features of our platform in an agile environment
                                        </li>
                                        <li>Ensure high quality of web front-end component development, including
                                            adherence to UX/UI best practices.
                                        </li>
                                    </ul>
                            </div>
                            <div className={"col-lg-4 col-12 contacts pt-lg-0 pt-4"}>
                                <div className={"row"}>
                                    <div className={"col-12"}>
                                        <h2 className={"header-2"}>People also read</h2>
                                    </div>
                                    <div className={"col-12 my-2"}>
                                        <Link className={"job"} to={"/career"}>
                                            <div className={"job-card employer-card"}>
                                                <div className={"card-body px-0"}>
                                                    <div className={"row"}>
                                                        <div className={"col-10"}>
                                                            <h5 className={"mb-0 header-5"}>Global pandemic strikes again</h5>
                                                            <span className={"blog-duration"}>4 min of reading</span>
                                                        </div>
                                                        <div className={"col-2 my-auto text-right"}>
                                                            <img src={ArrowRightIcon} className={"img-fluid arrow-right"}
                                                                 width="40" alt={"Arrow right icon"}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={"col-12 my-2"}>
                                        <Link className={"job"} to={"/career"}>
                                            <div className={"job-card employer-card"}>
                                                <div className={"card-body px-0"}>
                                                    <div className={"row"}>
                                                        <div className={"col-10"}>
                                                            <h5 className={"mb-0 header-5"}>Global pandemic strikes again</h5>
                                                            <span className={"blog-duration"}>4 min of reading</span>
                                                        </div>
                                                        <div className={"col-2 my-auto text-right"}>
                                                            <img src={ArrowRightIcon} className={"img-fluid arrow-right"}
                                                                 width="40" alt={"Arrow right icon"}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={"col-12 my-2"}>
                                        <Link className={"job"} href={"/career"}>
                                            <div className={"job-card employer-card"}>
                                                <div className={"card-body px-0"}>
                                                    <div className={"row"}>
                                                        <div className={"col-10"}>
                                                            <h5 className={"mb-0 header-5"}>Global pandemic strikes again</h5>
                                                            <span className={"blog-duration"}>4 min of reading</span>
                                                        </div>
                                                        <div className={"col-2 my-auto text-right"}>
                                                            <img src={ArrowRightIcon} className={"img-fluid arrow-right"}
                                                                 width="40" alt={"Arrow right icon"}/>
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
    )
}
