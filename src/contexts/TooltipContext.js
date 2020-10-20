import React from "react";
import {Tooltip, OverlayTrigger} from "react-bootstrap";
import GithubGrey from "../assets/icons/github-grey.svg";
import FacebookGrey from "../assets/icons/facebookgrey.svg";
import InstagramGrey from "../assets/icons/instagramgrey.svg";
import LinkedInGrey from "../assets/icons/linkedingrey.svg";

export default function TooltipContext() {
    return (
        <span>
            <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="button-tooltip-2">Take a look at us: www.github.com/mijora</Tooltip>}
            >
                {({ref, ...triggerHandler}) => (
                    <img src={GithubGrey}
                         {...triggerHandler}
                         width="13"
                         alt={"Github icon"}
                         ref={ref}
                         className={"ml-3"}/>
                )}
            </OverlayTrigger>
            <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="button-tooltip-2">Take a look at us: www.facebook.com/mijora.lt</Tooltip>}
            >
                {({ref, ...triggerHandler}) => (
                    <img src={FacebookGrey}
                         {...triggerHandler}
                         ref={ref}
                         width="13"
                         alt={"Facebook icon"}
                         className={"ml-1"}/>
                )}
            </OverlayTrigger>
            <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="button-tooltip-2">Take a look at us: www.instagram.com/mijoralt</Tooltip>}
            >
                {({ref, ...triggerHandler}) => (
                    <img src={InstagramGrey}
                         {...triggerHandler}
                         ref={ref}
                         width="13"
                         alt={"Instagram icon"}
                         className={"ml-1"}/>
                )}
            </OverlayTrigger>
            <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="button-tooltip-2">Take a look at us:
                    www.linkedin.com/company/19261529</Tooltip>}
            >
                {({ref, ...triggerHandler}) => (
                    <img src={LinkedInGrey}
                         {...triggerHandler}
                         ref={ref}
                         width="13"
                         alt={"Linkedin icon"}
                         className={"ml-1"}/>
                )}
            </OverlayTrigger>
                </span>
    );
}
