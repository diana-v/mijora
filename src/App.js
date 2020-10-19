import './style.css'
import React, {Component} from 'react';
import Layout from './components/Layout'
import Home from './components/Home'
import About from "./components/About";
import Jobs from "./components/Jobs";
import Community from "./components/Community";
import Blog from "./components/Blog";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

class App extends Component {
    render() {
        return (
            <div>
                <Layout></Layout>
                <Home></Home>
                <About></About>
                <Jobs></Jobs>
                <Community></Community>
                <Blog></Blog>
                <Clients></Clients>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
