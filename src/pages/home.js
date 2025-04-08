import React from "react"
import "../styles/home.css"
import { Link } from 'react-router-dom'
import Banner from '../assets/banner_img.jpg'
import Whoweare from '../assets/who_we_are.jpeg'
import CorporateLaw from '../assets/corporate_law.jpg'
import FamilyLaw from '../assets/familylaw.png'
import CriminalLaw from '../assets/criminal-lawyer.jpg'
import RealEstateLaw from '../assets/real-estate-law.png'
import IntellectualPropertyLaw from '../assets/intellectual-property.jpg'
import FederalLaw from '../assets/federal-law.jpg'
import { FaHandshake, FaBriefcase, FaUserFriends, FaLightbulb } from "react-icons/fa"

// Company Logos Images
import Adanilogo from '../assets/companylogos/adani-hfl.png'
import Aditybirlahfl from '../assets/companylogos/Aditya-birla-hfl.webp'
import Altumcredo from '../assets/companylogos/altum-credo.jpg'
import Avomhfl from '../assets/companylogos/avom-hfl.png'
import Badradri from '../assets/companylogos/badradri-bank.png'
import Bajaj from '../assets/companylogos/bajaj.webp'
import Canfinhome from '../assets/companylogos/can-fin-homes.ltd.jpg'
import Canrabank from '../assets/companylogos/canara-bank.png'
import Capitalindia from '../assets/companylogos/capital-india-hfl.jpg'
import Centralbank from '../assets/companylogos/Central_Bank_of_India_Logo.png'
import Centrumhfl from '../assets/companylogos/centrum-hfl.png'
import Cholahfl from '../assets/companylogos/chola-hfl.png'
import Dcbbank from '../assets/companylogos/dcb-bank.png'
import Equitas from '../assets/companylogos/equitas.jpg'
import Federalbank from '../assets/companylogos/federal-bank.png'
import Fivestar from '../assets/companylogos/five-star.jpg'
import Grihum from '../assets/companylogos/grihum.jpg'
import Hdbfinancial from '../assets/companylogos/HDB_Financial_Services_logo.png'
import Hdfcbank from '../assets/companylogos/hdfc-bank.jpg'
import Hindujahousingfinance from '../assets/companylogos/hinduja_housing_finance_logo.jpg'
import Hiranandanifinancial from '../assets/companylogos/hiranandani financial-services.png'
import HeroHousingFinance from '../assets/companylogos/hero-housing-finance.png'
import Homefirst from '../assets/companylogos/home-first.jpg'
import Icicibank from '../assets/companylogos/icici-bank.jpg'
import Icicihfc from '../assets/companylogos/icici-hfc.webp'
import IDFCfirstbank from '../assets/companylogos/IDFC_First_Bank_logo.jpg'
import Incredfinance from '../assets/companylogos/incred-finance.jpg'
import Indiabullshfl from '../assets/companylogos/indiabulls-hfl.png'
import Indusindbank from '../assets/companylogos/indusind-bank.jpg'
import Karurvysyabank from '../assets/companylogos/karur-vysya-bank.png'
import Kotakmahindrabank from '../assets/companylogos/kotak-mahindra-bank.png'
import Lichfl from '../assets/companylogos/lic-hfl.jpg'
import Mahendra from '../assets/companylogos/mahendra-hfl.png'
import Muthootfinance from '../assets/companylogos/muthoot-finance.jpg'
import Nidohfl from '../assets/companylogos/nido-hfl.png'
import Nivara from '../assets/companylogos/nivara.jpg'
import Northernarchfl from '../assets/companylogos/northern-arc-hfl.webp'
import Piramalhfl from '../assets/companylogos/piramal-hfl.jpg'
import Pnbhfl from '../assets/companylogos/pnb-hfl.png'
import Prayaancapital from '../assets/companylogos/prayaan-capital.png'
import Punjabbank from '../assets/companylogos/punjob-bank.jpg'
import RBLbank from '../assets/companylogos/rbl-bank.png'
import SBFChfl from '../assets/companylogos/sbfc-hfl.jpg'
import Shriramhfl from '../assets/companylogos/shriram-hfl.webp'
import Shubham from '../assets/companylogos/shubham.jpg'
import Smfg from '../assets/companylogos/smfg.jpg'
import Sundharam from '../assets/companylogos/sundharam.png'
import Tatahfl from '../assets/companylogos/tata-hfl.jpg'
import Ummeedhfl from '../assets/companylogos/ummeed-hfl.png'
import Wonderhfl from '../assets/companylogos/wonder-hfl.png'
import Yesbank from '../assets/companylogos/yes_bank.png'
import Indostar from '../assets/companylogos/indostar.png'
import AdharHouse from '../assets/companylogos/Adhar-House.png'
import Altum from '../assets/companylogos/Altum.png'
import PNBHomeFinane from '../assets/companylogos/PNB-Home-Finance.png'
import Tyger from '../assets/companylogos/Tyger.png'

const Home = () => {
  return (
    <section className="home">
      <div className="banner">
        <img src={Banner} alt="law-banner" />
        <div className="banner-content">
            <h1><span className="company-name">SCM LAW FIRM</span></h1>
            <p><b>Mr. Sana Chandra Mohan (M.A., LL.B.)</b></p>
            <p><b>Mr. Sana Akhil (M.S., LL.B.)</b></p>
            <p>Advocates & Legal Consultants</p>
            <button className="banner-btn"><Link to='/contact'>Contact Now</Link></button>
        </div>
      </div>
      <div className="content">
        <div>
        <h2 className="title">Welcome to <span className="company-name">SCM LAW FIRM </span></h2>
        <p>At <span className="company-name">SCM LAW FIRM </span>, we are committed to providing expert legal services with integrity, professionalism, and a client-centric approach. With years of experience in diverse legal fields, our team of skilled attorneys offers strategic guidance and practical solutions to meet your legal needs. Located in  Karimnagar, Telangana, we specialize in various domains of law, ensuring comprehensive legal support for individuals, businesses, and organizations. We understand that legal issues can be complex and stressful. That’s why we focus on delivering clear, concise, and effective solutions, ensuring peace of mind for our clients. Whether you need representation in court, assistance with contracts, or legal advisory services, we are here to guide you every step of the way.</p>
        </div>
        <h2 className="title">Who We Are ?</h2>
        <div className="who_we_are">
            <p>
            "<b>For over 30 years </b>, <span className="company-name">SCM LAW FIRM </span> has been a beacon of legal excellence in Karimnagar, Telangana. Renowned as one of the region's most trusted legal institutions, we specialize in delivering personalized, effective, and results-oriented legal services. 
            Our team comprises experienced legal professionals dedicated to providing tailored solutions across various domains, including corporate law, criminal law, family law, and more. With a strong foundation in legal practice and a commitment to excellence, 
            we strive to meet the unique needs of our clients with expertise and unwavering dedication."

            </p>
            <img src={Whoweare} alt="who we are?" />        
        </div>

        <div className="content">
          <h2 className="title">We Undertake</h2>
          <p><b>✔</b> Legal opinions & property, Drafting & Registration of Sale Deed, Gift Deed, Mortgage Deed, Partition Deed, Joint Development Agreement, General & Special Power of Attorney, Sale Agreement, Trust Deed, Release Deed, Rental & Lease Agreements,
              Memorandum of Agreement, Deed of Declaration & Rectification, Affidavit, Partnership Deed, etc.</p>
          <p><b>✔</b> RTI (Right to Information) Assistance</p>
          <p><b>✔</b> Formation of Associations, Trusts, Partnership Firm & Marriage Registration</p>
          <p><b>✔</b> KATHA, Tax (BBMP, BDA & Panchayath) & Notary Works</p>
          <p><b>✔</b> Sub-Registrar, BDA, AC, DC & Mandal Office Related Works</p>
        </div>

        <h2 className="title">Our Practice Areas</h2>
        <div className="practice-areas">
        <p>Whether you are an individual, a family, or a business, <span className="company-name">SCM LAW FIRM</span> is here to meet your legal
        needs with expertise in</p>
          <div className="card">
            <img src={CorporateLaw} alt="Corporate Law" />
            <h3>Corporate Law</h3>
            <p>Expert solutions for businesses and organizations.</p>
          </div>
          <div className="card">
            <img src={FamilyLaw} alt="Family Law" />
            <h3>Family Law</h3>
            <p>Resolving sensitive family matters with compassion.</p>
          </div>
          <div className="card">
            <img src={CriminalLaw} alt="Criminal Law" />
            <h3>Criminal Law</h3>
            <p>Defending rights and ensuring fair trials.</p>
          </div>
          <div className="card">
            <img src={RealEstateLaw} alt="Real Estate Law" />
            <h3>Real Estate Law</h3>
            <p>Assisting with property transactions and disputes.</p>
          </div>
          <div className="card">
            <img src={IntellectualPropertyLaw} alt="Intellectual Property Law" />
            <h3>Intellectual Property Law</h3>
            <p>Protecting your creations and innovations.</p>
          </div>
          <div className="card">
            <img src={FederalLaw} alt="Federal Law" />
            <h3>Federal Law</h3>
            <p>Handling legal matters that involve federal regulations and jurisdiction.</p>
          </div>
        </div>
        <h2 className="title">Our Clients</h2>
        <div className="slider">
          <div className="slider-track">
            <img src={Adanilogo} alt="Adani HFL logo" />
            <img src={Aditybirlahfl} alt="Aditya Birla HFL" />
            <img src={Altumcredo} alt="Altum-Credo" />
            <img src={Avomhfl} alt="Avom Hfl" />
            <img src={Badradri} alt="Badradri" />
            <img src={Bajaj} alt="Bajaj" />
            <img src={Canfinhome} alt="Can Fin Homes Ltd" />
            <img src={Canrabank} alt="Canra Bank" />
            <img src={Capitalindia} alt="Capital India" />
            <img src={Centralbank} alt="Central Bank" />
            <img src={AdharHouse} alt="Adhar House" />
          </div>
        </div>
        <div className="slider">
          <div className="slider-track slider-track1">
            <img src={Federalbank} alt="Federal bank logo" />
            <img src={Fivestar} alt="Five star" />
            <img src={Grihum} alt="Grihum" />
            <img src={Hdbfinancial} alt="Hdb Financial" />
            <img src={Hdfcbank} alt="Hdfc Bank" />
            <img src={Hindujahousingfinance} alt="Hinduja Housing Finance" />
            <img src={Hiranandanifinancial} alt="Hiranandani Financial" />
            <img src={Homefirst} alt="Home First" />
            <img src={HeroHousingFinance} alt="Hero Housing Finance" />
            <img src={Icicibank} alt="ICICI Bank" />
            <img src={Punjabbank} alt="Punjob bank" />
            <img src={Prayaancapital} alt="Prayaan Capital" />
            <img src={Altum} alt="Altum" />
          </div>
        </div>
        <div className="slider">
          <div className="slider-track">
            <img src={Karurvysyabank} alt="Karurvysya Bank" />
            <img src={Kotakmahindrabank} alt="Kotak Mahindra Bank" />
            <img src={Lichfl} alt="Lic hfl" />
            <img src={Mahendra} alt="Mahendra HFL" />
            <img src={Muthootfinance} alt="Muthoot finance" />
            <img src={Nidohfl} alt="Nido hfl" />
            <img src={Nivara} alt="Nivara" />
            <img src={Northernarchfl} alt="Northern Arc Hfl" />
            <img src={Piramalhfl} alt="Piramal Hfl" />
            <img src={Pnbhfl} alt="Pnb hfl" />
            <img src={PNBHomeFinane} alt="PNB Home Finane" />
          </div>
        </div>
        <div className="slider">
          <div className="slider-track slider-track1">
            <img src={Dcbbank} alt="Dcb Bank" />
            <img src={SBFChfl} alt="Sbfc hfl" />
            <img src={Equitas} alt="Equitas" />
            <img src={Indusindbank} alt="Indusind Bank" />
            <img src={Shriramhfl} alt="Shriram hfl" />
            <img src={Shubham} alt="shubham" />
            <img src={Smfg} alt="Smfg" />
            <img src={Sundharam} alt="sundharam" />
            <img src={RBLbank} alt="RBL Bank" />
            <img src={Tatahfl} alt="Tata Hfl" />
            <img src={Ummeedhfl} alt="ummeed hfl" />
            <img src={Tyger} alt="Tyger" />
          </div>
        </div>
        <div className="slider">
          <div className="slider-track">
            <img src={Centrumhfl} alt="Centrum hfl" />
            <img src={Cholahfl} alt="Chola hfl" />
            <img src={Yesbank} alt="Yes Bank" />
            <img src={Indostar} alt="Indostar" />
            <img src={Incredfinance} alt="Incred Finance" />
            <img src={Indiabullshfl} alt="Indiabulls Hfl" />
            <img src={Icicihfc} alt="Icici hfc" />
            <img src={IDFCfirstbank} alt="IDFC First Bank" />
            <img src={Wonderhfl} alt="Wonder Hlf" />
          </div>
        </div>
        <div className="additional-info">
            <h3 className="title">Why <span className="company-name">SCM LAW FIRM</span> Stands Out</h3>
            <p> <b>Legacy of Success: </b> A proven track record of winning cases and achieving favorable outcomes</p>
            <p> <b>Tailored Approach: </b> We understand that every case is unique and craft strategies accordingly</p>
            <p> <b>Accessible and Approachable: </b> Legal issues can be daunting; we are here to make the process simple and transparent for you</p>
            <p> <b>Community-Driven: </b> Deeply rooted in Karimnagar, we are passionate about serving our local community with dedication and integrity</p>
            <h3 className="title">Our Values</h3>
            <div className="values-cards">
                <div className="value-card">
                    <FaHandshake className="value-icon" />
                    <h4>Integrity</h4>
                    <p>We uphold the highest ethical standards in all our dealings.</p>
                </div>
                <div className="value-card">
                    <FaBriefcase className="value-icon" />
                    <h4>Professionalism</h4>
                    <p>Our team is committed to excellence and accountability.</p>
                </div>
                <div className="value-card">
                    <FaUserFriends className="value-icon" />
                    <h4>Client-Centric</h4>
                    <p>Your satisfaction and success are our top priorities.</p>
                </div>
                <div className="value-card">
                    <FaLightbulb className="value-icon" />
                    <h4>Innovation</h4>
                    <p>We leverage modern tools and strategies to deliver effective solutions.</p>
                </div>
            </div>
          <h3 className="title">Your Legal Partner for Life</h3>
          <p>
          Whether you’re seeking justice, protecting your assets, or planning for the future, <span className="company-name">SCM LAW FIRM</span>
          is your trusted partner. We don’t just provide legal services—we build lasting relationships
          founded on trust and reliability.
          </p>
          <p>Take the first step toward resolving your legal matters with confidence. Visit our office or get in
            touch with us to schedule a consultation. Let <span className="company-name">SCM LAW FIRM</span> be the advocate you can rely on.
          </p>
          <p><b><span className="company-name">SCM LAW FIRM</span> – Where Justice Meets Expertise.</b></p>
          <h3 className="title">Our Commitment</h3>
          <p>
            At <span className="company-name">SCM LAW FIRM</span>, we understand that every legal issue is deeply personal. That’s why we go
            beyond the courtroom to provide guidance, support, and clarity. Our experienced team is
            dedicated to protecting your rights, securing justice, and helping you navigate even the most
            complex legal challenges.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home
