import React, {Component} from 'react'
import Iconwhite from '../assets/logos/mijora_icon_white.svg'

export default class About extends Component {
    render() {
        return (
            <div className={"block purple-gradient bl"}>
                <div className={"row h-100"}>
                    <div className={"col my-auto"}>
                        <div className={"container"}>
                            <div className={"row"}>
                                <div className={"col-lg-6 col-12 order-last order-lg-first"}>
                                    <span className={"number d-none text-center text-lg-left d-lg-block"}>01.</span>
                                    <h2 className={"numerastic-white header-2"}>
                                        Maybe now we are looking for
                                    </h2>
                                    <p className={"f-basker text-justify my-3 paragraph"}>
                                        We develop professional WEB solutions for growing or large businesses. Our
                                        team is not only IT specialists, but also creators who want to turn your
                                        original idea into a powerful, secure and customized business tool. We use
                                        PHP, Ruby on Rails, React and other WEB technologies for modern WEB
                                        solutions, therefore, after analyzing your needs and goals, we will select
                                        the most suitable technological solutions.
                                    </p>
                                    <a href={"/"} className={"btn btn-light mt-3 f-width-xs text-center"}>
                                        Our services</a>
                                </div>
                                <div
                                    className={"col-lg-6 col-12 text-lg-right text-center pb-lg-0 pb-5 order-first order-lg-last"}>
                                    <img className={"img-responsive img-limiter"}
                                         src={Iconwhite} alt="White Mijora Icon" width="240"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
