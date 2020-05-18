import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { _Home, _Home_Container } from './HomeStyles';
import { Container } from '../../components/Container';

const Home: FunctionComponent<RouteComponentProps> = () => {
  return (
    <_Home>
      <Container>
        <_Home_Container>
          I am the Home page
        </_Home_Container>
      </Container>
    </_Home>
  )
}

export default Home
