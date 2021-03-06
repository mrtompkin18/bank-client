/**
 *
 * Sidebar
 *
 */

import React from 'react';
import logo from 'images/logo.png';
import { StyledLogo } from './Logo.style';

export default function Logo() {
  return (
    <StyledLogo>
      <img width="150" height="auto" src={logo} alt="Bank Application" />
    </StyledLogo>
  );
}
