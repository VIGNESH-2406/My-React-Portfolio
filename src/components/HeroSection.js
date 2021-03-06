import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero1.jpg';
import Button from './Button';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -5rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: ' Georgia, serif';
      font-size: 5rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 300px;
    width: 100%;
    height: 400px;
    margin: 0 auto;
    border: 5px solid var(--gray-1);
    border-radius: 1rem;
    /* hover:  */
  }
  .hero__info {
    margin-top: 2rem;
    text-transform: uppercase;
    color: pink;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
        margin-bottom: 3rem;
      }
    }
    .hero__img {
      height: 150px;
      width: 200px;

      border-radius: 1rem;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 5rem;
              margin-bottom: 5rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.4rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <h1 className="hero__heading">
            <span>Hey There !</span>
            <span className="hero__name">I'm Vignesh Paulraj</span>
          </h1>
          <br />
          <br />
          <br />
          <br />
          <div className="hero__info">
            <h1>
              A web developer and brand identity designer with immense passion
              in building elegant and eyecatching websites with good experience
              in building sleek and scalable user interface, designing unique
              brand identities and building optimal backend systems.
            </h1>
            <Button btnText="see my works" btnLink="/project" />
          </div>
          <div className="hero__social">
            {/* <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://github.com/VIGNESH-2406"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li> */}
            {/* <li>
                  <a
                    href="http://twitter.com/webcifar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/vigneshpaulraj/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="http://webcifar.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li> */}
            {/* </ul> */}
            {/* </div> */}
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
