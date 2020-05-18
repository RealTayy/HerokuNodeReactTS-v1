import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { _FriendsDetail, _FriendsDetail_Container } from './FriendsDetailStyles';
import { Container } from '../../components/Container';

type TFriendsDetailParams = {
  id: string
}

const FriendsDetail: FunctionComponent<RouteComponentProps<TFriendsDetailParams>> = ({ match }) => {
  return (
    <_FriendsDetail>
      <Container>
        <_FriendsDetail_Container>
          I am the FriendsDetail page [id:{match.params.id}]
        </_FriendsDetail_Container>
      </Container>
    </_FriendsDetail>
  )
}

export default FriendsDetail
