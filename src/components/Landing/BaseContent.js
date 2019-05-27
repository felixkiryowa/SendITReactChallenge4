import React from 'react';
import './landing.scss';

const BaseContent = () =>  {
    return (
        <div>
            <section className="container-1">
                <div className="left">
                    <div className="thumb" ></div>
                    <h3 align="center" className="dive_headers"><b>Fast Service</b></h3>
                    <hr></hr>
                    <p align="center" className="style_paragraphs">
                        We deliver goods with in no time ,through our great employees ready to deliver goods 24/7
                </p>
                </div>
                <div className="left">
                    <div className="thumb1"></div>
                    <h3 align="center" className="dive_headers"><b>We Deliver Your Order</b></h3>
                    <hr></hr>
                    <p align="center" className="style_paragraphs">
                        We deliver goods at your door any time of the day, whichever part of the country.
                </p>
                </div>
                <div className="left">
                    <div className="thumb2"></div>
                    <h3 align="center" className="dive_headers"><b> Secured </b></h3>
                    <hr></hr>
                    <p align="center" className="style_paragraphs">
                        Sit back and relax as no body is to tamper with any of your goods in a aparcel.
                </p>
                </div>
            </section>
        </div>
    )
}

export default BaseContent;
