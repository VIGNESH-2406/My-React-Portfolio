import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/hero2.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
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
      border: 15px solid var(--gray-1);
      height: 400px;
      width: 300px;
      padding: 2rem;
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
  a {
    font-size: 3rem;
    border: 1px solid #000066;
    padding: 10px;
    border-radius: 2rem;
    /* text-decoration: underline; */
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
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Vignesh Paulraj</span>
              </p>
              <h2 className="about__heading">A Full Stack Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from Bombay, India, Since my childhood, I love art and
                  design. I always believe inspiration can be found in the most
                  mundane places ,and the thought of channeling that into
                  something tangible is something I've always been curious about
                  and hence design stuff with my unique point of view. I also
                  love to create things that can be useful to others.
                  <br /> <br />I started coding since I was in high school.
                  Coding is also an art for me. I love it and now I have the
                  opportunity to design along with coding. I find it really
                  interesting and I enjoy the process a lot. My enthusiasm for
                  music art and literature has always provided me with the food
                  for thought, which is what I believe governs and fuels my
                  creativity and blends into my works with meticulous care.I
                  always try to portray and bring in everything around me to
                  connect far-flung thoughts into a single theme which inspires
                  and stimulates my works in every possible way hence
                  redirecting me with unique views to build websites for the
                  people through my design.
                </PText>
              </div>
              <div>
                <a
                  className=" font-size: 10rem;"
                  href="https://drive.google.com/file/d/1aAAEtFztpxLZtdzoDNWfejBjn5WxXFVB/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Résumé
                </a>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={["Holy Angel's School and Jr.college"]}
              />
              <AboutInfoItem
                title="College"
                items={['Bharthi vidyapeeth college of Engineering']}
              />
              <AboutInfoItem title="University" items={['Mumbai University']} />
              <AboutInfoItem
                title="Certification"
                items={['Fullstack Web development IIT-M']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'REACT.js',
                  'Redux',
                  'NEXT.js',
                  'Bootstrap',
                  'tailwindcss',
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node.js', 'Express', 'MongoDB', 'MySql', 'AWS']}
              />

              <AboutInfoItem
                title="Work skills"
                items={['Creative', 'Determined', 'Reliability', 'Team work']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
