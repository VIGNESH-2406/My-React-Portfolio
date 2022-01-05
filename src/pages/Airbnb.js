import React from 'react';
import styled from 'styled-components';

import AirbnbImg from '../assets/images/Airbnb.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const SingleProductPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 5px solid var(--gray-1);
      height: 500px;
      width: 400px;
      border-radius: 3rem;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
  a {
    font-size: 3rem;
    letter-spacing: 5px;
    margin-bottom: 2rem;
    padding: 10px;
    border: 1px solid #000066;
    border-radius: 2rem;
  }
`;

export default function Airbnb() {
  return (
    <>
      <SingleProductPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                This is <span>Hotel Booking Platform</span>
              </p>
              <h1 className="about__info__heading">Built With</h1>
              <div className="about__info__items">
                <div className="about__info__item">
                  <AboutInfoItem
                    title="FrontEnd"
                    items={[
                      'REACT.js',
                      'NEXT.js',
                      'tailwindcss',
                      'PayPal integrated',
                    ]}
                  />
                  <br />
                  <AboutInfoItem
                    title="BackEnd"
                    items={['Node.js', 'Express', 'MongoDB']}
                  />
                </div>
              </div>
              <a
                className=" font-size: 10rem;"
                href="https://airbnb-frontend-ashy.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View site
              </a>
            </div>
            <div className="right">
              <img src={AirbnbImg} alt="me" />
            </div>
          </div>
        </div>
        <ContactBanner />
      </SingleProductPageStyles>
    </>
  );
}
