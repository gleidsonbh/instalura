import React from 'react';
import { Logo } from '../../../theme/Logo';
import Text from '../../foundation/Text';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {

    const links = [
        {
            texto: 'Home',
            url: '/',
        },
        {
            texto: 'Perguntas frequentes',
            url: '/faq',
        },
        {
            texto: 'Sobre',
            url: '/sobre',
        },
    ]

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CenterSide>
        {links.map(function (link) {
            return (
                <li key={link.url}>
                    <Text variant="smallesException" tag="a" href={link.url}>
                        {link.texto}
                    </Text>
                </li>
            )
        })}
      </MenuWrapper.CenterSide>
      <MenuWrapper.RightSide>
        <Button type="button" ghost variant="secondary.main">
          Entrar
        </Button>
        <Button type="button" variant="primary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}