import Icon from '../assets/logos/mijora_icon.svg'
import LocationIcon from '../assets/icons/location.svg'
import PhoneIcon from '../assets/icons/phone.svg'
import EmailIcon from '../assets/icons/email.svg'
import ArrowRightIcon from '../assets/icons/right.svg'
import Customer1 from '../assets/brands/example-customer-1.png'
import Customer2 from '../assets/brands/example-customer-2.png'
import Customer3 from '../assets/brands/example-customer-3.png'
import Customer4 from '../assets/brands/example-customer-4.png'
import React from "react";
import {Form, Button} from 'react-bootstrap'

export default function Contacts() {
    return (
        <div>
            <div className={"other logo-wrapper"}>
                <a href={"/"}><img src={Icon} width="70" alt={"Mijora icon"}/></a>
            </div>
            <div className={"block-default pt-0 pt-lg-5"}>
                <div className={"container py-lg-3"}>
                    <div className={"row pt-5 pb-5"}>
                        <div className={"col-lg-6 col-12"}>
                            <div className={"job-card contactless"}>
                                <div className={"card-body p-lg-5 p-3"}>
                                    <h2 className={"header-2"}>
                                        Lets get in touch!
                                    </h2>
                                    <p className={"f-basker paragraph"}> Fill out the contact form and we will definetely
                                        contact
                                        you in the near future.</p>
                                    <Form className={"pb-3"}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Name, surname</Form.Label>
                                            <Form.Control className={"form-input"} id={"contact-name"} placeholder={"e.g. John Doe"}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type={"email"} className={"form-input"} id={"contact-email"} placeholder="e.g. iam@mijora.lt"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Phone number</Form.Label>
                                            <Form.Control className={"form-input"} id="contact-phone" placeholder="e.g. +4100000000"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>What we should discuss about?</Form.Label>
                                            <Form.Control as={"textarea"} className={"form-input"} id={"contact-message"}
                                                      placeholder={"e.g. I want to audit my website..."}
                                                      rows="3"/>
                                        </Form.Group>
                                        <small className={"form-text text-muted pb-3"}>We'll never share your contacts
                                            with anyone else.</small>
                                        <Button type={"submit"} className={"btn btn-success btn-block"}>Submit</Button>
                                    </Form>
                                    <hr></hr>
                                        <h2 className={"header-2"}>
                                            Our contacts
                                        </h2>
                                        <div className={"row pt-3 text-lg-left"}>
                                            <div className={"col-1"}>
                                                <img src={LocationIcon} width="20" alt={"Location icon"}/>
                                            </div>
                                            <div className={"col-11"}>
                                                <p className={"paragraph"}>Europos pr. 32, Kaunas 46326, Lithuania</p>
                                            </div>
                                            <div className={"col-1"}>
                                                <img src={PhoneIcon} width="20" alt={"Location icon"}/>
                                            </div>
                                            <div className={"col-11"}>
                                                <p className={"paragraph"}>+37065053417</p>
                                            </div>
                                            <div className={"col-1"}>
                                                <img src={EmailIcon} width="20" alt={"Location icon"}/>
                                            </div>
                                            <div className={"col-11"}>
                                                <p className={"mb-0 paragraph"}>info@mijora.lt</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-6 pt-lg-0 pt-4 col-12 my-auto contacts"}>
                            <div className={"row"}>
                                <div className={"col-12"}>
                                    <h2 className={"header-2"}>Things we can help You with</h2>
                                    <p className={"f-basker paragraph"}>
                                        These are the main topics we are working with, but our team is always ready for
                                        new suggestions or a challange
                                    </p>
                                </div>
                                <div className={"col-12 my-2"}>
                                    <a className={"job"} href={"/job-inside"}>
                                        <div className={"job-card employer-card"}>
                                            <div className={"card-body px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-8"}>
                                                        <h3 className={"mb-0 header-3"}>Web development
                                                        </h3>
                                                        <span className={"f-basker d-block"}>The specifics of many companies require unique or adapted software solutions. </span>
                                                    </div>
                                                    <div className={"col-4 my-auto text-right"}>
                                                        <img src={ArrowRightIcon} className={"img-fluid arrow-right"}
                                                             width="40" alt={"Arrow right icon"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={"col-12 my-2"}>
                                    <a className={"job"} href={"/job-inside"}>
                                        <div className={"job-card employer-card"}>
                                            <div className={"card-body px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-8"}>
                                                        <h3 className={"mb-0 header-3"}>Web development
                                                        </h3>
                                                        <span className={"f-basker d-block"}>The specifics of many companies require unique or adapted software solutions. </span>
                                                    </div>
                                                    <div className={"col-4 my-auto text-right"}>
                                                        <img src={ArrowRightIcon} className={"img-fluid arrow-right"}
                                                             width="40" alt={"Arrow right icon"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={"col-12 my-2"}>
                                    <a className={"job"} href={"/job-insider"}>
                                        <div className={"job-card employer-card"}>
                                            <div className={"card-body px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-8"}>
                                                        <h3 className={"mb-0 header-3"}>Web development
                                                        </h3>
                                                        <span className={"f-basker d-block"}>The specifics of many companies require unique or adapted software solutions. </span>
                                                    </div>
                                                    <div className={"col-4 my-auto text-right"}>
                                                        <img src={ArrowRightIcon} className={"img-fluid arrow-right"}
                                                             width="40" alt={"Arrow right icon"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={"col-12 my-2"}>
                                    <a className={"job"} href={"/job-inside"}>
                                        <div className={"job-card employer-card"}>
                                            <div className={"card-body px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-8"}>
                                                        <h3 className={"mb-0 header-3"}>Web development
                                                        </h3>
                                                        <span className={"f-basker d-block"}>The specifics of many companies require unique or adapted software solutions. </span>
                                                    </div>
                                                    <div className={"col-4 my-auto text-right"}>
                                                        <img src={ArrowRightIcon} className={"img-fluid arrow-right"}
                                                             width="40" alt={"Arrow right icon"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={"col-12 pt-3"}>
                                    <h4>
                                        We trust them, they trust us
                                    </h4>
                                </div>
                                <div className={"col-3"}>
                                    <img src={Customer1} className={"img-fluid"} alt={"Example customer"}/>
                                </div>
                                <div className={"col-3"}>
                                    <img src={Customer2} className={"img-fluid"} alt={"Example customer"}/>
                                </div>
                                <div className={"col-3"}>
                                    <img src={Customer3} className={"img-fluid"} alt={"Example customer"}/>
                                </div>
                                <div className={"col-3"}>
                                    <img src={Customer4} className={"img-fluid"} alt={"Example customer"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
