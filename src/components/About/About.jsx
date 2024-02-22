import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast,  faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/about_img.jpg'


export default function About() {
    // Icons
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />


  return (
    <>
      <section id="about">
        <div class="container">
            <div className="title_heading">
                <h3>We Provide Remarkable Business Solutions</h3>
                <p>Our focus is on understanding the unique challenges and aspirations of each client, allowing us to craft bespoke strategies and implement innovative measures that yield remarkable results.</p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                        {faBusinessIcon}
                    </div>
                    <div className="about_content">
                        <h5>Collaborative Excellence</h5>
                        <p>Our collaborative approach ensures that your unique insights and industry knowledge are integrated into every strategy we craft.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green_icon">
                        {faChartPieIcon}
                    </div>
                    <div className="about_content">
                        <h5>Innovative Solutions</h5>
                        <p>We are dedicated to staying ahead of the curve, to give your business a competitive edge.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                        {faTruckFastIcon}
                    </div>
                    <div className="about_content">
                        <h5>Strategic Precision</h5>
                        <p>We ensure that our strategies are not only effective but also adaptable to the evolving needs of your business.</p>
                    </div>
                </div>
            </div>

            <div className="about_box_details">
                <div className="about_col">
                    <div className="about_image">
                        <img src={AboutImage} alt="about" className="about_main"/>
                    </div>
                    <div className="img_info_box">
                        <h6 className="img_info_title">CONTACTUS NOW!</h6>
                        <p></p>
                        <a href="/">{faPhoneIcon} <span>+233 555 747 276</span></a>
                    </div>
                </div>
                <div className="about_col  more_space">
                   <h3>Tailored Services for your company needs</h3>
                    <p>We are dedicated to providing unparalleled value which reflects our commitment to tailor our services to your company's distinct needs.</p>

                    <div className="grid_info">
                    <div className="icon">{faHouseLaptopIcon}</div>
                        <div className="detail">
                            <h4>Boost your Sales</h4>
                            <p>From optimizing your sales processes to developing impactful marketing campaigns, we offer a comprehensive suite of services aimed at maximizing your revenue potential</p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon green_icon">{faUserClockIcon}</div>
                        <div className="detail">
                            <h4>Empower your Team</h4>
                            <p>Supercharge your team with the skills and knowledge needed to  thrive in today's competitive landscape through our targeted training and dynamic development programs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
