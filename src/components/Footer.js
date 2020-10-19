import React, {Component} from 'react'
import MijoraLogo from '../assets/mijora_logo.svg'

export default class Footer extends Component {
    render() {
        return (
            <div id={'footer'}>
                <footer className={"py-4 bl"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-lg-3 col-12"}>
                                <ul className={"f-basker unstyled pl-0"}>
                                    <li>
                                        <a href={"#"}>Home</a>
                                    </li>
                                    <li>
                                        <a href={"#"}>Career</a>
                                    </li>
                                    <li>
                                        <a href={"#"}>Services</a>
                                    </li>
                                    <li>
                                        <a href={"#"}>Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={"col-lg-3 col-12"}>
                                <ul className={"unstyled pl-0 thin"}>
                                    <li>
                                        <a href={"#"}>Web development</a>
                                    </li>
                                    <li>
                                        <a href={"#"}>Mobile apps</a>
                                    </li>
                                    <li>
                                        <a href={"#"}>Internet websites</a>
                                    </li>
                                    <li>
                                        <a href={"#"}>Ecommerce</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={"col-lg-3 col-12"}>
                                <ul className={"unstyled thin pl-0"}>
                                    <li>
                                        <a href={"#"}>Cookies</a>
                                    </li>
                                    <li>
                                        <a href={"#"}>Privacy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={"col-lg-3 col-12"}>
                                <img src={MijoraLogo} className={"img-fluid pb-3"} width="170"/>
                                    <ul className={"unstyled pl-0"}>
                                        <li className={"py-1"}> +3706544414123</li>
                                        <li className={"py-1"}> info@mijora.lt</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
    )
    }
    }
