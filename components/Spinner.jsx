import React from 'react';
import { Spinner as HeroSpinner } from '@heroui/react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 9999;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Spinner = ({ size = 'md', color = 'primary', overlay = true }) => {
  const content = (
    <Center>
      <HeroSpinner size={size} color={color} />
    </Center>
  );

  if (overlay) {
    return <Backdrop>{content}</Backdrop>;
  }

  return content;
};

export default Spinner;
