import React from "react";
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import Icon from '../assets/logos/mijora_icon.svg';
import ArrowRightIcon from '../assets/icons/right.svg';
import TooltipContext from "../contexts/TooltipContext";

export default function JobInside() {
    return (
        <div>
            <div className={"other logo-wrapper"}>
                <Link to={"/"}><img src={Icon} width="70" alt={"Mijora icon"}/></Link>
            </div>
            <div className={"block-default pt-0 pt-lg-5"}>
                <div className={"container career pt-lg-5"}>
                    <div className={"row pt-5 pb-5"}>
                        <div className={"col-lg-8 col-12"}>
                            <h1 className={"pb-0 mb-0"}>
                                <b>React developer</b>
                            </h1>
                            <span className={"f-basker d-block"}>Apps • Websites • Services</span>
                            <span className={"location d-block"}>Kaunas</span>
                            <p className={"f-basker text-justify pt-4 paragraph"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <h5 className={"header-5"}>
                                What we will require?
                            </h5>
                            <ul className={"f-basker"}>
                                <li> Design and maintain clean, reliable, and testable code in alignment with best
                                    practices and internal standards
                                </li>
                                <li>Analyze, enhance, and collaborate on the scale and design of our front-end
                                    infrastructure and software development lifecycle of Caspio Bridge.
                                </li>
                                <li>Understand business requirements, functionality, and customer needs to create
                                    intuitive, feature-rich, and user-friendly experience with new applications and
                                    updating existing code
                                </li>
                                <li>Optimize and push the boundaries of performance, quality, and responsiveness of
                                    applications and features of our platform in an agile environment
                                </li>
                                <li>Ensure high quality of web front-end component development, including adherence to
                                    UX/UI best practices.
                                </li>
                            </ul>
                            <Form className={"pb-3"}>
                                <div className={"row"}>
                                    <div className={"col-lg-6 col-12"}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Name, surname</Form.Label>
                                            <Form.Control type={"email"} className={"form-input"}
                                                          id={"exampleInputEmail1"}
                                                          aria-describedby={"emailHelp"} placeholder={"e.g. John Doe"}/>
                                        </Form.Group>
                                    </div>
                                    <div className={"col-lg-6 col-12"}>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type={"email"} className={"form-input"}
                                                          id={"exampleInputEmail1"}
                                                          aria-describedby={"emailHelp"}
                                                          placeholder={"e.g. iam@mijora.lt"}/>
                                        </Form.Group>
                                    </div>
                                    <div className={"col-lg-6 col-12"}>
                                        <Form.Group>
                                            <Form.Label>Phone number</Form.Label>
                                            <Form.Control type={"email"} className={"form-input"}
                                                          id={"exampleInputEmail1"}
                                                          aria-describedby={"emailHelp"}
                                                          placeholder={"e.g. +4100000000"}/>
                                        </Form.Group>
                                    </div>
                                    <div className={"col-lg-6 col-12"}>
                                        <Form.Group>
                                            <Form.Label>Favorite social network
                                                <TooltipContext></TooltipContext>
                                            </Form.Label>
                                            <Form.Control type={"email"} className={"form-input"}
                                                          id={"exampleInputEmail1"}
                                                          aria-describedby={"emailHelp"}
                                                          placeholder={"e.g. Instagram @mijora.lt"}/>
                                        </Form.Group>
                                    </div>
                                    <div className={"col-12"}>
                                        <Form.Group>
                                            <Form.Label>Describe yourself in one sentence</Form.Label>
                                            <Form.Control as={"textarea"} className={"form-input"}
                                                          id={"exampleFormControlTextarea1"}
                                                          placeholder={"e.g. I was born to win."} rows="3"/>
                                        </Form.Group>
                                    </div>
                                    <div className={"col-12"}>
                                        <Form.Label>Your Curriculum Vitae or however you call it</Form.Label>
                                        <div className={"custom-file"}>
                                            <Form.Control type={"file"} className={"custom-file-input"}
                                                          id={"customFile"}/>
                                            <Form.Label className={"form-input custom-file-label"} htmlFor={"customFile"}>Choose
                                                file</Form.Label>
                                        </div>
                                    </div>
                                </div>
                                <small className={"form-text text-muted pb-3"}>We'll never share your contacts with
                                    anyone else.</small>
                                <Button type={"submit"} className={"btn btn-success block-button-xs"}>Apply</Button>
                            </Form>
                        </div>
                        <div className={"col-lg-4 col-12 contacts"}>
                            <div className={"row"}>
                                <div className={"col-12 pt-lg-0 pt-3"}>
                                    <h2 className={"header-2"}>We are also looking for</h2>
                                </div>
                                <div className={"col-12 my-2"}>
                                    <Link className={"job"} to={"/job-inside"}>
                                        <div className={"job-card employer-card"}>
                                            <div className={"card-body px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-10"}>
                                                        <h5 className={"mb-0 header-5"}>React developer</h5>
                                                        <span
                                                            className={"f-basker d-block"}>Apps • Websites • Services</span>
                                                        <span className={"location d-block"}>Kaunas</span>
                                                    </div>
                                                    <div className={"col-2 my-auto text-right"}>
                                                        <img src={ArrowRightIcon} className={"img-fluid arrow-right"}
                                                             width="40" alt={"Arrow right icon"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className={"col-12 my-2"}>
                                    <Link className={"job"} to={"/job-inside"}>
                                        <div className={"job-card employer-card"}>
                                            <div className={"card-body px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-10"}>
                                                        <h5 className={"mb-0 header-5"}>React developer</h5>
                                                        <span
                                                            className={"f-basker d-block"}>Apps • Websites • Services</span>
                                                        <span className={"location d-block"}>Kaunas</span>
                                                    </div>
                                                    <div className={"col-2 my-auto text-right"}>
                                                        <img src={ArrowRightIcon} className={"img-fluid arrow-right"}
                                                             width="40" alt={"Arrow right icon"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className={"col-12 my-2"}>
                                    <Link className={"job"} to={"/job-inside"}>
                                        <div className={"job-card employer-card"}>
                                            <div className={"card-body px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-10"}>
                                                        <h5 className={"mb-0 header-5"}>React developer</h5>
                                                        <span
                                                            className={"f-basker d-block"}>Apps • Websites • Services</span>
                                                        <span className={"location d-block"}>Kaunas</span>
                                                    </div>
                                                    <div className={"col-2 my-auto text-right"}>
                                                        <img src={ArrowRightIcon} className={"img-fluid arrow-right"}
                                                             width="40" alt={"Arrow right icon"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
