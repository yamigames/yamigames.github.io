/** @jsx jsx */

import { Link as ReactRouterLink } from 'react-router-dom';
import { jsx } from 'theme-ui';

export const Link = ({ external = false, to, ...props }) => {
  const style = {
    color: 'inherit',
    textDecoration: 'none',
  };

  return external ? (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a {...props} href={to} sx={style} />
  ) : (
    <ReactRouterLink {...props} {...{ to }} sx={style} />
  );
};
