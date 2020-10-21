import './style.css'
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/Home';
import About from "./components/About";
import Job from "./components/Job";
import Community from "./components/Community";
import Blog from "./components/Blog";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import BlogInside from "./views/BlogInside";
import Blogs from "./views/Blogs";
import Contacts from "./views/Contacts";
import JobInside from "./views/JobInside";
import Career from "./views/Career";
import Services from "./views/Services";

import 'bootstrap/dist/css/bootstrap.min.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
    return (
        <Router>
            <ScrollToTop></ScrollToTop>
            <Switch>
                <Route exact path="/">
                    <Layout></Layout>
                    <Home></Home>
                    <About></About>
                    <Job></Job>
                    <Community></Community>
                    <Blog></Blog>
                    <Clients></Clients>
                    <Footer useScrollSnap></Footer>
                </Route>
                <Route path="/blog-inside">
                    <Layout></Layout>
                    <BlogInside></BlogInside>
                    <Footer></Footer>
                </Route>
                <Route path="/blogs">
                    <Layout></Layout>
                    <Blogs></Blogs>
                    <Footer></Footer>
                </Route>
                <Route path="/contacts">
                    <Layout></Layout>
                    <Contacts></Contacts>
                    <Footer></Footer>
                </Route>
                <Route path="/job-inside">
                    <Layout></Layout>
                    <JobInside></JobInside>
                    <Footer></Footer>
                </Route>
                <Route path="/career">
                    <Layout></Layout>
                    <Career></Career>
                    <Footer></Footer>
                </Route>
                <Route exact path="/services">
                    <Layout></Layout>
                    <Services></Services>
                    <Footer useScrollSnap></Footer>
                </Route>
                <Redirect from="/services/*" to="/services"></Redirect>
            </Switch>
        </Router>
    );
}

export default App;
