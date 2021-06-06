import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import ImgOne from '../images/img.png'
import ImgTwo from '../images/img2.png'
import ImgThree from '../images/img3.png'
import { Link } from 'react-router-dom';
import './Banner.css'

export default class Banner extends Component {
    render() {
        return (
            <section className='slider' id='home'>
                <ul className='slides'>
                    <li >
                        <img src={ImgOne} alt='Vacation'></img>
                        <div className='caption center-align'>
                        <h2 className='blue-text'>Pick Your Destination</h2>
                        <h5 className='light black-text text-lighten-4 hide-on-small-only'>
                            Image one!!
                        </h5>
                        <Link to='#' className='btn btn-large blue'>Learn more</Link>
                        </div>
                    </li>

                    <li >
                        <img src={ImgTwo} alt='Book'></img>
                        <div className='caption center-align'>
                        <h2 className='blue-text'>Book your trip</h2>
                        <h5 className='light black-text text-lighten-3 hide-on-small-only'>
                            Image one!!
                        </h5>
                        <Link to='#' className='btn btn-large blue'>Learn more</Link>
                        </div>
                    </li>

                    <li >
                        <img src={ImgThree} alt='Game'></img>
                        <div className='caption center-align'>
                        <h2 className='blue-text'>Pick Game</h2>
                        <h5 className='light white-text text-lighten-3 hide-on-small-only'>
                            Image one!!
                        </h5>
                        <Link to='#' className='btn btn-large blue'>Learn more</Link>
                        </div>
                    </li>
                </ul>

            </section>
        )
    }
}
