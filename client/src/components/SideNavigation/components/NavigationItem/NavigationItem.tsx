import React, { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavigationButton } from './navigationItem.styles';

type Props = {
  to: string;
  exact?: boolean;
};

function NavigationItem({ to, exact = false, children }: PropsWithChildren<Props>) {
  const location = useLocation();

  const isSelected = exact ? location.pathname === to : location.pathname.startsWith(to);

  return (
    <NavigationButton
      fullWidth
      disableRipple
      variant={isSelected ? 'contained' : 'text'}
      color={isSelected ? 'primary' : 'inherit'}
      // @ts-ignore
      component={Link}
      to={to}
    >
      {children}
    </NavigationButton>
  );
}

export default NavigationItem;
