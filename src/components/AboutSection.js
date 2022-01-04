// import React from 'react';
// import styled from 'styled-components';
// import Button from './Button';
// import PText from './PText';
// import SectionTitle from './SectionTitle';
// import AboutImg from '../assets/images/about-sec-img.png';

// const AboutSectionStyles = styled.div`
//   padding: 10rem 0;
//   .container {
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     text-align: left;
//   }
//   .line {
//     height: 5px;
//     width: 100%;
//     background-color: white;
//     transform: translateY(20px);
//   }
//   .line__container {
//     display: flex;
//     align-items: center;
//   }
//   .aboutSection__left,
//   .aboutSection__right {
//     flex: 1;
//   }
//   .section-title {
//     text-align: left;
//   }
//   .para {
//     margin-top: 2rem;
//     margin-left: 0;
//   }
//   .aboutSection__buttons {
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     gap: 2rem;
//     margin-top: 2rem;
//   }
//   @media only screen and (max-width: 950px) {
//     .aboutSection__left {
//       flex: 4;
//     }
//     .aboutSection__right {
//       flex: 3;
//     }
//   }
//   @media only screen and (max-width: 768px) {
//     .container {
//       flex-direction: column;
//       text-align: center;
//     }
//     .aboutSection__left,
//     .aboutSection__right {
//       width: 100%;
//     }
//     .aboutSection__right {
//       margin-top: 3rem;
//     }
//     .section-title {
//       text-align: center;
//     }
//     .para {
//       margin: 0 auto;
//       margin-top: 2rem;
//     }
//     .aboutSection__buttons {
//       flex-direction: column;
//       gap: 0rem;
//       .button-wrapper,
//       a {
//         width: 100%;
//         text-align: center;
//       }
//     }
//   }
// `;

// export default function AboutSection() {
//   return (
//     <AboutSectionStyles>
//       <div className="container">
//         <div className="aboutSection__left">
//           <div className="line__container">
//             <SectionTitle
//               subheading="Let me introduce myself"
//               heading="About Me"
//             />
//             <div className="line"> </div>
//           </div>
//           <PText>
//             I am a website designer and developer from Bombay, India. I create
//             professional websites which are logical and results-driven I'm
//             dedicated to building and optimizing user-focused and for users with
//             various business objectives. Judicious and creative when crafting
//             effective websites, apps and platforms to propel competitive
//             advantage and revenue growth. Technically proficient and analytical
//             problem solver with calm and focused demeanor.
//           </PText>
//           <div className="aboutSection__buttons">
//             <Button btnText="Works" btnLink="/project" />
//             <Button btnText="Read More" btnLink="/about" outline />
//           </div>
//         </div>
//         <div className="aboutSection__right">
//           <img className="aboutImg" src={AboutImg} alt="Img" />
//         </div>
//       </div>
//     </AboutSectionStyles>
//   );
// }
