import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat semiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;
export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'web design',
  desc = 'lorem epsumlorem epsumlorem epsumlorem epsumlorem epsum',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
