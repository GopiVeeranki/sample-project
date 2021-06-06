import React, { Component } from 'react';
import About from '../component/about/About';
import Contact from '../component/contact/Contact';
import Profile from '../component/Profile';
import Skills from '../component/Skills';
import Experience from '../component/Experience';
import Education from '../component/Educations';
import Portfolios from '../component/Portfolios';
import Navbar from './Navbar';

export default class Home extends Component {
    render() {
        return (

            <section>

                <div className='row sameHeight'>
                <Navbar />
                </div>

                <div className='row sameHeight'>
                

                    <div className='col s12 m12 l4 light-blue darken-4 sameHeight_child'>
                        <Profile />
                        <Contact />
                        <Skills />
                    </div>

                    <div className='col s12 m12 l8 white sameHeight_child'>
                        <About />
                        <Education />
                        <Experience />
                        <Portfolios />
                    </div>
                </div>
            </section>
        )
    }
}
