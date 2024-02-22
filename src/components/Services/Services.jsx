import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMarker, faUserGear } from '@fortawesome/free-solid-svg-icons';

export default function Services() {

//Icons
const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />
const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />
const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />


  return (
    <>
      <div id="services">
        <div className="container">
            <div className="title_heading">
                <h3>Our Services</h3>
                <p>Our comprehensive suite of services extends across various domains, encompassing professional training, strategic recruitment, and expert advisory services</p>
            </div>
            <div className="service_wrapper">
                <div className="service_box">
                    <div className="service_icon">{faMarkerIcon}</div>
                    <h4 className="number">01</h4>
                    <div className="service_content">
                        <h5>Training</h5>
                        <p>Empower your workforce for excellence through our Training programs. We deliver customized training solutions that align with your company goals.</p>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon blue_icon">{faLaptopCodeIcon}</div>
                    <h4 className="number">02</h4>
                    <div className="service_content">
                        <h5>Recruitment</h5>
                        <p>Build a stellar team with our Recruitment services. We understand the importance of talent acquisition in driving organisational success.</p>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon green_icon">{faUserGearIcon}</div>
                    <h4 className="number">03</h4>
                    <div className="service_content">
                        <h5>Business Advisory</h5>
                        <p>Navigate the path to success with our Business Advisory services. We offer strategic insights, data- driven solutions, and expert guidance.</p>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </>
  )
}
