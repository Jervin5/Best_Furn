import React from "react";
import "./AboutPage.css";

import about_furniture from "../../Assets/about-furniture.jpg";
import about_dining from "../../Assets/about-dining.webp";
import Services from "../../Components/Home/Services/Services";

import "swiper/css";


const AboutPage = () => {
  return (
    <>
      <div className="aboutSection">
        <h2>About <span style={{color:"red"}}>Best Furn</span></h2>
        <img src={about_furniture} alt="" />
        <div className="aboutContent">
          <h3>Best Furniture Shop in Coimbatore</h3>
          <h4>
            Best Furniture shop in Coimbatore, where quality and elegance meet. With a wide range of options, we aim to be your go-to destination for all your furniture needs. Visit our shop in Edayarpalayam and explore our exquisite collection of Furnitures and dining tables. Experiences the best at our furniture showroom in Coimbatore.
            Welcome to the best furniture shop in Coimbatore. Visit our store in Edayarpalayam for a wide range of furniture options.
            Best Pooja Stand Collection in Coimbatore. we have 50 models of Chairs,Dining tables, in high quality and affordable price. Starting from 2,500 to 36,000 best furniture shop in Coimbatore with high Google Ratings.Furniture shop in Edayarpalayam Best Furn
          </h4>
          <p>
            Find the furniture stores in Coimbatore! Explore our premium selection of stylish and durable furniture pieces for your home. Shop now
          </p>
          <div className="content1">
            <div className="contentBox">
              <h5>Our Mission</h5>
              <p>
                "Our mission is to design and manufacture high-quality furniture that combines aesthetics with practicality. We are committed to using eco-friendly materials and processes, ensuring our products are not only beautiful but also sustainable. We strive to exceed customer expectations through exceptional service, innovative solutions, and a dedication to continuous improvement."
              </p>
            </div>
            <div className="contentBox">
              <h5>Our Vision</h5>
              <p>
                "Our vision is to be the leading provider of innovative, sustainable, and stylish furniture that transforms spaces and enhances the quality of life for our customers. We aim to inspire creativity and comfort in every home and office, setting new standards in design and functionality."
              </p>
            </div>
          </div>
          <div className="content2">
            <div className="imgContent">
              <img src={about_dining} alt="" />
            </div>
            <div className="textContent">
              <h5>The Company</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                sapien dignissim a elementum. Sociis metus, hendrerit mauris id
                in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
                sodales orci etiam phasellus lacus id leo. Amet turpis nunc,
                nulla massa est viverra interdum. Praesent auctor nulla morbi
                non posuere mattis. Arcu eu id maecenas cras.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
      {/* <div className="companyPartners">
        <h5>Company Partners</h5>
        <Swiper
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand6} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand7} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
    </>
  );
};

export default AboutPage;
