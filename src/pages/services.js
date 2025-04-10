import React from 'react';
import "../styles/services.css";
import Banner from '../assets/banner_img.jpg';
import { FaBriefcase, FaGavel, FaLandmark, FaUsers, FaShieldAlt } from "react-icons/fa";


import Adanilogo from '../assets/companylogos/adani-hfl.png';
import Aditybirlahfl from '../assets/companylogos/Aditya-birla-hfl.jpg';
import Altumcredo from '../assets/companylogos/altum-credo.jpg';
import Avomhfl from '../assets/companylogos/avom-hfl.png';
import Badradri from '../assets/companylogos/badradri-bank.png';
import Bajaj from '../assets/companylogos/bajaj.jpg';
import Canfinhome from '../assets/companylogos/can-fin-homes.ltd.jpg';
import Canrabank from '../assets/companylogos/canara-bank.png';
import Capitalindia from '../assets/companylogos/capital-india-hfl.jpg';
import Centralbank from '../assets/companylogos/Central_Bank_of_India_Logo.png';
import Centrumhfl from '../assets/companylogos/centrum-hfl.png';
import Cholahfl from '../assets/companylogos/chola-hfl.png';
import Dcbbank from '../assets/companylogos/dcb-bank.png';
import Equitas from '../assets/companylogos/equitas.jpg';
import Federalbank from '../assets/companylogos/federal-bank.png';
import Fivestar from '../assets/companylogos/five-star.jpg';
import Grihum from '../assets/companylogos/grihum.jpg';
import Hdbfinancial from '../assets/companylogos/HDB_Financial_Services_logo.png';
import Hdfcbank from '../assets/companylogos/hdfc-bank.jpg';
import Hindujahousingfinance from '../assets/companylogos/hinduja_housing_finance_logo.jpg';
import Hiranandanifinancial from '../assets/companylogos/hiranandani financial-services.png';
import HeroHousingFinance from '../assets/companylogos/hero-housing-finance.png';
import Homefirst from '../assets/companylogos/home-first.jpg';
import Icicibank from '../assets/companylogos/icici-bank.jpg';
import Icicihfc from '../assets/companylogos/icici-hfc.jpg';
import IDFCfirstbank from '../assets/companylogos/IDFC_First_Bank_logo.jpg';
import Incredfinance from '../assets/companylogos/incred-finance.jpg';
import Indiabullshfl from '../assets/companylogos/indiabulls-hfl.png';
import Indusindbank from '../assets/companylogos/indusind-bank.jpg';
import Karurvysyabank from '../assets/companylogos/karur-vysya-bank.png';
import Kotakmahindrabank from '../assets/companylogos/kotak-mahindra-bank.png';
import Lichfl from '../assets/companylogos/lic-hfl.jpg';
import Mahendra from '../assets/companylogos/mahendra-hfl.png';
import Muthootfinance from '../assets/companylogos/muthoot-finance.jpg';
import Nidohfl from '../assets/companylogos/nido-hfl.png';
import Nivara from '../assets/companylogos/nivara.jpg';
import Northernarchfl from '../assets/companylogos/northern-arc-hfl.jpg';
import Piramalhfl from '../assets/companylogos/piramal-hfl.jpg';
import Pnbhfl from '../assets/companylogos/pnb-hfl.png';
import Prayaancapital from '../assets/companylogos/prayaan-capital.png';
import Punjabbank from '../assets/companylogos/punjob-bank.jpg';
import RBLbank from '../assets/companylogos/rbl-bank.png';
import SBFChfl from '../assets/companylogos/sbfc-hfl.jpg';
import Shriramhfl from '../assets/companylogos/shriram-hfl.jpg';
import Shubham from '../assets/companylogos/shubham.jpg';
import Smfg from '../assets/companylogos/smfg.jpg';
import Sundharam from '../assets/companylogos/sundharam.png';
import Tatahfl from '../assets/companylogos/tata-hfl.jpg';
import Ummeedhfl from '../assets/companylogos/ummeed-hfl.png';
import Wonderhfl from '../assets/companylogos/wonder-hfl.png';
import Yesbank from '../assets/companylogos/yes_bank.png';
import Indostar from '../assets/companylogos/indostar.png';
import AdharHouse from '../assets/companylogos/Adhar-House.png';
import Altum from '../assets/companylogos/Altum.png';
import PNBHomeFinane from '../assets/companylogos/PNB-Home-Finance.png'
import Tyger from '../assets/companylogos/Tyger.png'
import TruhomeFinance from '../assets/companylogos/Truhomefinance.png'

const Services = () => {
  const serviceData = [
    {
      icon: <FaBriefcase />,
      title: "Civil Rights Litigation",
      description: "Our firm is committed to safeguarding the fundamental rights and liberties enshrined in the Constitution. We represent individuals and organizations in cases of discrimination, unlawful detention, police misconduct, violations of freedom of speech, and other breaches of civil rights. With a thorough understanding of constitutional law and a passion for justice, we craft strategies to ensure your rights are restored and upheld, whether through litigation or negotiated settlements."
    },
    {
      icon: <FaGavel />,
      title: "Consumer Advocacy Litigation",
      description: "Consumers have the right to fair treatment and honest practices. We provide skilled representation in cases involving consumer fraud, defective products, misleading advertising, and violations of consumer protection laws. Whether you are an individual or a class of affected consumers, our firm vigorously advocates for accountability, fair compensation, and systemic change to prevent future injustices"
    },
    {
      icon: <FaLandmark />,
      title: "Corporate Litigation",
      description: "In the complex world of corporate disputes, our firm serves as a trusted ally to businesses of all sizes. We handle issues such as breach of contract, shareholder disputes, mergers and acquisitions conflicts, and trade secret violations. With a deep understanding of corporate law and a strategic approach to resolving disputes, we work tirelessly to protect your company’s interests, minimize risks, and achieve favorable outcomes"
    },
    {
      icon: <FaUsers />,
      title: "Criminal Defense Litigation",
      description: "Facing criminal charges can be one of the most challenging experiences in life. Our seasoned criminal defense attorneys provide unwavering support and a rigorous defense against charges ranging from misdemeanors to serious felonies. We focus on building a robust case, leveraging evidence, and challenging procedural errors to safeguard your rights and pursue the best possible resolution."
    },
    {
      icon: <FaShieldAlt />,
      title: "Debt Settlement",
      description: "Debt can quickly spiral into a significant burden, but resolution is possible with the right guidance. We specialize in negotiating with creditors to reduce outstanding balances, restructure repayment terms, and prevent legal action. Our goal is to provide practical solutions that enable individuals and businesses to regain financial stability and move forward with confidence."
    },
    {
      icon: <FaBriefcase />,
      title: "Disability Benefits Litigation",
      description: "Applying for and securing disability benefits can be a daunting process, particularly when claims are unfairly denied. Our firm represents clients at every stage of the disability benefits process, from initial applications to appeals. We work diligently to ensure you receive the financial and medical support you are entitled to under the law."
    },
    {
      icon: <FaLandmark />,
      title: "Entertainment Law",
      description: "The entertainment industry demands legal expertise that keeps pace with its dynamic nature. Our firm provides comprehensive services, including contract drafting and negotiation, intellectual property protection, talent management, and dispute resolution. Whether you are an artist, producer, or entertainment company, we are here to safeguard your creative and business interests."
    },
    {
      icon: <FaGavel />,
      title: "Government Litigation",
      description: "Legal disputes involving government entities require a nuanced understanding of public law and regulatory frameworks. We represent clients in matters such as compliance disputes, procurement challenges, regulatory enforcement actions, and administrative hearings. Our expertise ensures that you are well-prepared to navigate the complexities of government-related litigation."
    },
    {
      icon: <FaShieldAlt />,
      title: "Insurance Litigation",
      description: "Insurance disputes can be frustrating, especially when claims are delayed or denied in bad faith. Our firm represents policyholders in cases involving property damage, health and life insurance claims, and coverage disputes. We hold insurers accountable and strive to secure the compensation and benefits you rightfully deserve.."
    },
    {
      icon: <FaUsers />,
      title: "Intellectual Property Litigation",
      description: "In an increasingly competitive world, protecting intellectual property is critical to success. Our firm provides aggressive representation in copyright, trademark, patent, and trade secret disputes. From enforcement to defense, we work to protect the innovative and creative assets that drive your business forward."
    },
    {
      icon: <FaLandmark />,
      title: "Landlord and Tenant Litigation",
      description: "Disputes between landlords and tenants can quickly escalate without proper legal intervention. We represent both landlords and tenants in matters such as lease violations, evictions, security deposit disputes, and property maintenance issues. Our approach is focused on achieving fair and practical resolutions while ensuring compliance with applicable laws."
    },
    {
      icon: <FaBriefcase />,
      title: "Legal Consulting",
      description: "Our legal consulting services offer clients access to specialized knowledge and strategic advice tailored to their unique needs. From drafting contracts to advising on regulatory compliance, our team provides actionable insights that empower individuals and organizations to make informed decisions with confidence"
    },
    {
      icon: <FaGavel />,
      title: "Legal Malpractice Litigation",
      description: "If you have suffered harm due to an attorney’s negligence or breach of fiduciary duty, we are here to help. Legal malpractice claims require a deep understanding of both procedural and substantive law. Our firm meticulously investigates your case, holding negligent professionals accountable and seeking appropriate remedies for the damages incurred."
    },
    {
      icon: <FaLandmark />,
      title: "Maritime Litigation",
      description: "Maritime law encompasses a wide range of issues, from shipping and cargo disputes to vessel collisions and employment matters. Our firm represents clients in all aspects of admiralty law, providing expert counsel and vigorous representation to resolve complex maritime disputes effectively."
    },
    {
      icon: <FaShieldAlt />,
      title: "Nonprofit Litigation",
      description: "Nonprofit organizations often face unique legal challenges, including governance disputes, donor issues, and compliance with complex regulations. We provide tailored legal solutions to protect the integrity of your nonprofit and allow you to focus on advancing your mission."
    },
    {
      icon: <FaUsers />,
      title: "Power of Attorney",
      description: "A power of attorney is a vital legal document that ensures your wishes are respected in financial, medical, or legal matters. We provide guidance in drafting durable, medical, and limited powers of attorney, ensuring that your preferences are legally binding and clearly communicated.."
    },
    {
      icon: <FaBriefcase />,
      title: "Probate Litigation",
      description: "Disputes during probate can be emotionally and financially draining. We represent heirs, executors, and beneficiaries in matters such as contested wills, fiduciary disputes, and mismanagement of estates. Our compassionate yet assertive approach aims to resolve conflicts efficiently while honoring the intentions of the deceased."
    },
    {
      icon: <FaGavel />,
      title: "Property Damage Litigation",
      description: "Property damage can result from natural disasters, accidents, or negligence. We help clients seek compensation from responsible parties, insurers, or third parties. Our expertise in handling complex property claims ensures that your losses are fully accounted for and fairly compensated."
    },
    {
      icon: <FaLandmark />,
      title: "Property Dispute Litigation",
      description: "Property disputes often involve intricate legal and factual issues. Whether you are dealing with boundary disagreements, easements, or ownership challenges, our firm provides decisive legal representation to protect your property rights and achieve equitable resolutions."
    },
    {
      icon: <FaShieldAlt />,
      title: "Small Business Litigation",
      description: "Small businesses face a variety of legal challenges, from contractual disputes to employee relations. We provide tailored legal services to help small business owners navigate conflicts, protect their assets, and minimize disruptions, ensuring your business continues to thrive."
    },
    {
      icon: <FaUsers />,
      title: "Trusts and Estates Litigation",
      description: "Trust and estate disputes require careful handling to balance legal precision with family dynamics. We represent clients in claims of mismanagement, breaches of fiduciary duty, and contested terms. Our focus is on ensuring fair administration and protecting the interests of beneficiaries"
    },
    {
      icon: <FaBriefcase />,
      title: "Will Writing",
      description: "A well-drafted will is essential for ensuring your assets are distributed according to your wishes. Our experienced attorneys provide personalized will-writing services, addressing tax implications, guardianship provisions, and specific bequests to create a document that provides peace of mind for you and your loved ones"
    }
  ];


  const companies = [
    { name: "ICICI Bank", logo: Icicibank },
    { name: "HDFC Bank", logo: Hdfcbank },
    { name: "IDFC First Bank", logo: IDFCfirstbank },
    { name: "Federal Bank", logo: Federalbank },
    { name: "RBL Bank", logo: RBLbank },
    { name: "Yes Bank", logo: Yesbank },
    { name: "Canara Bank", logo: Canrabank },
    { name: "Punjab Bank", logo: Punjabbank },
    { name: "DCB Bank", logo: Dcbbank },
    { name: "IndusInd Bank", logo: Indusindbank },
    { name: "Karur Vysya Bank", logo: Karurvysyabank },
    { name: "Kotak Mahindra Bank", logo: Kotakmahindrabank },
    { name: "Central Bank of India", logo: Centralbank },
    { name: "Adani Housing Finance Limited", logo: Adanilogo },
    { name: "Aditya Birla Housing Finance Limited", logo: Aditybirlahfl },
    { name: "Altum Credo", logo: Altumcredo },
    { name: "Avom Housing Finance Limited", logo: Avomhfl },
    { name: "Badradri Bank", logo: Badradri },
    { name: "Bajaj", logo: Bajaj },
    { name: "Can Fin Homes Ltd.", logo: Canfinhome },
    { name: "Capital India Housing Finance Limited", logo: Capitalindia },
    { name: "Centrum Housing Finance Limited", logo: Centrumhfl },
    { name: "Chola Housing Finance Limited", logo: Cholahfl },
    { name: "Five Star", logo: Fivestar },
    { name: "Grihum", logo: Grihum },
    { name: "HDB Financial Services", logo: Hdbfinancial },
    { name: "Hinduja Housing Finance", logo: Hindujahousingfinance },
    { name: "Hiranandani Financial Services", logo: Hiranandanifinancial },
    { name: "Hero Housing Finance", logo: HeroHousingFinance },
    { name: "Home First", logo: Homefirst },
    { name: "LIC Housing Finance Limited", logo: Lichfl },
    { name: "Mahendra Housing Finance", logo: Mahendra },
    { name: "Muthoot Finance", logo: Muthootfinance },
    { name: "Nido Housing Finance Limited", logo: Nidohfl },
    { name: "Nivara", logo: Nivara },
    { name: "Northern Arc Housing Finance", logo: Northernarchfl },
    { name: "Piramal Housing Finance Limited", logo: Piramalhfl },
    { name: "PNB Housing Finance Limited", logo: Pnbhfl },
    { name: "Indostar", logo: Indostar },
    { name: "Equitas", logo: Equitas },
    { name: "Prayaan Capital", logo: Prayaancapital },
    { name: "ICICI-Home finance", logo: Icicihfc },
    { name: "Incred finance", logo: Incredfinance },
    { name: "Indiabulls Housing finance", logo: Indiabullshfl }, 
    { name: "SBFC Housing Finance Limited", logo: SBFChfl },
    { name: "Shriram Housing Finance Limited", logo: Shriramhfl },
    { name: "Shubham", logo: Shubham },
    { name: "SMFG", logo: Smfg },
    { name: "Sundharam", logo: Sundharam },
    { name: "Tata Housing Finance Limited", logo: Tatahfl },
    { name: "Ummeed Housing Finance Limited", logo: Ummeedhfl },
    { name: "Wonder Housing Finance Limited", logo: Wonderhfl },
    { name: "Adhar House", logo: AdharHouse },
    { name: "Tyger", logo: Tyger },
    { name: "Altum", logo: Altum },
    { name: "PNB Home Finane", logo: PNBHomeFinane },
    { name: "Truhome Finane", logo: TruhomeFinance }
  ];

  return (
    <section className="services">
      <div className="banner">
        <img src={Banner} alt="law-banner" />
        <div className="banner-content">
          <h1>Your Trusted Legal Experts</h1>
        </div>
      </div>
      <div className="services-header">
        <h1 className="title">Our Services</h1>
        <p className="description">
          At <span className="company-name">SCM Law Firm</span>, we specialize in providing top-tier legal services in various domains. 
          Whether you're an individual, a family, or a corporation, our experienced team is here to guide 
          you through every legal challenge with expertise and dedication.
        </p>
      </div>
      <div className="service-cards">
        {serviceData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-container">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className='company-container'>
        <h1 className="title">Our Legal Advisors</h1>
        <div className="company-list">
          {companies.map((company, index) => (
            <div key={index} className='company-card'>
              <img src={company.logo} alt={company.name} className='company-logo' />
              <p className='services-company-name'>{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
