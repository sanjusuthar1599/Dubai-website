// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';


const services = [
  {
    href: "/en/information-and-services/top-government-services",
    imgSrc: "https://u.ae/-/media/TopServices/24/24Hours/24Hours.png?h=130&iar=0&w=233&hash=DB5601B259240F3C55D6AA209DA87FFE",
    imgAlt: "",
    imgWidth: 233,
    imgHeight: 130,
    title: "Services around the clock",
    description: "Top digital services provided by government entities around the clock",
    nextlink : "https://u.ae/en/information-and-services/top-government-services"
    
  },
  {
    href: "/en/information-and-services/visa-and-emirates-id",
    imgSrc: "https://u.ae/-/media/Services/Visa-and-Emirates-ID.png?h=130&iar=0&w=248&hash=ACEE67F05DECB6EEA0C37F59104556F2",
    imgAlt: "",
    imgWidth: 248,
    imgHeight: 130,
    title: "Visa and Emirates ID",
    description: "Tourist visas, visit visas, entry permits, residency permits and Emirates ID",
    nextlink : "https://u.ae/en/information-and-services/visa-and-emirates-id"
  },  {
    href: "/en/information-and-services/visa-and-emirates-id",
    imgSrc: "https://u.ae/-/media/homepage-images-2019/thumb-jobs.jpg?h=130&iar=0&w=248&hash=E85792EE930D82E092F7C863A5FC4C7B",
    imgAlt: "",
    imgWidth: 248,
    imgHeight: 130,
    title: "Visa and Emirates ID",
    description: "Tourist visas, visit visas, entry permits, residency permits and Emirates ID",
    nextlink : ""
  },
  {
    href: "/en/information-and-services/visa-and-emirates-id",
    imgSrc: "https://u.ae/-/media/homepage-images-2019/thumb-edu.jpg?h=130&iar=0&w=248&hash=074A172696654EF90A5A26273134A44D",
    imgAlt: "",
    imgWidth: 248,
    imgHeight: 130,
    title: "Visa and Emirates ID",
    description: "Tourist visas, visit visas, entry permits, residency permits and Emirates ID",
    nextlink : "https://u.ae/en/information-and-services/jobs"
  },
  {
    href: "/en/information-and-services/visa-and-emirates-id",
    imgSrc: "https://u.ae/-/media/Services/Businesses.PNG?h=130&iar=0&w=227&hash=424B2B16443707C6A699709B8FC6FF8A",
    imgAlt: "",
    imgWidth: 248,
    imgHeight: 130,
    title: "Visa and Emirates ID",
    description: "Tourist visas, visit visas, entry permits, residency permits and Emirates ID",
    nextlink : "https://u.ae/en/information-and-services/education"
  },
  {
    href: "/en/information-and-services/visa-and-emirates-id",
    imgSrc: "https://u.ae/-/media/Images-2022/Images-September-2022/articlegrandmosque1320x754.jpg?h=130&iar=0&w=246&hash=27E71A13750C0C260CBEC1AEB3197944",
    imgAlt: "",
    imgWidth: 248,
    imgHeight: 130,
    title: "Visa and Emirates ID",
    description: "Tourist visas, visit visas, entry permits, residency permits and Emirates ID",
    nextlink : "https://u.ae/en/information-and-services/moving-to-the-uae"
  },
  {
    href: "/en/information-and-services/visa-and-emirates-id",
    imgSrc: "https://u.ae/-/media/Information-and-services/Justice-safety-and-the-law/Justise-and-safety.jpg?h=130&iar=0&w=248&hash=38AAE992515D796B35326D6139D645B0",
    imgAlt: "",
    imgWidth: 248,
    imgHeight: 130,
    title: "Visa and Emirates ID",
    description: "Tourist visas, visit visas, entry permits, residency permits and Emirates ID",
    nextlink : "https://u.ae/en/information-and-services/justice-safety-and-the-law"
  },
  {
    href: "/en/information-and-services/visa-and-emirates-id",
    imgSrc: "https://u.ae/-/media/Services/Visiting-UAE.PNG?h=130&iar=0&w=227&hash=71E6A8CB80B172EF7A62FEF6091FE830",
    imgAlt: "",
    imgWidth: 248,
    imgHeight: 130,
    title: "Visa and Emirates ID",
    description: "Tourist visas, visit visas, entry permits, residency permits and Emirates ID",
    nextlink : "https://u.ae/en/information-and-services/visiting-and-exploring-the-uae"
  },
  // Add more service objects here
];


const Cart = () => {
  return (
    <div id="homeServices" className="container">
      <h2 className="text-black line-1 services-title ">Information and services</h2>
      <div className="row row-flex">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 col-lg-3 d-flex">
            <div className="home-service">
              <Link to={service.nextlink} className="home-service-image">
                <img
                  src={service.imgSrc}
                  alt={service.imgAlt}
                  width={service.imgWidth}
                  height={service.imgHeight}
                />
              </Link>
              <h4 className="home-service-title trim-2">
                <Link className="no-underline" to={service.nextlink || service.href}>
                  {service.title}
                </Link>
              </h4>
              <p className="home-service-info trim-3">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Cart;