import { Drawer } from '@material-ui/core';
import styled from 'styled-components';

export const SideNavigationContainer = styled(Drawer)`
  & > .MuiPaper-root {
  }
`;

export const NavigationContainer = styled.nav`
  flex-grow: 1;
`;

export const NavigationItemsContainer = styled.nav`
  padding: 5rem 1rem 2rem;
  flex-grow: 1;
`;
