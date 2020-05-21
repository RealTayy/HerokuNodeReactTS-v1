import React, { FunctionComponent } from 'react';
import { _Sidenav } from './SidenavStyles';
import { TSidenavProps } from './TSidenavProps';

const Sidenav: FunctionComponent<TSidenavProps> = () => {
  return (
    <_Sidenav>
      I am that side nav
    </_Sidenav>
  )
}

export default Sidenav
