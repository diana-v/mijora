import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MijoraLogo from '../assets/logos/mijora_logo.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer className={"py-4" + (this.props.useScrollSnap ? ' bl' : '')}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-lg-3 col-12"}>
                            <ul className={"f-basker unstyled pl-0"}>
                                <li>
                                    <Link to={{pathname: "/", hash: "#home", state: { fromDashboard: true }}}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/career"}>Career</Link>
                                </li>
                                <li>
                                    <Link to={"/services"}>Services</Link>
                                </li>
                                <li>
                                    <Link to={"/contacts"}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={"col-lg-3 col-12"}>
                            <ul className={"unstyled pl-0 thin"}>
                                <li>
                                    <Link to={{pathname: "/services/", hash: "#web-development", state: { fromDashboard: true }}}>Web development</Link>
                                </li>
                                <li>
                                    <Link to={{pathname: "/services/", hash: "#mobile-apps", state: { fromDashboard: true }}}>Mobile apps</Link>
                                </li>
                                <li>
                                    <Link to={{pathname: "/services/", hash: "#websites", state: { fromDashboard: true }}}>Internet websites</Link>
                                </li>
                                <li>
                                    <Link to={{pathname: "/services/", hash: "#e-commerce", state: { fromDashboard: true }}}>Ecommerce</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={"col-lg-3 col-12"}>
                            <ul className={"unstyled thin pl-0"}>
                                <li>
                                    <Link to={"/"}>Cookies</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Privacy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={"col-lg-3 col-12"}>
                            <img src={MijoraLogo} className={"img-fluid pb-3"} width="170" alt={"Mijora logo"}/>
                            <ul className={"unstyled pl-0"}>
                                <li className={"py-1"}> +3706544414123</li>
                                <li className={"py-1"}> info@mijora.lt</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
