import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

export default class Explore extends Component {
    render() {
        return (
            <section id='explore' className='section section icons grey lighten-4 center'>
                <div className='container'>
                    <div className='row'>
                        <h4 className='center'>
                            <span className='purple-text darken-1'>Explore</span> Sources
                        </h4>

                        <div className='col s6 m3'>
                            <div className='card-panel'>
                                <i className='material-icons medium purple-text'>hotel</i>
                                <h4>Stadiums</h4>
                                <p>Chennai stadium details</p>
                            </div>
                        </div>

                        <div className='col s6 m3'>
                            <div className='card-panel'>
                                <i className='material-icons medium purple-text'>restaurant</i>
                                <h4>Stadiums</h4>
                                <p>Chennai stadium details</p>
                            </div>
                        </div>

                        <div className='col s6 m3'>
                            <div className='card-panel'>
                                <i className='material-icons medium purple-text'>local_cafe</i>
                                <h4>Stadiums</h4>
                                <p>Chennai stadium details</p>
                            </div>
                        </div>

                        <div className='col s6 m3'>
                            <div className='card-panel'>
                                <i className='material-icons medium purple-text'>shopping_basket</i>
                                <h4>Stadiums</h4>
                                <p>Chennai stadium details</p>
                            </div>
                        </div>


                    </div>
                    </div>

            </section>
        )
    }
}
