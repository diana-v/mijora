import React, {Component} from 'react'
import Technorama from '../assets/techno.png'

export default class Clients extends Component {
    render() {
        return (
            <div id={'clients'}>
                <div className={"block-grey bl"}>
                    <div className={"row h-100"}>
                        <div className={"col my-auto"}>
                            <div className={"container"}>
                                <div className={"row"}>
                                    <div className={"col-lg-6 col-12"}>
                                        <span className={"number"}>06.</span>
                                        <h2 className={"numerastic"}>
                                            What client says about us?
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div id={"carouselExampleIndicators"} className={"carousel my-auto slide"}
                                 data-ride="carousel">
                                <ol className={"carousel-indicators"}>
                                    <li data-target={"#carouselExampleIndicators"} data-slide-to={"0"}
                                        className={"active"}></li>
                                    <li data-target={"#carouselExampleIndicators"} data-slide-to={"1"}></li>
                                    <li data-target={"#carouselExampleIndicators"} data-slide-to={"2"}></li>
                                </ol>
                                <div className={"carousel-inner"}>
                                    <div className={"carousel-item active"}>
                                        <div className={"container"}>
                                            <div className={"row"}>
                                                <div className={"col-lg-6 col-12"}>
                                                    <h3>
                                                        Technorama
                                                    </h3>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                                                        width="93px" height="2px">
                                                        <path fillRule="evenodd" fill="rgb(97, 89, 167)"
                                                              d="M-0.000,1.998 L-0.000,-0.001 L92.999,-0.001 L92.999,1.998 L-0.000,1.998 Z"/>
                                                    </svg>
                                                    <div className={"my-auto d-lg-none d-block pt-3"}>
                                                        <img src={Technorama}
                                                             className={"img-fluid company-logo-limit"}/>
                                                    </div>
                                                    <p className={"f-basker text-justify my-3"}>
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
                                                    <p className={"author f-basker"}><b>Žydrūnė Zimnickienė</b></p>
                                                </div>
                                                <div
                                                    className={"col-lg-5 offset-lg-1 col-12 text-lg-right text-center my-auto d-lg-block d-none"}>
                                                    <img src={Technorama} className={"img-fluid company-logo-limit"}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"carousel-item"}>
                                        <div className={"container"}>
                                            <div className={"row"}>
                                                <div className={"col-lg-6 col-12"}>
                                                    <h3>
                                                        Technorama
                                                    </h3>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                                                        width="93px" height="2px">
                                                        <path fillRule="evenodd" fill="rgb(97, 89, 167)"
                                                              d="M-0.000,1.998 L-0.000,-0.001 L92.999,-0.001 L92.999,1.998 L-0.000,1.998 Z"/>
                                                    </svg>
                                                    <div className={"my-auto d-lg-none d-block pt-3"}>
                                                        <img src={Technorama}
                                                             className={"img-fluid company-logo-limit"}/>
                                                    </div>
                                                    <p className={"f-basker text-justify my-3"}>
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
                                                    <p className={"author f-basker"}><b>Žydrūnė Zimnickienė</b></p>
                                                </div>
                                                <div
                                                    className={"col-lg-5 offset-lg-1 col-12 text-lg-right text-center my-auto d-lg-block d-none"}>
                                                    <img src={Technorama} className={"img-fluid company-logo-limit"}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"carousel-item"}>
                                        <div className={"container"}>
                                            <div className={"row"}>
                                                <div className={"col-lg-6 col-12"}>
                                                    <h3>
                                                        Technorama
                                                    </h3>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                                                        width="93px" height="2px">
                                                        <path fillRule="evenodd" fill="rgb(97, 89, 167)"
                                                              d="M-0.000,1.998 L-0.000,-0.001 L92.999,-0.001 L92.999,1.998 L-0.000,1.998 Z"/>
                                                    </svg>
                                                    <div className={"my-auto d-lg-none d-block pt-3"}>
                                                        <img src={Technorama}
                                                             className={"img-fluid company-logo-limit"}/>
                                                    </div>
                                                    <p className={"f-basker text-justify my-3"}>
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
                                                    <p className={"author f-basker"}><b>Žydrūnė Zimnickienė</b></p>
                                                </div>
                                                <div
                                                    className={"col-lg-5 offset-lg-1 col-12 text-lg-right text-center my-auto d-lg-block d-none"}>
                                                    <img src={Technorama} className={"img-fluid company-logo-limit"}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<a className={"carousel-control-prev"} href={"#carouselExampleIndicators"} role="button"*/}
                                {/*   data-slide="prev">*/}
                                {/*    <span className={"carousel-control-prev-icon"} aria-hidden="true"></span>*/}
                                {/*    <span className={"sr-only"}>Previous</span>*/}
                                {/*</a>*/}
                                {/*<a className={"carousel-control-next"} href={"#carouselExampleIndicators"} role="button"*/}
                                {/*   data-slide="next">*/}
                                {/*    <span className={"carousel-control-next-icon"} aria-hidden="true"></span>*/}
                                {/*    <span className={"sr-only"}>Next</span>*/}
                                {/*</a>*/}
                            </div>
                            <div className={"container"}>
                                <div className={"row"}>
                                    <div className={"col-12 text-center mt-2 pt-lg-0"}>
                                        <a href={"#"} className={"btn btn-success f-width-xs"}>Let us prove</a>
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
