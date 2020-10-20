import {Toast} from "react-bootstrap";
import React, {useState} from "react";

export default function ToastContext() {
    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);

    return (
        <Toast className={"toast show d-none d-lg-block"} id={"consultation"} onClose={() => setShow(false)} show={show}
               delay={10000} autohide>
            <Toast.Body className={"toast-body py-4"}>
                <button type="button" className={"ml-2 mb-1 close"} data-dismiss="toast" aria-label="Close"
                        onClick={() => setShow(false)}>
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
                                        data-dismiss="toast" aria-label="Close" onClick={toggleShow}>It's annoying, I'm
                                    ignoring
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Toast.Body>
        </Toast>
    );
}
