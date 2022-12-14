import { BlockWrapper, FlexWrapper } from './index.style';
import React from 'react';
import Icon from '../../componentes/shared/Icon';
import { Link } from 'react-router-dom';
import Animatiom from '../../componentes/shared/Animation';

const ErrorPage = () => {
  return (
    <FlexWrapper>
      <BlockWrapper style={{ borderBottom: '1px solid var(--cor-cinza-claro)', marginBottom: 16 }}>
        <Animatiom paused={false} name='404' size='100%' />
      </BlockWrapper>
      <BlockWrapper style={{ marginBottom: 32, fontSize: '1.2em' }}>
        Página não encontrada
      </BlockWrapper>
      <BlockWrapper style={{ fontSize: '2em' }}>
        <Link ignoreLocale style={{ color: 'var(--cor-preto)', fontSize: '0.8em' }} to='home'>
          <Icon name='home' size={20} />Início
        </Link>
      </BlockWrapper>
    </FlexWrapper>
  );
}

export default ErrorPage;