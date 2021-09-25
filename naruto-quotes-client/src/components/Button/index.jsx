import PropTypes from 'prop-types';

import { StyledButton } from './styles';

const Button = ({ children, onUpdate }) => {
  return <StyledButton onClick={onUpdate}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node,
  onUpdate: PropTypes.func.isRequired,
};

export { Button };
