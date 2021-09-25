import PropTypes from 'prop-types';

import { Button } from '../index';
import { Wrapper, Quote, Speaker } from './styles';

export const Quotes = ({ quote, speaker, onUpdate }) => {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <Speaker>- {speaker}</Speaker>
      <Button onUpdate={onUpdate}>Quote No Just</Button>
    </Wrapper>
  );
};

Quotes.propTypes = {
  quote: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
