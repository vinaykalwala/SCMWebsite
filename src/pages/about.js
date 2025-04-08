import React from 'react'
import "../styles/about.css"
import Banner from '../assets/law.jpg'
import CEO from '../assets/SCM-CEO.png'
import Mission from '../assets/mission.png'
import TeamImage from '../assets/SCM-Team1.png'
import TeamImage1 from '../assets/SCM-team2.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="banner">
          <img src={Banner} alt="law-banner" />
            <div className="banner-content">
                <h1>About <span className="company-name">SCM LAW FIRM</span></h1>
            </div>
      </div>
      <div className="about-details">
        <h2 className='title'>About <span className="company-name">SCM LAW FIRM</span></h2>
        <div className="text-image-container">
          <p>
            At <span className="company-name">SCM LAW FIRM</span>, we believe in the transformative power of the law to protect rights, resolve
            disputes, and deliver justice. With over 30 years of legal excellence, our firm has been a
            cornerstone of trusted legal services in Karimnagar and beyond.
          </p>
          <img src={CEO} alt='scm-ceo' className='team-image' />
        </div>
        <h2 className='title'>Our Mission</h2>
        <div className="text-image-container">
          <img src={Mission} alt='SCM Mission' className='team-image' />
          <p>
            "Our mission is to provide professional, compassionate, and result-oriented legal solutions that
            empower our clients. We are committed to upholding the highest standards of integrity and
            dedication, ensuring that each client receives the personalized attention they deserve."
          </p>
        </div>

        <h2 className='title'>Our Legacy</h2>
        <p>
          Founded on the principles of legal expertise and client satisfaction, <span className="company-name">SCM LAW FIRM</span> has handled
          a wide range of cases across various domains, from civil and criminal litigation to corporate and
          intellectual property matters. Over the years, we have built a reputation for delivering
          exceptional legal services tailored to the unique needs of individuals, families, and businesses.
        </p>

        <h2 className='title'>Why Choose <span className="company-name">SCM LAW FIRM</span>?</h2>
        <p>
          <b>Experience That Matters: </b> With nearly three decades of practice, our attorneys have a deep
          understanding of the law and a proven ability to navigate complex legal challenges.
        </p>
        <p>
          <b>Comprehensive Legal Solutions: </b> We offer a full spectrum of services, including litigation, legal
          consulting, document drafting, and dispute resolution, making us a one-stop destination for all
          your legal needs.
        </p>
        <p>
          <b>Client-Centric Approach: </b> At <span className="company-name">SCM LAW FIRM</span>, we prioritize our clients’ needs and goals. Every
          case is handled with care, confidentiality, and a commitment to achieving the best possible
          outcome.
        </p>
        <p>
          <b>Strong Advocacy: </b> Whether negotiating settlements or representing you in court, our team is
          known for its tenacity and strategic thinking.
        </p>
        <p>
          <b>Local Expertise, Global Vision: </b> While we are deeply rooted in the Karimnagar community, our
          expertise extends to matters with national and international implications.
        </p>

        <h2 className='title'>Meet Our Team</h2>
        <p>
        Behind <span className="company-name">SCM LAW FIRM</span> is a team of highly skilled attorneys and legal professionals who bring
        passion and expertise to every case. Led by a seasoned legal expert with decades of
        experience, our team collaborates to ensure that you benefit from a well-rounded and
        comprehensive approach.
        </p>
        <div className="text-image-container">
          <img src={TeamImage} alt="Our Team" className="team-image" />
          <img src={TeamImage1} alt="Our Team" className="team-image" />
        </div>
        <h2 className='title'>Our Philosophy</h2>
        <p>
          We believe that the law is not just about winning cases; it’s about making a difference in
          people’s lives. Our approach is grounded in empathy, ethics, and excellence. We take the time
          to understand your concerns, provide clear guidance, and work tirelessly to secure the results
          you deserve.
        </p>
      </div>
    </div>
  )
}

export default About
