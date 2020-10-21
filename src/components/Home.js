import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Icon from '../assets/logos/mijora_icon.svg';

export default class Home extends Component {
    render() {
        return (
            <div className={"main-block bl"} id={"home"}>
                <div className={"main logo-wrapper"}>
                    <Link to={"/"}><img src={Icon} alt="Mijora Icon" width="70"/></Link>
                </div>
                <h1 className={"text-center main"}>dilemma<span className="f-black">|</span><br/>
                    <span className={"h1-secondline"}>that probably will make customers life easier</span>
                </h1>

                <div className={"bottom-block f-basker"}>
                    <div className={"icon-scroll"}></div>
                    Scroll to explore
                </div>
            </div>
        )
    }
}
