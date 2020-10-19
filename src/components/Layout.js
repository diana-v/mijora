import React, {useState, Component} from "react"
import jQuery from "jquery";
import {Toast} from "react-bootstrap";

import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'
import Baby from '../assets/baby.svg'

const [show, setShow] = useState(false);
const toggleShow = () => setShow(!show);


export default class Layout extends Component {
    modeToggle = () => {
        var element = document.body;
        element.classList.toggle("dark-mode");
        jQuery(".sun").toggleClass("d-none");
        jQuery(".moon").toggleClass("d-block");
    };

    mouse = () => {
        var mouseX = 0, mouseY = 0;
        var xp = 0, yp = 0;
        jQuery(document).mousemove(function (e) {
            mouseX = e.pageX - 30;
            mouseY = e.pageY - 30;
        });
        setInterval(function () {
            xp += ((mouseX - xp) / 6);
            yp += ((mouseY - yp) / 6);
            jQuery("#circle").css({left: xp + 'px', top: yp + 'px'});
        }, 20);
    };

    componentDidMount() {
        this.mouse();
        this.modeToggle()
    };

    render() {
        return (
            <div>
                <span id={"circle"} className={"circle"}></span>
                <div style={{position: "fixed", zIndex: "3", left: "65px", bottom: "20px"}}
                     className={"d-none d-lg-block"}>
                    <div href={"#"} onClick={this.modeToggle}>
                        <a href={"#"}>
                            <div className={"mob-consult"}>
                                <img src={Sun} width="35" className={"sun"}/>
                                <img src={Moon} width="35" className={"moon d-none"}/>
                            </div>
                        </a>
                    </div>
                </div>

                <div style={{position: "fixed", zIndex: "3", right: "20px", bottom: "77px"}}>
                    <div href={"#"} onClick={this.modeToggle} className={"invisible-d"}>
                        <a href={"#"} className={"invisible-d"}>
                            <div className={"mob-consult"}>
                                <img src={Sun} width="35" className={"sun"}/>
                                <img src={Moon} width="35" className={"moon d-none"}/>
                            </div>
                        </a>
                    </div>
                </div>


                <div style={{position: "fixed", zIndex: "3", right: "20px", bottom: "20px"}}>
                    <a href={"/contacts"} className={"invisible-d"}>
                        <div className={"mob-consult"}>
                            <img src={Baby} width="35"/>
                        </div>
                    </a>
                    <Toast className={"toast show d-none d-lg-block"} id={"consultation"} onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Body className={"toast-body py-4"}>
                            <button type="button" className={"ml-2 mb-1 close"} data-dismiss="toast" aria-label="Close" onClick={() => setShow(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className={"row"}>
                                <div className={"col-12"}>
                                    <h6 className={"pb-0 mb-1"}>Schedule a free consultation</h6>
                                    <p className={"f-basker pb-0 mb-2 text-justify"}>Lorem Ipsum is simply dummy text of
                                        the printing and typesetting industry.</p>
                                    <div className={"row"}>
                                        <div className={"col-6 pr-1"}>
                                            <a href={"/contacts"} className={"btn-success btn btn-block btn-sm"}>Schedule
                                                a call</a>
                                        </div>
                                        <div className={"col-6 pl-1"}>
                                            <button className={"btn-outline-success btn-block btn btn-sm"}
                                                    data-dismiss="toast"
                                                    aria-label="Close" onClick={toggleShow}>Its annoying, im ignoring
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Toast.Body>
                    </Toast>
                </div>
            </div>
        )
    }
}
