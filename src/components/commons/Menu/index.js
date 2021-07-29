import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        Logo area (Esquerda)
      </MenuWrapper.LeftSide>
      <MenuWrapper.CenterSide>
        Links Area (centro)
      </MenuWrapper.CenterSide>
      <MenuWrapper.RightSide>
        Buttons Area (Direita)
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}