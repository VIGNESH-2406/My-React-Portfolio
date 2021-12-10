import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="services" subheading="what i will do for you" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web Design"
            desc="I do ui/ux design for the website thats eyecatching and beautiful to look at and helping people to visit the website just for the web experience "
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web Dev"
            desc="I also develop the websites.I create high performance webite with blazing fast speed and elegantly crafted web apps"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="web Design"
            desc="I develop mobile aplications. I create mobile designs with beautiful and eye pleasing colours and animations"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
