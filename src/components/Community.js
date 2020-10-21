import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '../assets/icons/facebook.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';
import GithubIcon from '../assets/icons/github.svg';
import FamilyPhoto from '../assets/family-2.png';

export default class Community extends Component {
    render() {
        return (
            <div className={"block  community bl"}>
                <div className={"row h-100"}>
                    <div className={"col my-auto"}>
                        <div className={"container"}>
                            <div className={"row"}>
                                <div className={"col-lg-6 col-12"}>
                                    <span className={"number"}>03.</span>
                                    <h2 className={"numerastic-white header-2"}>
                                        We build
                                    </h2>
                                    <h3 className={"header-3"}>
                                        Community
                                    </h3>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="93px" height="2px">
                                        <path fillRule="evenodd" fill="rgb(97, 89, 167)"
                                              d="M-0.000,1.998 L-0.000,-0.001 L92.999,-0.001 L92.999,1.998 L-0.000,1.998 Z"/>
                                    </svg>
                                    <p className={"f-basker text-justify my-3 paragraph"}>
                                        The secret to e-commerce success lies in the details. We create e-shops that
                                        not only provide positive user value, but also convenience and flexibility
                                        in order management. Depending on your needs and electronic store sizes, we
                                        offer a user-friendly system and require plug-ins: from systems integration
                                        with accounting or warehousing to order visibility optimization.
                                    </p>
                                    <Link to={"https://www.facebook.com/mijora.lt/"} target="_blank"
                                       rel="noopener noreferrer">
                                        <img src={FacebookIcon} width="25" className={"mr-2"} alt={"Facebook icon"}/>
                                    </Link>
                                    <Link to={"https://www.instagram.com/mijoralt"} target="_blank"
                                       rel="noopener noreferrer">
                                        <img src={InstagramIcon} width="25" className={"mr-2"} alt={"Instagram icon"}/>
                                    </Link>
                                    <Link to={"https://www.linkedin.com/company/19261529"} target="_blank"
                                       rel="noopener noreferrer">
                                        <img src={LinkedInIcon} width="25" className={"mr-2"} alt={"LinkedIn icon"}/>
                                    </Link>
                                    <Link to={"https://github.com/mijora"} target="_blank" rel="noopener noreferrer">
                                        <img src={GithubIcon} width="25" className={"mr-2"} alt={"Github icon"}/>
                                    </Link>
                                </div>
                                <div className={"col-lg-6 col-12 text-right my-auto"}>
                                    <img src={FamilyPhoto} className={"img-fluid pt-lg-0 pt-4"} alt={"Family"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
