import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const NavigationButton = styled(Button)`
  justify-content: flex-start;

  &.MuiButton-text {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
