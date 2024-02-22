import React from 'react'
import './Blog.css';
import  BlogImage from '../../assets/blog/blog.jpg'


export default function blog() {
  return (
    <div>
      <section id="blog">
        <div className="container">
            <div className="blog_wrapper">
                <div className="blog_col">
                    <h3>WE HELP BUSINESSES LAUNCH, GROW AND SCALE</h3>
                    <p>Our comprehensive support encompasses strategic guidance, tailored solutions, and proven methodologies to empower enterprises to navigate and thrive in the dynamic business landscape.</p>
                    <div className="btn_wrapper">
                        <a href="/" className="btn">Get Started</a>
                    </div>
                </div>
                <div className="blog_col">
                    <div className="blog_image">
                        <img src={BlogImage} alt="Blog" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
