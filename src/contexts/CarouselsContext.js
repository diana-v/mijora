import {Carousel} from "react-bootstrap";
import React, {useState} from "react";
import Technorama from "../assets/techno.png";

export default function CarouselsContext() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
            <Carousel.Item className={"carousel-item"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-lg-6 col-12"}>
                            <h3 className={"header-3"}>
                                Technorama
                            </h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="93px" height="2px">
                                <path fillRule="evenodd" fill="rgb(97, 89, 167)"
                                      d="M-0.000,1.998 L-0.000,-0.001 L92.999,-0.001 L92.999,1.998 L-0.000,1.998 Z"/>
                            </svg>
                            <div className={"my-auto d-lg-none d-block pt-3"}>
                                <img src={Technorama}
                                     className={"img-fluid company-logo-limit"} alt={"Reviewer logo"}/>
                            </div>
                            <p className={"f-basker text-justify my-3 paragraph"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. release
                                of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.
                            </p>
                            <p className={"author f-basker paragraph"}><b>Žydrūnė Zimnickienė</b></p>
                        </div>
                        <div
                            className={"col-lg-5 offset-lg-1 col-12 text-lg-right text-center my-auto d-lg-block d-none"}>
                            <img src={Technorama} className={"img-fluid company-logo-limit"} alt={"Reviewer logo"}/>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className={"carousel-item"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-lg-6 col-12"}>
                            <h3 className={"header-3"}>
                                Technorama
                            </h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="93px" height="2px">
                                <path fillRule="evenodd" fill="rgb(97, 89, 167)"
                                      d="M-0.000,1.998 L-0.000,-0.001 L92.999,-0.001 L92.999,1.998 L-0.000,1.998 Z"/>
                            </svg>
                            <div className={"my-auto d-lg-none d-block pt-3"}>
                                <img src={Technorama}
                                     className={"img-fluid company-logo-limit"} alt={"Reviewer logo"}/>
                            </div>
                            <p className={"f-basker text-justify my-3 paragraph"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. release
                                of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.
                            </p>
                            <p className={"author f-basker paragraph"}><b>Žydrūnė Zimnickienė</b></p>
                        </div>
                        <div
                            className={"col-lg-5 offset-lg-1 col-12 text-lg-right text-center my-auto d-lg-block d-none"}>
                            <img src={Technorama} className={"img-fluid company-logo-limit"} alt={"Reviewer logo"}/>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className={"carousel-item"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-lg-6 col-12"}>
                            <h3 className={"header-3"}>
                                Technorama
                            </h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="93px" height="2px">
                                <path fillRule="evenodd" fill="rgb(97, 89, 167)"
                                      d="M-0.000,1.998 L-0.000,-0.001 L92.999,-0.001 L92.999,1.998 L-0.000,1.998 Z"/>
                            </svg>
                            <div className={"my-auto d-lg-none d-block pt-3"}>
                                <img src={Technorama}
                                     className={"img-fluid company-logo-limit"} alt={"Reviewer logo"}/>
                            </div>
                            <p className={"f-basker text-justify my-3 paragraph"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. release
                                of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.
                            </p>
                            <p className={"author f-basker paragraph"}><b>Žydrūnė Zimnickienė</b></p>
                        </div>
                        <div
                            className={"col-lg-5 offset-lg-1 col-12 text-lg-right text-center my-auto d-lg-block d-none"}>
                            <img src={Technorama} className={"img-fluid company-logo-limit"} alt={"Reveiwer logo"}/>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}
