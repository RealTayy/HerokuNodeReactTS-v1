import React, { FunctionComponent } from 'react'
import { FormCreateFriend } from '../../components/Form';
import { RouteComponentProps } from 'react-router-dom';
import { _AddFriend, _AddFriend_Container } from './AddFriendStyles';
import { Container } from '../../components/Container';

const AddFriend: FunctionComponent<RouteComponentProps> = () => {
  return (
    <_AddFriend>
      <Container>
        <_AddFriend_Container>
          <FormCreateFriend />
        </_AddFriend_Container>
      </Container>
    </_AddFriend>
  )
}

export default AddFriend
