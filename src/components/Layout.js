import React, { Component} from "react"
import jQuery from "jquery";
import ToastContext from "../contexts/ToastContext";

import Sun from '../assets/icons/sun.svg'
import Moon from '../assets/icons/moon.svg'
import Baby from '../assets/icons/baby.svg'

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
            <div className={"wrapper"}>
                <span id={"circle"} className={"circle"}></span>
                <div style={{position: "fixed", zIndex: "3", left: "65px", bottom: "20px"}}
                     className={"d-none d-lg-block"}>
                    <div href={"#"} onClick={this.modeToggle}>
                        <a href={"#"}>
                            <div className={"mob-consult"}>
                                <img src={Sun} width="35" className={"sun"} alt={"Sun icon"}/>
                                <img src={Moon} width="35" className={"moon d-none"} alt={"Moon icon"}/>
                            </div>
                        </a>
                    </div>
                </div>

                <div style={{position: "fixed", zIndex: "3", right: "20px", bottom: "77px"}}>
                    <div href={"#"} onClick={this.modeToggle} className={"invisible-d"}>
                        <a href={"#"} className={"invisible-d"}>
                            <div className={"mob-consult"}>
                                <img src={Sun} width="35" className={"sun"} alt={"Sun icon"}/>
                                <img src={Moon} width="35" className={"moon d-none"} alt={"Moon icon"}/>
                            </div>
                        </a>
                    </div>
                </div>

                <div style={{position: "fixed", zIndex: "3", right: "20px", bottom: "20px"}}>
                    <a href={"#"} className={"invisible-d"}>
                        <div className={"mob-consult"}>
                            <img src={Baby} width="35" alt={"Circle icon"}/>
                        </div>
                    </a>
                    <ToastContext/>
                </div>
            </div>
        )
    }
}
