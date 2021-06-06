import React, { Component } from 'react';
// import ImgProfile from './../component/images/download.jpeg'
import ImgProfile from './../component/images/gopi.jpeg'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className='avatarImg'>
                    <img className='circle responsive-img'
                    src={ImgProfile}
                    alt="Gopi Veeranki"
                    /> 
                </div>
                <div className='card light-blue darken-4 z-depth-0 hide-one-large-only'>
                    <div className='card-content center social'>
                        <h2 className='grey-tect text-lighten-3'>
                            <strong>Gopi Veeranki</strong>
                        </h2>
                        {/* <h5 className='grey-text text-lighten-1'>
                            Senior Quality Engineer
                        </h5>

                        <a href='https://facebook.com' target='blank' >
                            <i className='fab fa-facebook-square fa-2x'></i>
                        </a>

                        <a href='https://twitter.com' target='blank' >
                            <i className='fab fa-twitter-square fa-2x'></i>
                        </a>

                        <a href='https://linkedin.com' target='blank' >
                            <i className='fab fa-linkedin fa-2x'></i>
                        </a>

                        <a href='https://github.com' target='blank' >
                            <i className='fab fa-github-square fa-2x'></i>
                        </a> */}

                    </div>
                </div>
                <div className='card light-blue darken-4 z-depth-0'>
                    <div className='card-content'>
                        <h6 className='white-text'>
                            <strong># PROFILE</strong>
                        </h6>
                        <hr></hr>
                        <p className='grey-text text-lighten-3 pt'>
                            QA Enginner at ServiceNow 
                            QA Enginner at ServiceNow 
                            QA Enginner at ServiceNow 
                            QA Enginner at ServiceNow 
                            QA Enginner at ServiceNow 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
