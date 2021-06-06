import React, { Component } from 'react'
import ImgOne from '../images/img.png'
import ImgTwo from '../images/img2.png'
import ImgThree from '../images/img3.png'
import { HashLink as Link } from 'react-router-hash-link'

export default class adventure extends Component {
    render() {
        return (
            <section id='explore' className='section section-adventures scrollspy'>
                <div className='container'>
                    <div className='row'>
                        <h4 className='center'>
                            <span className='purple-text darken-1'>Explore</span> Adventures
                        </h4>

                        <div className='col s12 m4'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src={ImgOne} alt='Chennai'></img>
                                    <span className='card-title'>Chennai</span>
                                    <Link className='btn-floating activator halfway-fab waves-effect waves-light purple'>
                                        <i className='material-icons'>add</i>
                                    </Link>
                                </div>
                                <div className='card-content'>
                                    <p>Here is the chennai content</p>
                                </div>
                                <div className='card-reveal'>
                                    <span className='card-title grey-text text-darken-4'>Chennai
                                    <i className='material-icons right'>close</i>
                                    <p>Here is the chennai content</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='col s12 m4'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src={ImgTwo} alt='Chennai'></img>
                                    <span className='card-title'>Chennai</span>
                                    <Link className='btn-floating activator halfway-fab waves-effect waves-light purple'>
                                        <i className='material-icons'>add</i>
                                    </Link>
                                </div>
                                <div className='card-content'>
                                    <p>Here is the chennai content</p>
                                </div>
                                <div className='card-reveal'>
                                    <span className='card-title grey-text text-darken-4'>Chennai
                                    <i className='material-icons right'>close</i>
                                    <p>Here is the chennai content</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='col s12 m4'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src={ImgThree} alt='Chennai'></img>
                                    <span className='card-title'>Chennai</span>
                                    <Link className='btn-floating activator halfway-fab waves-effect waves-light purple'>
                                        <i className='material-icons'>add</i>
                                    </Link>
                                </div>
                                <div className='card-content'>
                                    <p>Here is the chennai content</p>
                                </div>
                                <div className='card-reveal'>
                                    <span className='card-title grey-text text-darken-4'>Chennai
                                    <i className='material-icons right'>close</i>
                                    <p>Here is the chennai content</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        

                    </div>
                </div>
            </section>

        )
    }
}
