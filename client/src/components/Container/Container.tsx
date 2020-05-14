import React, { FunctionComponent, HTMLAttributes } from 'react'
import { _Container } from './ContainerStyles';

const Container: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <_Container>
      {children}
    </_Container>
  )
}

export default Container
