import React, {Component} from "react";
import {withRouter} from "react-router-dom";

export class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            document.body.scrollTo(0, 0);
        }
        if (this.props.location.hash) {
            let component = document.querySelector(this.props.location.hash)
            component.scrollIntoView();
        }
    }

    render() {
        return <React.Fragment/>
    }
}

export default withRouter(ScrollToTop)
