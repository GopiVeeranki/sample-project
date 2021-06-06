import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <div className='card light-blue darken-4 z-depth-0'>
                    <div className='card-content'>
                        <h6 className='white-text'>
                            <strong># PROFESSIONAL SKILLS</strong>
                        </h6>
                        <hr />
                        <div className='row pt'>
                            <div className='col m6 s12'>
                                <p className='grey-text text-lighten-3'>HTML</p>
                                <div className='progress white'>
                                    <div className='determinate grey' style={{width: '89%'}}></div>
                                </div>
                            </div>

                            <div className='col m6 s12'>
                                <p className='grey-text text-lighten-3'>JAVA</p>
                                <div className='progress white'>
                                    <div className='determinate grey' style={{width: '70%'}}></div>
                                </div>
                            </div>
                        </div>

                        <div className='row pt'>
                            <div className='col m6 s12'>
                                <p className='grey-text text-lighten-3'>SELENIUM</p>
                                <div className='progress white'>
                                    <div className='determinate grey' style={{width: '89%'}}></div>
                                </div>
                            </div>

                            <div className='col m6 s12'>
                                <p className='grey-text text-lighten-3'>MOCk AUTOMATION</p>
                                <div className='progress white'>
                                    <div className='determinate grey' style={{width: '80%'}}></div>
                                </div>
                            </div>
                        </div>

                        <div className='row pt'>
                            <div className='col m6 s12'>
                                <p className='grey-text text-lighten-3'>JAVASCRIPT</p>
                                <div className='progress white'>
                                    <div className='determinate grey' style={{width: '89%'}}></div>
                                </div>
                            </div>

                            <div className='col m6 s12'>
                                <p className='grey-text text-lighten-3'>MYSQL</p>
                                <div className='progress white'>
                                    <div className='determinate grey' style={{width: '60%'}}></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
